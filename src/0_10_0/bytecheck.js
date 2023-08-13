var Validator,minLength,maxLength,email,phone,date,min,max,greater,less,url;
(function(){
	const NOPASS = 12;
	const NOES = 17; // cuando no es del tipo de dato que se esperaba
	let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
	let mesesInglish = ["january","february","march","april","may","june","july","august","september","october","november","december"];
	class Validator2{
		constructor(v,e,fun){
			this.validate = function(string){
				return fun(string,v,e);
			}	
		}
		
	}
	Validator = Validator2;
	minLength = function(numero,error) {
		return new Validator(numero,error,function(string,numero,error){
			error = error || "tiene que tener al menos "+(numero)+" caracteres";
			if(typeof string == "string"){
				if(string.length < numero){
					return {error:error,type:NOPASS};
				}
				return null;
			}
			return {error:error,type:NOES};
		});
	}
	maxLength = function(numero,error) {
		return new Validator(numero,error,function(string,numero,error){
			error = error || "tiene que tener menos de "+(numero+1)+" caracteres";
			if(typeof string == "string"){
				if(string.length > numero){
					return {error:error,type:NOPASS};
				}
				return null;
			}
			return {error:error,type:NOES};
		});
	}
	email = function(error){
		return new Validator(null,error,function(string,numero,error){
			const exp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
			error = error || "no es un email valido";
			if((typeof string).toLowerCase() == "string"){
				if(!exp.test(string)){
					return {error:error,type:NOPASS};
				}
				return null;
			}
			return {error:error,type:NOES};
		});
	}
	url = function(error){
		return new Validator(null,error,function(string,numero,error){
			const exp =/^((http|https):\/\/www\.)?([a-zA-Z0-9]+\.){1,}[a-zA-Z0-9]{1,}(\/[^\s]*)?$/i
			error = error || "no es una url valida";
			if(typeof string == "string"){
				if(!exp.test(string)){
					return {error:error,type:NOPASS};
				}
				return null;
			}
			return {error:error,type:NOES};
		});
	}
	phone = function(error){
			return new Validator(null,error,function(string,numero,error){
			const exp = /^\d{10,11}$/;
			const international = /^(\+\d{1,3}\d{10,11})$/;
			

			if(typeof string == "number"){
				string = string+"";
			}
			if(typeof string == "string"){
				string = string.replaceAll("_","").replaceAll("-","");
				if(!exp.test(string) && !international.test(string)){
					return {error:error,type:NOPASS};
				}
				return null;
			}
			return {error:error,type:NOES};
		});
	}
	date = function(error){
			error = error || "no es una fecha valida";
			return new Validator(null,error,function(string,numero,error){
				const exp = /\d{1,2}\/\d{1,2}\/\d{2,4}/;
				if(typeof string == "string"){
					let separator = string.split("/")
					if(separator.length == 1){
						separator = string.split("-");
					}
					if(separator.length == 3){
						let y = meses.indexOf(separator[1].toLowerCase());
						if(y < 0){ y = mesesInglish.indexOf(separator[1].toLowerCase()); }
						if(y >= 0){ separator[1] = y+1; }
						
						string = separator.join("/")
						if(!exp.test(string)){
							return {error:error,type:NOPASS};
						}
					}else{
						return {error:error,type:NOPASS};
					}
					return null;
				}
				return {error:error,type:NOES};
		});
	}
	min = function(number,error){
		error = error || "minimo "+number+" cantidad";
		return new Validator(number,error,function(n1,n2,error){
			if(typeof n1 == "number"){
				if(n1 < n2){
					return {error:error,type:NOPASS};
				}
				return null;
			}
			return {error:error,type:NOES};
		});
	}
	greater = function(number,error){

		return new Validator(number,error,function(n1,n2,error){
			if(typeof n1 == "number"){
				if(n1 <= n2){
					return {error:error,type:NOPASS};
				}
				return null;
			}
			return {error:error,type:NOES};
		});
	}
	less = function(number,error){
		return new Validator(number,error,function(n1,n2,error){
			if(typeof n1 == "number"){
				if(n1 >= n2){
					return {error:error,type:NOPASS};
				}
				return null;
			}
			return {error:error,type:NOES};
		});
	}
	max = function(number,error){
		error = error || "maximo "+number+" cantidad";
		return new Validator(number,error,function(n1,n2,error){
			if(typeof n1 == "number"){
				if(n1 > n2){
					return {error:error,type:NOPASS};
				}
				return null;
			}
			return {error:error,type:NOES};
		});
	}
})();

const b = {
	Number:function(e){
		return {
			validate:function(err){
				let content = {}
				let errors = null;
				if(typeof err != "number"){
					throw new Error("No es un numero");
				}
				if(Array.isArray(e)){
					for(var i = 0; i < e.length; i++){
						const y = e[i];
						if(y instanceof Validator){
							const result = y.validate(err);
							if(result != null){
								if(errors == null){
									errors = {details:[]};
								}
								errors.details.push(result.error);
							}
						}else{
							throw new Error("El valor que se paso en b.Object no es instancia de Validator");
						}
					}
				}else if(e instanceof Validator){
					const y = e.validate(err);
					if(y != null){
						errors = {details:[y.error]};
					}
				}
				content.error = errors;
				return content;
			}
		}
	},
	String: function(e){
		return {
			validate:function(err){
				let content = {}
				let errors = null;
				if(typeof err != "string"){
					throw new Error("No es un String");
				}
				if(Array.isArray(e)){
					for(var i = 0; i < e.length; i++){
						const y = e[i];
						if(y instanceof Validator){
							const result = y.validate(err);
							if(result != null){
								if(errors == null){
									errors = {details:[]};
								}
								errors.details.push(result.error);
							}
						}else{
							throw new Error("El valor que se paso en b.Object no es instancia de Validator");
						}
					}
				}else if(e instanceof Validator){
					const y = e.validate(err);
					if(y != null){
						errors = {details:[y.error]};
					}
				}
				content.error = errors;
				return content;
			}
		}
	}
};


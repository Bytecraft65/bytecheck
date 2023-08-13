
//main.js
const {Validator,minLength,maxLength,NOPASS,NOES,email,phone,date,min,max,greater,less,url} = require("./validate");
class validadores{
	validate(){
		return null;
	}
}
class Number extends validadores{

}
class String extends validadores{

}
class xArray extends validadores{

}
class object extends validadores{

}
const b = {
	/*Object:function(e){
		return {
			validate:function(object){
				let content = {}
				let errors = null;
				if(Array.isArray(e)){
					for(var i = 0; i < e.length; i++){
						const y = e[i];
						if(y instanceof Validator){
							const result = y.validate(object);
							if(result != null){
								if(errors == null){
									errors = { details:[]};
								}
								errors.details.push(result.error);
							}
						}else{
							throw new Error("El valor que se paso en b.Object no es instancia de Validator");
						}
					}
				}else if(e instanceof Validator){
						const result = e.validate(object);
						if(result != null){
							if(errors == null){
								errors = { details:[result.error]};
							}
						}
				}


				content.error = errors;
				return content;
			}
		}
	},*/
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
	/*,
	Array:function(sa) {
	}
	*/
};

module.exports = {b,Validator,minLength,maxLength,email,phone,date,min,max,greater,less,url};
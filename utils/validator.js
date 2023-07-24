module.exports = {
    validateBody: (schema) => {
      
        return (req,res,next)=> {
        const result = schema.validate(req.body);
        if(result.error){
            let errMsg = result.error.details[0].message;
            next(new Error(errMsg));
        }else{
            next();
        }
        }
    },
    validateParam:(schema,name)=>{
        return (req,res,next) =>{
            //console.log('request', req.params)
            let obj = {};
            obj[`${name}`] = req.params[`${name}`];
            let result = schema.validate(obj);
            //console.log('result', result)
            if(result.error){
                next(new Error(result.error.details[0].message));
            }else{
                next();
            }
        }
    }
}
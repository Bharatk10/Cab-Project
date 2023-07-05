export const validateData=(email,password)=>{
    let isEmailValidated=false
    let isPasswordValidated=false
    const emailValidator = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const passwordValidator = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
    if (emailValidator.test(email)) {
        isEmailValidated=true
    }

    if (passwordValidator.test(password)) {
        isPasswordValidated=true
    }

    if(isEmailValidated && isPasswordValidated){
        return {valid:true,error:null}
    }else{
        if(!isEmailValidated)
        return {valid:false,error:"Invalid Email Format"}
        if(!isPasswordValidated)
        return {valid:false,error:"Invalid Password Format"}
    }
}
export const validateSignupData=(email,password,name,number)=>{
    let isEmailValidated=false
    let isPasswordValidated=false
    let isNameValidated=false
    let isNumberValidated=false
    const emailValidator = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const passwordValidator = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
    const numberValidator = /\(?\d+\)?[-.\s]?\d+[-.\s]?\d+/;
    if (emailValidator.test(email)) {
        isEmailValidated=true
    }

    if (passwordValidator.test(password)) {
        isPasswordValidated=true
    }

    if(number.length==10 && numberValidator.test(number)){
        isNumberValidated=true
    }
    console.log(name.length)
    if(name.length>=1){
        isNameValidated=true
    }

    if(isEmailValidated && isPasswordValidated && isNameValidated && isNumberValidated){
        return {valid:true,error:null}
    }else{
        if(!isNameValidated)
        return {valid:false,error:"Invalid Name Format"}
        if(!isEmailValidated)
        return {valid:false,error:"Invalid Email Format"}
        if(!isPasswordValidated)
        return {valid:false,error:"Invalid Password Format"}
        if(!isNumberValidated)
        return {valid:false,error:"Invalid Number Format"}
    }
}
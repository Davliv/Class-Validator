class Validator {

 validateEmail (email){
    let regex = /^[^@\/\\*,~!#^()]+@[a-z]+\.[a-z]+$/;
    return regex.test(email);
  }

 validatePassword(password){
   let md5 = require('md5');
   console.log(md5('message'));
    if(!password) return false;
    return password.length >= 6 && password.length <= 24;
  }

 validateUsername(str){
   let UsernameRegex = /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
   return UsernameRegex.test(str);
}

 validatePhone(str){
   return  str.split('-').join('').split(' ').join('').split('(').join('').split(')').join('');
}

 validateBirthday(str){
   let date = Date.parse(str);
   return !isNaN(date);
}

}

let check = new Validator();
console.log(check.validateBirthday('11/24/1993'));

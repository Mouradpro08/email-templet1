
/*let email = document.getElementById('email');
let password = document.getElementById('password');
let submit = document.getElementById('submit');

console.log(email, password,submit);

let epdata = [];

submit.onclick = function () {
    let newarry = {
        email:email.value,
        password:password.value,
    }
    epdata.push(newarry)
  console.log(epdata)
}*/
///  local storag *///
let email = document.getElementById('email');
let password = document.getElementById('password');
let submit = document.getElementById('submit');

console.log(email, password,submit);

let epdata;
if(localStorage.emailPassword != null){
    epdata = JSON.parse(localStorage.emailPassword)
}else{
    epdata = [];

}


submit.click = function () {
    let newarry = {
        email:email.value,
        password:password.value,
    }
    epdata.push(newarry)
    localStorage.setItem('emailPassword', JSON.stringify(epdata))
  console.log(epdata)
}
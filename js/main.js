
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var signUpdata=[];

/////////////



// sign-up/
if (localStorage.getItem('users') == null) {
    signUpdata = []
} else {
    signUpdata = JSON.parse(localStorage.getItem('users'))
}
function check(){
    for(var i=0 ;i <signUpdata.length; i++ ){
         if (signUpdata[i].email.toLowerCase() == signupEmail.value.toLowerCase()){
           return false
         }


    }
}
function signUp() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
   return false  }
    var sign = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }


if (signUpdata.length==0){
    signUpdata.push(sign)
    localStorage.setItem("users" , JSON.stringify(signUpdata))
     document.getElementById('exist').innerHTML ='<span class="text-success m-3">Success</span>'
return true}

if (check() == false) {
    document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

}
else {
    signUpdata.push(sign)
    localStorage.setItem('users', JSON.stringify(signupdata))
    document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'

}
}

// signin///

function LoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}

function login() {
    if (LoginEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var password = signinPassword.value
    var email = signinEmail.value
    for (var i = 0; i < signUpdata.length; i++) {
        if (signUpdata[i].email.toLowerCase() == email.toLowerCase() && signUpdata[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername', signUpdata[i].name)

    window.location.href = "home.html";
        } else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
            }

        }
//home////

        var username = localStorage.getItem('sessionUsername')
        if (username) {
            document.getElementById("welcome").innerHTML = "Welcome " + username
        }




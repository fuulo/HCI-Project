function validateRegisForm(){
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var confpassword = document.getElementById("confpassword").value
    var dob = document.getElementById("dob").value
    var male = document.getElementById("male").value
    var female = document.getElementById("female").value
    var checkbox = document.getElementById("agree").value

    if(username.length < 5 || username.length > 15){
        alert("Your username length must be greater than 5 characters and less then 15 characters!")
    } else if(!email.endsWith("@gmail.com") && !email.endsWith("@yahoo.com")){
        alert("Your email must ends with @gmail.com or @yahoo.com!")
    } else if(checkAlphanumeric(password)){
        alert("Your password must be alphanumeric!")
    } else if(confpassword != password){
        alert("Your confirmation password must be the same as your password above!")
    } else if(!dob){
        alert("You must fill the DoB!")
    } else if(!male && !female){
        alert("Your gender must be choose!")
    } else if(!checkbox){
        alert("Please checklist the terms and conditions checkbox!")
    } else{
        alert("Registration Form has been submitted, Thank You!")
    }
}

function checkAlphanumeric(password){
    var alphabet = false
    var numeric = false 

    for(let i = 0; i < password.length; i++){
        if(isNaN(password[i])){
            alphabet = true
        } else{
            numeric = true
        }
        if(alphabet == true & numeric == true){
            return true
        }
    } return false
}

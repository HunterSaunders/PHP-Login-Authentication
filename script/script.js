const userDatabase = [
    {
        first: "Patrick",
        last: "Johnson",
        email: "p.johnson@email.com",
        password: "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5"
    }
];


const setupNewUser = () =>{
    let firstName = document.getElementsByName('first')[0].value;
    let lastName = document.getElementsByName('last')[0].value;
    let userEmail = document.getElementsByName('email')[0].value;
    let userPassword = document.getElementsByName('password')[0].value;
    let confirmUserPassword = document.getElementsByName('confirm-password')[0].value;


    var userInfo = {};
    if (firstName.length <= 0){
        document.getElementsByName('last')[0].focus();
    }else if (lastName.length <=0){
        console.log("error2");
    }else if(userEmail.length <=0 ){
        console.log("error3")
    }else if(userPassword.length < 8){
        console.log("error4")
    }else{
        userInfo.first = firstName[0].toUpperCase() + firstName.slice(1);
        userInfo.last = lastName[0].toUpperCase() + lastName.slice(1);
        userInfo.email = userEmail;
        userInfo.password = sha256(userPassword);
        userDatabase.push(userInfo)

    }

    console.log(userDatabase)
    

};
const validateUserLogin = () =>{
    let email = document.getElementsByName('email-login')[0].value;
    let password = document.getElementsByName('password-login')[0].value;
    if(userDatabase.some(user => user.email === email && user.password === password)){
        console.log('Success')
    } else{
        console.log('Invalid')
    }
};
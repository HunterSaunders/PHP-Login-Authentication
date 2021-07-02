const userDatabase = [
    {
        first: "Patrick",
        last: "Johnson",
        email: "p.johnson@email.com",
        password: "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5"
    }
];


const setupNewUser = () =>{
    console.log(userDatabase)
    var userInfo = {};
    userInfo.first = document.getElementsByName('first')[0].value;
    userInfo.last = document.getElementsByName('last')[0].value;
    userInfo.email = document.getElementsByName('email')[0].value;
    userInfo.password = document.getElementsByName('password')[0].value;
    userDatabase.push(userInfo)
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
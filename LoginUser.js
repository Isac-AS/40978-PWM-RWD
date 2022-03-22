function checkUser(){
    const username = document.getElementById("email1").value;
    const password = document.getElementById("password1").value;
    console.log(username);
    console.log(password);
    console.log("aaaaaa");
    if(username === "admin@admin.com" && password === "admin"){
        alert("You have logged in as Administrator");
    }
    else{
        alert("Log in error, please try again with another email and password");
    }
}
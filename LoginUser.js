function checkUser() {
    const email = document.getElementById("email1").value;
    const password = document.getElementById("password1").value;

    $.ajax({
        type: "GET",
        url : "Users.json",
        success:function(response)
        {
            console.log(response);
            for(i = 0; i < response.length; i++){
                if(email === response[i].address && password === response[i].password){
                    window.alert("You have logged in as " + response[i].name);
                    window.location.href="index.html";
                    break;
                }
                else{
                    alert("Log in error, please try again with another email and password");
                    break;
                }
            }
        }
    });
}

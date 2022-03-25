function checkUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let fail;
    $.ajax({
        type: "GET",
        url : "data/Users.json",
        success:function(response)
        {
            console.log(response);
            for(i = 0; i < response.length; i++){
                if(email === response[i].address && password === response[i].password){
                    window.alert("You have logged in as " + response[i].name);
                    window.location.href="index.html";
                    fail = true;
                    break;
                }
                else{
                    fail = false;
                }
            }

            if (!fail){
                alert("Log in error, please try again with another email and password");
            }
        }
    });
}



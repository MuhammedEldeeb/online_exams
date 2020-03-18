function validateSignUpForm() {
    var name = document.forms["signUp"]["name"].value;
    var email=document.forms["signUp"]["email"].value;
    var password=document.forms["signUp"]["password"].value;
    var t=((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email));
    if (name !== "" &&t&&password.length>6) {
        return true;
    }else{
      alert("check your inputs");
      return false;
    }
  };
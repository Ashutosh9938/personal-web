//var a = prompt("You are sexy. yes or no" ," ");
//console.log(a);
//validation of name
document.getElementById("name").onblur=validatename; 
{
  var names
  names = document.getElementById("name").value;

  // check wheter the name is empty or not
  if (names == " ") {
    document.write("Name cannot be empty");
    return false;
  } else {
    //check pattern firstname middlename lastname
    var pos = names.search(/^[A-Za-z]{2,}(\s[A-Za-z]{2,}\.)?\s[A-Za-z]{2,}$/);
    if (pos == -1) {
      document.write("Name should be in the format of Firstname Middlename Lastname");
      return false;
    } else {
      document.write("name is valid");
      return true;
    }
  }
}
//validation of email
document.getElementById("email").onchange = validateEmail;

function validateEmail() {
  // check if the email is empty or not
  var email = document.getElementById("email").value;
  if (email == "") {
    document.write("Email cannot be empty");
    return false;
  }
  // check if the email is valid or not
  else {
    var pos = email.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (pos == -1) {
      document.write("Email is not valid");
      return false;
    } else {
      document.write("Email is valid");
      return true;
    }
  }
}
//validate password
document.getElementById("password").onchange=validatePassword;
function validatePassword(){
    var password=document.getElementById("password").value;
    var repassword=document.getElementById("repassword").value;
    //check weather the field is empty or not
    if(password ==""|| repassword == ""|| password.length<6){
      document.write("password length must be 6 char");
        return false;
    }
    //check if password matches or not
    else{ 
        if(password!==repassword)
        {
          document.write("password doesnot match");
            return false;
        }
        else{
            return true;

        }
    }
}
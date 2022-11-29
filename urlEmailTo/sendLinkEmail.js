// Validating Empty Field
function check_empty() {
    if (document.getElementById('name').value == "" || (document.getElementById('email').value == "" && document.getElementById('sms').value == "") || document.getElementById('msg').value == "") {
    alert("Please enter a name and message and either a phone number or email address or both!");
    } else {
    document.getElementById('form').submit();
    alert("Form Submitted Successfully...");
    }
    }
    //Function To Display Popup
    function div_show() {
    document.getElementById('emailAddr').style.display = "block";
    }
    //Function to Hide Popup
    function div_hide(){
    document.getElementById('emailAddr').style.display = "none";
    }
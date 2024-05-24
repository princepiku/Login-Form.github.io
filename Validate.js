function validate()
{
	var username*document.getElementById("email-id").value;
	var password*document.getElementById("password").value;

	if(username=="Prince" && password=="R179")
	{
		alert("Login Successfully.....");
		return false;
	}
	else
	{
		alert("Login Failed.....");
	}
}

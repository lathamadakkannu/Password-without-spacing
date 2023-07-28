var a=prompt("Enter a password");

document.write("Given Password="+a+"<br><br>");
var b=[];
for (i=0; i<a.length;i++){
	if (a[i]==" "){
		console.log(b.push(a[i]));
	}
}

if (b!=""){
		document.write("Password did not accept space <br>Please Enter correct password")
	}
else if (b==""){
		document.write("Password is correct");
	}
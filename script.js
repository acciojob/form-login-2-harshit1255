//your JS code here. If required.
const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	alert(`First Name: ${form.fname.value}\nLast Name: ${form.lname.value}\nPhone Number: ${form.number.value}\nEmail ID: ${form.email.value}`)
})
const mail_btn = document.querySelector(".mailing_button");
const mail_btn_tooltip = document.querySelector(".email_tooltip");

mail_btn.addEventListener("click", copyText);

function copyText() {
	var myTemporaryInputElement = document.createElement("input");
	myTemporaryInputElement.type = "text";
	myTemporaryInputElement.value = "hellotushaar@gmail.com";
	document.body.appendChild(myTemporaryInputElement);
	myTemporaryInputElement.select();
	document.execCommand("Copy");

	document.body.removeChild(myTemporaryInputElement);

	mail_btn_tooltip.classList.add('active');

	setTimeout(() => {
		mail_btn_tooltip.classList.remove('active');
	}, 2000);
}
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const ccontainer = document.getElementById('ccontainer');

signUpButton.addEventListener('click', () => {
	ccontainer.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	ccontainer.classList.remove("right-panel-active");
});
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const JoinUs = document.querySelector('.Join-Us');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    document.getElementById("register_form").reset();
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    document.getElementById("login_form").reset();
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-popup');
});

JoinUs.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    wrapper.classList.add('active-popup');
});
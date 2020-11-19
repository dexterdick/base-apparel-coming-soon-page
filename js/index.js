const form = document.getElementById('form');
const emailAddress = document.getElementById('form-input');
const btn = document.getElementById('form-btn');

window.onload = function() {
  const input = document.getElementById("form-input").focus();
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  const emailValue = emailAddress.value.trim();
  const alert = document.querySelector('.error-icon');
  const msg = document.querySelector('.error-msg');

  if(!validateEmail(emailValue)) {
    alert.style.display='block';
    msg.style.display ='block';
    emailAddress.style.borderColor ='red';
    emailAddress.style.borderWidth ="2px";
    emailAddress.focus();

  }else {
    alert.style.display='none';
    msg.style.display ='none';
    emailAddress.style.borderColor ='var(--DesaturatedRed)';
    emailAddress.style.borderWidth ="1px"; 
    emailAddress.focus();
    
  }


}); 

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}



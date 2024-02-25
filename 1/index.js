$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);


function sendEmail() {
  const contactForm = document.querySelector('#contactForm');
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  
  if (name === '') {
      alert('Please enter your name.');
  } else if (email === '') {
      alert('Please enter your email.');
  } else if (message === '') {
      alert('Please enter your message.');
  } else {
      const toEmail = 'nassim_work@yahoo.com';
      const subject = `New message from ${name}`;
      const body = `${message}\n\n--\n${name}\n${email}`;
      const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&from=${encodeURIComponent(email)}`;
      window.open(mailtoLink, '_blank');
      contactForm.reset();
      alert('Email sent!');
  }
}

  

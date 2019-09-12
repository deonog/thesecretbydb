// Page animations
WhatAnimation("fadescroll");
WhatAnimation("move-left");
WhatAnimation("move-right");

$(window).scroll(function() {
    WhatAnimation("fadescroll");
    WhatAnimation("move-left");
    WhatAnimation("move-right");
});

function WhatAnimation(name) {
    $("." + name).each(function() {
        switch (name) {
            case "fadescroll":
                AddClass(this, "fade");
                break;
            case "move-left":
                AddClass(this, "left");
                break;
                case "move-right":
                AddClass(this, "right");
                break;
        }
    });
}

function AddClass(object, name) {
  if (IsVisible(object)) {
      $(object).addClass(name);
  } else {
      $(object).removeClass(name);
  }
}

function IsVisible(object) {
  var viewport = $(window).scrollTop() + $(window).height();
  var rand = $(object).offset();
  rand.bottom = rand.top + $(object).outerHeight();
  return !(
      viewport < rand.top + 200 || $(window).scrollTop() > rand.bottom - 200
  );
}

// Fade in effect

$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $("section.contact-section")
  
  for (var i = 0; i < tags.length; i++) {
  var tag = tags[i]
  
  if ($(tag).position().top < pageBottom) {
  $(tag).addClass("visible")
  } else {
    $(tag).removeClass("visible")
  }
  }
  })


/* Countdown timer */


  // Set the date we're counting down to
  var countDownDate = new Date("Nov 16, 2019 22:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the elements
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  
    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown-heading").innerHTML = "Let's go!";
    }
  }, 1000);


// Read more one

document.querySelector(".read-more-btn").onclick = function() {myFunctionOne()};

function myFunctionOne() {
  document.querySelector(".more").style.display = "block";
  document.querySelector(".read-more-btn").style.display = "none";
}


// Header nav hover effect

$('.circle-1').hover(function() {
    $('.nav-link-1').fadeTo(1,1);
},function() {
    $('.nav-link-1').fadeTo(1,0);
});

$('.circle-2').hover(function() {
    $('.nav-link-2').fadeTo(1,1);
},function() {
    $('.nav-link-2').fadeTo(1,0);
});

$('.circle-3').hover(function() {
    $('.nav-link-3').fadeTo(1,1);
},function() {
    $('.nav-link-3').fadeTo(1,0);
});

$('.circle-4').hover(function() {
    $('.nav-link-4').fadeTo(1,1);
},function() {
    $('.nav-link-4').fadeTo(1,0);
});

$('.circle-5').hover(function() {
    $('.nav-link-5').fadeTo(1,1);
},function() {
    $('.nav-link-5').fadeTo(1,0);
});



// Hamburger menu

let burger = document.getElementById('burger'),
   nav    = document.getElementById('main-nav'),
   navLink = document.querySelector('.main-nav-link-1'),
   navLinkTwo = document.querySelector('.main-nav-link-2'),
   navLinkThree = document.querySelector('.main-nav-link-3'),
   navLinkFour = document.querySelector('.main-nav-link-4'),
   navLinkFive = document.querySelector('.main-nav-link-5'),
	 slowmo = document.getElementById('slowmo');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

navLink.addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

navLinkTwo.addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

navLinkThree.addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

navLinkFour.addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

navLinkFive.addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

slowmo.addEventListener('click', function(e){
	this.classList.toggle('is-slowmo');
});

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
	slowmo.dispatchEvent(clickEvent);
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
		
		setTimeout(function(){
			slowmo.dispatchEvent(clickEvent);
		}, 3500);
	}, 5500);
}); 





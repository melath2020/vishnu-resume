var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) {
      delta /= 2;
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  
  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  

  
  };
  


  // tabs
  function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(cityName).style.display = "block";  
  }


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar-header").style.top = "0";
  } else {
    document.getElementById("navbar-header").style.top = "-150px";
  }
}



  // mobile nav

  var menu= document.querySelector('#nav-btn')
var menuwrapper=document.querySelector('.mobile-nav-wrapper')
var close= document.querySelector('#close-btn')

menu.addEventListener('click',function(e){
    menuwrapper.style.display='block';
    close.style.display='block';
    menu.style.display='none'
})

close.addEventListener('click',function(e){
    menuwrapper.style.display='none';
    close.style.display='none';
    menu.style.display='block'
})


var menu= document.querySelector('#nav-btns')
var menuwrapper=document.querySelector('.mobile-nav-wrapper')
var close= document.querySelector('#close-btns')

menu.addEventListener('click',function(e){
    menuwrapper.style.display='block';
    close.style.display='block';
    menu.style.display='none'
})

close.addEventListener('click',function(e){
    menuwrapper.style.display='none';
    close.style.display='none';
    menu.style.display='block'
})

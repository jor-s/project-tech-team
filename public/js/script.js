$(function() {
  $(".toggle").on("click", function() {
      if ($(".item").hasClass("active")) {
          $(".item").removeClass("active");
          $(this).find("a").html("<i class='fas fa-bars'></i>");
      } else {
          $(".item").addClass("active");
          $(this).find("a").html("<i class='fas fa-times'></i>");
      }
  });
});

var TxtType = function (el, toRotate, period) {
 this.toRotate = toRotate;
 this.el = el;
 this.loopNum = 0;
 this.period = parseInt(period, 10) || 2000;
 this.txt = '';
 this.tick();
 this.isDeleting = false;
};

TxtType.prototype.tick = function () {
 var i = this.loopNum % this.toRotate.length;
 var fullTxt = this.toRotate[i];

 if (this.isDeleting) {
     this.txt = fullTxt.substring(0, this.txt.length - 1);
 } else {
     this.txt = fullTxt.substring(0, this.txt.length + 1);
 }

 this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

 var that = this;
 var delta = 200 - Math.random() * 100;

 if (this.isDeleting) {
     delta /= 2;
 }

 if (!this.isDeleting && this.txt === fullTxt) {
     delta = this.period;
     this.isDeleting = true;
 } else if (this.isDeleting && this.txt === '') {
     this.isDeleting = false;
     this.loopNum++;
     delta = 500;
 }

 setTimeout(function () {
     that.tick();
 }, delta);
};

window.onload = function () {
 var elements = document.getElementsByClassName('typewrite');
 for (var i = 0; i < elements.length; i++) {
     var toRotate = elements[i].getAttribute('data-type');
     var period = elements[i].getAttribute('data-period');
     if (toRotate) {
         new TxtType(elements[i], JSON.parse(toRotate), period);
     }
 }
 // INJECT CSS
 var css = document.createElement("style");
 css.type = "text/css";
 css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
 document.body.appendChild(css);
};

//navigation change color on scroll

$(function() {
 $(window).on("scroll", function() {
     if($(window).scrollTop() > 50) {
         $("nav").addClass("active");

         document.getElementById("logoHeader").src = "/public/img/logo_header2.png";
         document.getElementsByTagName("nav")[0].style.borderBottom = "solid 1px #d7d7d7";
         document.getElementsByClassName('checkbtn')[0].style.color = '#000';

     } else {
         //remove the background property so it comes transparent again (defined in your css)
        $("nav").removeClass("active");
        document.getElementById("logoHeader").src = "/public/img/logo_header.png";
        document.getElementsByTagName("nav")[0].style.borderBottom = "none";
        document.getElementsByClassName('checkbtn')[0].style.color = '#fff';

     }
 });
});

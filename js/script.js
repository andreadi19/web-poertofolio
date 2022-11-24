// navbar hidding


var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
	var currentScrollPos = window.pageYOffset;

	if(prevScrollpos > currentScrollPos){
		document.getElementById("navbar").style.top = "0";
	}else if(currentScrollPos === 0){
		document.getElementById("navbar").style.top = "0px";
	}else{
		document.getElementById("navbar").style.top = "-100px";
	}
	prevScrollpos = currentScrollPos;
}

// menu toggle
var menuToggle = document.querySelector('.menu-toggle input');

var nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
	nav.classList.toggle('slide')

});


// akhir navbar
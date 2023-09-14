// ********* Pre-loader ***********
var load = document.getElementById("Preloader");

function preload() {
	load.style.display = "none";
}

// ******* Animated Text Javascript ***********

const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};

const texts = [
    "A Student",
	"A Graphic Designer",
	"A Web Developer",
    "A Frelancer",
];

const morphTime = 1;
const cooldownTime = 1;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}

function setMorph(fraction) {
	
	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 80)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 80)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;
	
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";
	
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

function animate() {
	requestAnimationFrame(animate);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;
	
	cooldown -= dt;
	
	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		
		doMorph();
	} else {
		doCooldown();
	}
}

animate();

// ****************** About contents *********************

var contentlinks = document.getElementsByClassName("content_link");
var contentdatas = document.getElementsByClassName("content_data");

function opencontent(contentname){
	for(contentlink of contentlinks){
		contentlink.classList.remove("active_link");
	}
	for(contentdata of contentdatas){
		contentdata.classList.remove("active_data");
	}
	event.currentTarget.classList.add("active_link");
	document.getElementById(contentname).classList.add("active_data");
}


// ***************** Contact Message Form *******************

const scriptURL = 'https://script.google.com/macros/s/AKfycbyx-REvXykFJGG5Sfa44GQHrP14Yl_SrENBaAL5rtgKx4MwO0ZtWyCwfO6to0g6cevw/exec'
const form = document.forms['submit-to-google-sheet']
const Msg = document.getElementById("message-success")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
		Msg.innerHTML = "Message sent Successfully."
		setTimeout(function(){
			Msg.innerHTML = ""
		},5000)
		form.reset()
	})
    .catch(error => console.error('Error!', error.message))
})

// ******************* Side menu ***************

var Burger = document.getElementById("sidemenu");

function openmenu(){
	Burger.style.right = "0";
}
function closemenu(){
	Burger.style.right = "-200px";
}

// *************** Service Dialogue box *********************

var Open_service_1 = document.getElementById("Service_Dialogue_Box");

function Service_1_open() {
	Open_service_1.style.display = "block"
}
function Service_1_close() {
	Open_service_1.style.display = "none"
}

// ************** Fadeout body ****************

$(document).ready(function(){
	$("body").load(function(preload){
	  $("body").fadeIn();
	});
});

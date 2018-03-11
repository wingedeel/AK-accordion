
// Create custom 'in' and 'out' animations
CustomEase.create("customIn", "M0,0 C0,0 0.136,0.462 0.172,0.902 0.182,0.99 0.234,1.048 0.312,1.044 0.363,1.041 0.394,0.978 0.468,0.978 0.524,0.978 0.58,1.01 0.638,1.012 0.726,1.012 0.766,1 0.904,1 0.964,1 1,1 1,1");
CustomEase.create("customOut", "M0,0 C0.344,-0.06 0.544,0.091 0.686,0.198 0.888,0.35 0.99,0.638 1,1");

// Get refs to elements
var btnMin = document.querySelector('#btn-min');
var btnMax = document.querySelector('#btn-max');

var logo_01 = document.querySelector('#logo-01');
var logo_02 = document.querySelector('#logo-02');
var logo_03 = document.querySelector('#logo-03');
var logo_04 = document.querySelector('#logo-04');
var logo_05 = document.querySelector('#logo-05');
var logo_06 = document.querySelector('#logo-06');
var logo_07 = document.querySelector('#logo-07');
var logo_08 = document.querySelector('#logo-08');
var logo_09 = document.querySelector('#logo-09');

var logo_container = document.querySelector('#logo-container');

var logos = [
    logo_01, logo_02, logo_03,
    logo_04, logo_05, logo_06,
    logo_07, logo_08, logo_09
];


btnMin.addEventListener('click', function() {
    minimise();
});

btnMax.addEventListener('click', function() {
    maximise();
});


var tl = new TimelineMax({
        paused: true
}); 

// tl.from(collapsible_element, .5, { className: "+=heightZero" }, 'open');
// tl.staggerFrom(logos, .5, {autoAlpha: 0, ease: Power2.easeIn}, .025);
tl.staggerTo(logos, 0.5, {autoAlpha:0, ease:Back.easeIn}, 0.1);
tl.to(logo_container, 0.4, {height:0, ease:Back.easeIn})


function minimise(){
    console.log('min');
    // TweenMax.staggerTo(logos, 0.5, {autoAlpha:0, ease:Back.easeIn}, 0.1);
    // TweenLite.to(logo_container, 0.2, {height:0})
    tl.play();
}

// Reposition the remaining elements
function maximise(){
     console.log('max');
     tl.reverse();
}



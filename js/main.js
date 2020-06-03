/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particlesjs-config2.json', function() {
  console.log('callback - particles.js config loaded');
});

$('.nav-link').on('click' , function(e){
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active');
   
})
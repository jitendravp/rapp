jQuery.mobile.orientationChangeEnabled = false;

$(window).bind("resize", function(){
    var orientation = window.orientation;
    var new_orientation = (orientation) ? 0 : 180 + orientation;
    $('body').css({
        "-webkit-transform": "rotate(" + new_orientation + "deg)"
    });
});

/*function contentHeight() {
  var screen = $.mobile.getScreenHeight(),
	  header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight() - 1 : $(".ui-header").outerHeight(),
	  footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight(),
	  contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height(),
	  content = screen - header - footer - contentCurrent;
  $(".ui-content").height(content);
}
$(document).on("pagecontainertransition", contentHeight);
$(window).on("throttledresize orientationchange", contentHeight);*/


var screen = $.mobile.getScreenHeight();
var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight() - 1 : $(".ui-header").outerHeight();
var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight();
var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();
var content = screen - header - footer - contentCurrent;
$(".ui-content").height(content);


	

var player = null;
	function tdPlayerApiReady(){
		console.log( 'TdPlayerApi is ready' );
		var tdPlayerConfig = { coreModules:[{ id: 'MediaPlayer', playerId: 'starfm_jplayer_1' }] };
		player = new TdPlayerApi(tdPlayerConfig);
		player.loadModules();
		player.addEventListener( 'stream-start', onStreamStarted );
		player.addEventListener( 'stream-stop', onStreamStopped );
		//player.play( {station:'STAR_FM'} );
}
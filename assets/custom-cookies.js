(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){e(require("jquery"))}else{e(jQuery)}})(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function r(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function s(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{e=decodeURIComponent(e.replace(t," "));return u.json?JSON.parse(e):e}catch(n){}}function o(t,n){var r=u.raw?t:s(t);return e.isFunction(n)?n(r):r}var t=/\+/g;var u=e.cookie=function(t,s,a){if(s!==undefined&&!e.isFunction(s)){a=e.extend({},u.defaults,a);if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setTime(+l+f*864e5)}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=t?undefined:{};var h=document.cookie?document.cookie.split("; "):[];for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");var m=r(v.shift());var g=v.join("=");if(t&&t===m){c=o(g,s);break}if(!t&&(g=o(g))!==undefined){c[m]=g}}return c};u.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)===undefined){return false}e.cookie(t,"",e.extend({},n,{expires:-1}));return!e.cookie(t)}})

$( document ).ready(function() {
  function popupClose() {
    $('#sidebar_popup').removeClass('active');
    $('body').removeClass('scroll_off');
  }
  function popupOpen() {
    $('#sidebar_popup').addClass('active'); 
    $('body').addClass('scroll_off');
  }
  setTimeout(function(){
     popupOpen();
  }, 13000);
  
  $('.popup__close,.sidebar_overlay').click(function(){
    popupClose();
  });
  
  $('.popup__close,.sidebar_overlay').click(function(e){ 
    $.cookie('popup_cookie', 'yes', { path: '/', expires: 1 });
  });
  
  var $_popup_cookie = $.cookie('popup_cookie');
    if ($.cookie('popup_cookie') == 'yes') {
      popupClose();
      setTimeout(function(){
           popupClose();
      }, 13000);
      setTimeout(function(){
           popupClose();
      }, 15000);
    }
}); 
//document.getElementById('exit').onclick = function () {close()};
var z = {
  getParam: function () {
    if (location.href.indexOf('?') != -1) {
      return location.href.substr(location.href.indexOf('?') + 1, location.href.length).split('&');
    }}
};

if (z.getParam() != undefined) {
  if (z.getParam().includes('debug')) {
    document.querySelector('body').append(document.createElement('script'));
    document.querySelector('body').querySelectorAll('script')[document.querySelector('body').querySelectorAll('script').length - 1].src = 'script/debug.js';
  };
  if (z.getParam().includes('useFont')) {
    
  };
};

// some function on this script now lony work with jQuery
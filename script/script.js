//document.getElementById('exit').onclick = function () {close()};

function getparam() {
  if (location.href.indexOf('?') != -1) {
    return location.href.substr(location.href.indexOf('?') + 1, location.href.length).split('&');
  };
};

if (getparam() != undefined) {
  if (getparam().includes('debug')) {
    document.querySelector('body').append(document.createElement('script'));
    document.querySelector('body').querySelectorAll('script')[document.querySelector('body').querySelectorAll('script').length - 1].src = 'script/debug.js';
  };
};
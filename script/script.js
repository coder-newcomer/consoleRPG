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
  if (getparam().includes('useFont')) {
    
  };
};

function sendmsg(text, withicon) {
  var msg = document.getElementById('msg');
  msg.prepend(document.createElement('span'));
  var span = msg.querySelectorAll('span')[0];
  span.className = 'send';
  var icon = '<span class="send icon">  </span>   ';
  if (withicon) {icon = icon.replaceAll('  ','->');};
  span.innerHTML = icon + text;;
};

function getmsg(text, withicon) {
  var msg = document.getElementById('msg');
  msg.prepend(document.createElement('span'));
  var span = msg.querySelectorAll('span')[0];
  span.className = 'get';
  var icon = '<span class="get icon">  </span>   ';
  if (withicon) {icon = icon.replaceAll('  ','<-');};
  span.innerHTML = icon + text;;
};
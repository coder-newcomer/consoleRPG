var time = 0;
var now = Date().split(' ');
var year = Date().split(' ')[3];
var month = Date().split(' ')[1];
var day = [Date().split(' ')[0],Date().split(' ')[2]];
var time = Date().split(' ')[4];

function paramhandler() {
  var parameter = location.href.toLowerCase().substr(location.href.indexOf('?') + 1,location.href.length).split('&');
  //console.log(parameter);
  if (parameter.includes('nom2')) {
    document.getElementById('m2-style').remove();
    document.getElementById('m2-script').remove();
    console.log('Material 2 disabled on this page');
  };
  if (parameter.includes('nobs')) {
    document.getElementById('bs-style').remove();
    document.getElementById('bs-script').remove();
    console.log('Bootstrap disabled on this page');
  };
    if (parameter.includes('nolive')) {
    document.getElementById('live-script').remove();
    console.log('Live.js disabled on this page');
  };
};

function attentionwin7() {
  var win7 = 'Dear user\nThis page are using emoji as icon instead of an image. Since Windows 7 doesn\'t officially support emoji, so you may have a bad experience about it.\n\nWe also currently try to fix this issue by adding feature to use an image icon for Windows 7 user instead of emoji for better experience.\n\nSo for ya, stay tuned and we will present it for ya :)';
  if (navigator.userAgent.includes('Windows NT 6.1')) {alert(win7);alert('We\'re detected from your browser that you\'re using Windows 7, if you\'re really not using Windows 7, ignore this.')}
};

timer = setInterval(function () {
  now = Date().split(' ');
  year = Date().split(' ')[3];
  month = Date().split(' ')[1];
  day = [Date().split(' ')[0],Date().split(' ')[2]];
  time = Date().split(' ')[4];
  document.getElementById('subtitle').innerText = Date();
  showTime();//hearthbeat();
}, 500);

function showTime() {
  //document.getElementById('subtitle').innerText
};

function doConsoleCleaner() {
  interval = 60000;
  consolecleaner = setInterval(function () {
    console.clear();
    console.info('This function will clearing the console log immediately after ' + interval + 'ms');
  },interval);
}; if (document.location.protocol != "file:") {doConsoleCleaner();}

function titlegenerator() {
  const metadata = document.getElementById('metadata')
  var title = metadata.getAttribute('title') + ' v' + metadata.getAttribute('version') + ' ' + metadata.getAttribute('channel') + ' - ' + metadata.getAttribute('description');
  metadata.getAttribute('title')
  document.querySelector('head').prepend(document.createElement('title'));
  document.querySelector('head').querySelector('title').innerText = title;
}

attentionwin7();setTimeout(paramhandler, 750);
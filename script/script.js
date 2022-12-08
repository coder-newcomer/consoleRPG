var time = 0;
var now = Date().split(' ');
var year = Date().split(' ')[3];
var month = Date().split(' ')[1];
var day = [Date().split(' ')[0],Date().split(' ')[2]]
var time = Date().split(' ')[4];

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
}

if (document.location.protocol != "file:") {doConsoleCleaner();}
attentionwin7();
//console.log('Loaded!');
//document.getElementById('exit').onclick = function () {close()};

function sendmsg(text) {
  var pre = document.querySelector('pre');
  pre.prepend(document.createElement('span'));
  pre.querySelector('span').innerText = text;
  setTimeout(function () {
    pre.querySelector('span').style.transform = 'none';
    pre.querySelector('span').style.background = 'rgb(255 255 255 / 25%)';
  },1);
};

function getmsg(text) {
  var pre = document.querySelector('pre');
  pre.prepend(document.createElement('span'));
  pre.querySelector('span').innerText = text;
  setTimeout(function () {
    pre.querySelector('span').style.transform = 'none';
  },1);
};
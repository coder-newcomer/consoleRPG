var z = {
  getParam: function () {
    if (location.href.indexOf('?') != -1) {
      return location.href.substr(location.href.indexOf('?') + 1, location.href.length).split('&');
    }},
  msg: function (type, text, icon) {
    //console.log(type);
    //console.log(icon);
    //console.log(text);
    var typer = ['send','get','info','warn','error'];
    if (!typer.includes(type)) {
      return console.error('Unexpected type value "' + type +'"' + ': The only accepted value is [' + typer.join(', ') + ']');
    };
    var msgview = '<div class="line"><span class="msg-icon %type">%icon</span><span class="msg-text %type">%text</span></div>';
    msgview = msgview.replaceAll('%type', type)
    msgview = msgview.replaceAll('%text', text)
    if (icon) {
      switch (type) {
        case 'send':
          msgview = msgview.replaceAll('%icon', '->');
          break;
        case 'get':
          msgview = msgview.replaceAll('%icon', '<-');
          break;
        case 'info':
          msgview = msgview.replaceAll('%icon', 'ℹ️');
          break;
        case 'warn':
          msgview = msgview.replaceAll('%icon', '⚠');
          break;
        case 'error':
          msgview = msgview.replaceAll('%icon', '🛑');
          break;
      };
    } else {
      msgview = msgview.replaceAll('%icon', '  ')
    };
    $('#msg').append(msgview);
  },
  msgplain: function (text) {
    var msgview = '<span>%text</span>';
    $('#msg').append(msgview.replaceAll('%text', text));
  }
};

if (z.getParam() != undefined) {
  if (z.getParam().includes('debug')) {
    document.querySelector('body').append(document.createElement('script'));
    document.querySelector('body').querySelectorAll('script')[document.querySelector('body').querySelectorAll('script').length - 1].src = 'script/debug.js';
  };
  if (z.getParam().includes('useFont')) {
    
  };
};

// some function on this script now only work with jQuery
document.getElementById('x-main').onclick = function () {close()};
$('.x-btn').attr('title', 'Close');
$('.msg-icon.info').attr('title', "Info message");
$('.msg-icon.warn').attr('title', "Warning message");
$('.msg-icon.error').attr('title', "Error message");

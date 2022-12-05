var font = ['consola.ttf','ProductSans-Regular.ttf','tahoma.ttf','trebuc.ttf']
var head = document.querySelector('head');
var body = document.querySelector('body');

function registerfont(pathfontfolder, type, preload) {
  console.log('pathfontfolder: ' + pathfontfolder);
  console.log('type: ' + type);
  console.log('preload: ' + preload);

  if (pathfontfolder.endsWith('/')) {
    pathfontfolder = pathfontfolder.substr(0,pathfontfolder.length - 1);
  };

  if (preload) {
    var selector = 0;
    while (selector < font.length) {
      head.prepend(document.createElement('link'));
      head.querySelector('link').rel = "preload";
      head.querySelector('link').href = pathfontfolder + '/' + font[selector];
      selector += 1;
    };
  };

  switch (type) {
    case 'style':
      var style = "@font-face {font-family: Trebuchet MS;src: url('<path1>');}\n@font-face {font-family: Tahoma;src: url('<path2>');}\n@font-face {font-family: Consolas;src: url('<path3>');}\n@font-face {font-family: Product Sans;src: url('<path4>');}";
      style = style.replace('<path1>', pathfontfolder + '/' + font[0]);
      style = style.replace('<path2>', pathfontfolder + '/' + font[1]);
      style = style.replace('<path3>', pathfontfolder + '/' + font[2]);
      style = style.replace('<path4>', pathfontfolder + '/' + font[3]);

      body.prepend(document.createElement('style'));
      body.querySelector('style').innerHTML = style;
      break;
    case 'css':
      head.prepend(document.createElement('link'));
      head.querySelector('link').rel = "stylesheet";
      head.querySelector('link').href = pathfontfolder + '/' + 'fonts.css';
      break;
    default: throw new Error('Unknown "type" parameter (<error>)'.replace('<error>', type) + ', only accept "style" or "css"')
  };
};
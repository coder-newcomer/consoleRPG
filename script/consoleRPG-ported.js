var currentlang = navigator.language;
var game = {
  xml: '<test>yes</test>', // XML testing, alternative translation for JSON if possible
  lang: { // lang is all about language, all feature related must be placed here
    parse: (stringid, langid) => { // language parse function for multi-language support
      var lang = JSON.stringify(stringid).replaceAll('{"', '').replaceAll('"}', '').replaceAll('","', '":"').split('":"');
      // Error handler
      var err = 'The specified stringid object doesn\'t have a valid translation on it\'s own constructor following the specified langid value. Make sure you specify the right langid value or the specified stringid doesn\'t have the right translation that match with the specified langid value.';
      var condition = [!JSON.stringify(stringid).includes('"langid":'.replaceAll('langid', langid)), lang.indexOf(langid) < 0]; // Two types of error condition checking [0,1]
      if (typeof stringid != 'object') { throw new ReferenceError(`Specified stringid must be an valid language object! ${stringid} is\'nt an object!`); } // Specified stringid must be an object
      else if (!JSON.stringify(stringid).includes('"en":')) { throw new TypeError('Specified stringid is invalid language object!'); } // Validate the stringid object constructor if they have at least one default translation langid (Default = en)
      else if (langid.length > 2 || typeof langid != 'string') { throw new TypeError('Unknown specified langid value!'); } // Currently the valid langid value is 2 digit string following in the format defined in RFC 5646: Tags for Identifying Languages (also known as BCP 47)
      else if (condition[1]) { console.error(`Uncaught Error: ${err}`); console.warn('Warning: Fallback translation will be used!'); langid = 'en'; } // This error handler is unexpected sometimes, use try catch i think
      else { return lang[lang.indexOf(langid) + 1]; }
    }
  },
  profile: { // profile manager
    currentuser: () => localStorage.currentuser,
    register: (username, password, nickname) => {
      // Setting JSON template as savegame
      var json = { "user": { "name": "", "password": "" } };
      if (nickname == undefined) { nickname = ''; };
      if (password == undefined) { password = ''; };
      json.user.name = nickname;
      json.user.password = password;
      // Checking if userlist (user) on localStorage is exist, otherwise create new one with empty value to prevent error
      if (localStorage.user == null) { localStorage.user = ''; };
      // Adding user value as list (using Array)
      var ussr = localStorage.user.split(',');
      ussr.push(username);
      localStorage.user = ussr;
      // Store value as stringified Array
      if (localStorage.user.indexOf(',') == 0) { localStorage.user = localStorage.user.replace(',', ''); };
      // Store user data (savegame) as stringified JSON
      localStorage.setItem(`user: ${username}`, JSON.stringify(json));
      // Return status when success
      if (localStorage.getItem(`user: ${username}`) == JSON.stringify(json)) {
        console.log(game.lang.parse(game.lang.profile.registered, currentlang));
      } else { console.warn(game.else); };
    },
    verify: (username, password) => { // This function used to verify username with password and returned boolean, used almost
      // Check specified username existence, otherwise go ahead
      if (localStorage.getItem(`user: ${username}`) == null) { return console.error(game.lang.parse(game.lang.profile.usernotexist, currentlang)); };
      // Getting value and start verifying
      var json = JSON.parse(localStorage.getItem(`user: ${username}`));
      if (password == undefined) { password = ''; }; // Need to add exception when username has no password
      return password == json.user.password;
    },
    login: (username, password) => {
      if (game.profile.verify(username, password)) {
        localStorage.currentuser = username;
        if (localStorage.currentuser == username) {
          console.log(game.lang.parse(game.lang.profile.loginsuccess, currentlang));
        } else { console.warn(game.else); };
      } else { console.error(game.lang.parse(game.lang.profile.userpwincorrect, currentlang)); };
    },
    logout: () => {
      localStorage.currentuser = '';
      if (localStorage.currentuser == '') {
        console.log(game.lang.parse(game.lang.profile.logoutsuccess, currentlang));
      } else { console.warn(game.else); }
    },
    clear: () => {
      if (confirm(game.lang.parse(game.lang.profile.clearmsg, currentlang))) {
        if (localStorage.user == undefined) { throw new Error('No registered user exist, it\'s clean now!') };
        var index = localStorage.user.split(',');
        for (var indexer = 0; indexer < index.length; indexer++) {
          localStorage.removeItem(`user: ${index[indexer]}`);
        };
        localStorage.removeItem('user');
        localStorage.removeItem('currentuser');
      };
      if (localStorage.user == undefined && localStorage.currentuser == undefined) {
        console.log(game.lang.parse(game.lang.profile.clearsuccess, currentlang));
        return location.reload();
      } else { console.warn(game.else); };
    },
    delete: () => {
      if (confirm(game.lang.parse(game.lang.profile.deletemsg, currentlang))) {
        localStorage.user = localStorage.user.replace(currentuser, '').replaceAll(',,', ',');
        localStorage.removeItem(`user: ${currentuser}`);
        var check = localStorage.getItem(`user: ${currentuser}`) == null;
        localStorage.currentuser = '';
        if (check && localStorage.currentuser == '') {
          return console.log(game.lang.parse(game.lang.profile.deletesuccess, currentlang));
          return location.reload();
        } else { console.warn(game.else); };
      };
    },
    export: () => experimental(),
    import: (urlORjson) => experimental(),
    reset: () => experimental()
  }
};

function experimental() { return console.log(game.lang.parse(game.lang.example.experimental, currentlang)) };
//console.log(null);
var currentlang = navigator.language; // For now language is managed by browser ui, but next will use an option to choose
var game = {
  xml: '<test>yes</test>', // XML testing, alternative translation for JSON if possible
  lang: {
    example: {
      "stringname": {
        "langid": "translate",
        "langid2": "translate"
      },
      test: {
        "en": "The quick brown fox, jumps over the lazy dog. Select the answer: [a, b, c, d]",
        "id": "Seekor rubah coklat yang cepat, melompat diatas anjing yang malas. Pilih jawaban: [a, b, c, d]",
        "un": "Hey, you! this is: whatever." // Undefined language, just for testing
      }
    },
    parse: function (stringid, langid) { // language parse function for multi-language support
      var err = 'The specified stringid object doesn\'t have a valid translation on it\'s own constructor following the specified langid value. Make sure you specify the right langid value or the specified stringid doesn\'t have the right translation that match with the specified langid value.';
      var lang = JSON.stringify(stringid).replaceAll('{"','').replaceAll('"}', '').replaceAll('","', '":"').split('":"');
      // Error handler
      if (typeof stringid != 'object') {throw new TypeError('Specified stringid must be an valid language object! "%error" is\'nt an object!'.replaceAll('%error', stringid));} // Specified stringid must be an object
      else if (!JSON.stringify(stringid).includes('"en":')) {throw new TypeError('Specified stringid is invalid language object!')} // Validate the stringid object constructor if they have at least one default translation langid (en = English)
      else if (langid.length > 2 || typeof langid != 'string') {throw new TypeError('Unknown specified langid value!');} // Currently the valid langid value is 2 digit string following in the format defined in RFC 5646: Tags for Identifying Languages (also known as BCP 47)
      else if (!JSON.stringify(stringid).includes('"langid":'.replaceAll('langid', langid))) {throw new Error(err);} // This error handler is unexpected sometimes, use try catch i think
      else {return lang[lang.indexOf(langid) + 1];}
    },
    // Translation goes here
    // Currently supported language: [en = english, id = Indonesia]
    "registered": {
      "en": "Registered",
      "id": "Terdaftar"
    },
    "wrong1": {
      "en": "Something wrong!",
      "id": "Ada sesuatu yang salah!"
    }
  },
  profile: {
    register: function(username, password, nickname) {
      // Setting JSON template as savegame
      var json = { "user": {"name": "","password": ""} };
      json.user.name = nickname;
      json.user.password = password;
      // Checking if userlist (user) on localStorage is exist, otherwise create new one with empty value to prevent error
      if (localStorage.user == null) {localStorage.user = '';};
      // Adding user value as list (using Array)
      var ussr = localStorage.user.split(',');
      ussr.push(username); 
      localStorage.user = ussr;
      // Store value as stringified Array
      if (localStorage.user.indexOf(',') == 0) {localStorage.user = localStorage.user.replace(',', '');};
      // Store user data (savegame) as stringified JSON
      localStorage.setItem('user: ' + username, JSON.stringify(json));
      // Return status when success
      if (localStorage.getItem('user: ' + username) == JSON.stringify(json)) {
        console.log(game.lang.registered.en); // <-- fix from this point 
      } else {console.warn('Something wrong!')};
    },
    login: function (username, password) {
      // check specified username existence, otherwise go ahead
      if (localStorage.getItem('user: ' + username) == null) {return console.error('Username not available!');};
      // Getting value and start verifying
      var json = JSON.parse(localStorage.getItem('user: ' + username));
      if (password == null) {return console.error('Input password!')}; // Need to add exception when username has no password
      if (password == json.user.password) {
        localStorage.currentuser = username;
        if (localStorage.currentuser == username) {
          console.log ('Login success');
        } else {console.warn('Something wrong!');};
      } else {console.error('Username or password is incorrect')};
    },
    logout: function () {
      localStorage.setItem('currentuser', '')
      if (localStorage.getItem('currentuser') == '') {
        console.log('Logout success');
      } else {console.warn('Something wrong!');}
    },
    clear: function () {
      var msg = 'You are attempted to delete all user profile, you will be logout and your profile will be also deleted too. Are you sure?';
      if (confirm(msg) == true) {}
    },
    delete: function (username, password) {return experimental();},
    export: function () {return experimental();},
    import: function (username, password, urlORjson) {return experimental();},
    reset: function () {return experimental();}
  }
};

function experimental() {return console.log('Comming soon!')};
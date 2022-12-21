var game = {
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
        console.log('Registered');
      } else {console.warn('Something wrong!')};
    },
    login: function (username, password) {
      // check inputed username existence, otherwise go ahead
      if (localStorage.getItem('user: ' + username) == null) {return console.error('Username not available!');};
      // Getting value and start verifying
      var json = JSON.parse(localStorage.getItem('user: ' + username));
      if (password == null) {return console.error('Input password!')};
      if (password == json.user.password) {
        localStorage.setItem('currentuser', username);
        if (localStorage.getItem('currentuser') == username) {
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
    clear: function (username, password) {
      if (username == null && password == null) {
        var msg = 'You are attempted to delete all user profile, you will be logout and your profile will be also deleted too. Are you sure?';
        if (confirm(msg) == true) {
          //localStorage.removeItem()
        };
      };
    },
    delete: function (username, password) {return experimental();},
    export: function (username, password) {return experimental();},
    import: function (username, password) {return experimental();},
    reset: function (username, password) {return experimental();}
  }
};

function experimental() {return console.log('Coming soon!')};
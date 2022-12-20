var game = {
  profile: {
    register: function(username, password, nickname) {
      var json = {
  "user": {
    "name": "admin",
    "password": "admin",
    "level": "99",
    "xp": "9999999",
    "money": "9999999"
  }
};
      json.user.name = nickname;
      json.user.password = password;
      if (localStorage.getItem('user') == null) {localStorage.setItem('user', '');};
      var ussr = localStorage.getItem('user').split(',');
      ussr.push(username);
      localStorage.setItem('user', ussr);
      if (localStorage.getItem('user').indexOf(',') == 0) {localStorage.setItem('user', localStorage.getItem('user').replace(',', ''));};
      localStorage.setItem('user: ' + username, JSON.stringify(json));
      console.log('Registered');
    },
    login: function (username, password) {
      if (localStorage.getItem('user: ' + username) == null) {return console.error('Username not available!');};
      var json = JSON.parse(localStorage.getItem('user: ' + username));
      if (password == null) {return console.error('Input password!')};
      if (password == json.user.password) {
        localStorage.setItem('currentuser', username);
        if (localStorage.getItem('currentuser') == username) {
          console.log ('Login success');
        } else {console.warn('Something wrong!');};
      };
    },
    logout: function () {
      localStorage.setItem('currentuser', '')
      if (localStorage.getItem('currentuser') == '') {
        console.log('Logout success');
      } else {console.warn('Something wrong!');}
    },
    reset: function (username, password) {
      if (username == null && password == null) {
        var msg = 'You are attempted to delete all user profile, you will be logout and your profile will be also deleted too. Are you sure?';
        if (confirm(msg) == true) {
          //localStorage.removeItem()
        };
      };
    }
  }
};
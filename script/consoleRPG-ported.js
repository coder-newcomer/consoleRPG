var game = {
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
    if (localStorage.getItem('user') == null) {localStorage.setItem('user','');};
    var ussr = localStorage.getItem('user').split(',');
    localStorage.setItem('user', ussr);
    localStorage.setItem('user: ' + username, JSON.stringify(json));
  },
  login: function (username, password) {
    if (localStorage.getItem(username) == null) {return console.error('Username not available!');};
    var json = JSON.parse(localStorage.getItem('user: ' + username));
    if (password == null) {return console.error('Input password!')};
    if (password == json.user.password) {
      localStorage.setItem('currentuser', username);
      console.log ('Login success');
    };
  }
};
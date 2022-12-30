game.lang.example = { // Example usage of Translation | Do not edit!
  "stringname": {
    "langid": "translate",
    "langid2": "translate"
  },
  test: {
    "en": "The quick brown fox, jumps over the lazy dog. Select the answer: [a, b, c, d]",
    "id": "Seekor rubah coklat yang cepat, melompat diatas anjing yang malas. Pilih jawaban: [a, b, c, d]",
    "un": "Hey, you! this is: whatever." // Undefined language, just for testing
  },
  "experimental": {
    "en": "Coming soon!",
    "id": "Segera!"
  }
};
game.lang.profile = {
  // Translation goes here
  // Currently supported language: [en = English, id = Indonesia]
  "registered": {
    "en": "Registered!",
    "id": "Terdaftar!"
  },
  "wrong1": {
    "en": "Something wrong!",
    "id": "Ada sesuatu yang salah!"
  },
  "userexist": {
    "en": "Username already exist!",
    "id": "Username sudah ada!"
  },
  "usernotexist": {
    "en": "Username isn't exist!",
    "id": "Username tidak ada!"
  },
  "userpwincorrect": {
    "en": "Username or password is incorrect!",
    "id": "Username atau password salah!"
  },
  "loginsuccess": {
    "en": "Log in success!",
    "id": "Berhasil masuk!"
  },
  "logoutsuccess": {
    "en": "Log out success!",
    "id": "Berhasil keluar!"
  },
  "clearsuccess": {
    "en": "All profile and user data have been deleted successfully. You have been logout too and your user data have gone. Reload in a second!",
    "id": "Seluruh data dan profil pengguna telah berhasil dihapus. Data Anda juga telah dihapus dan Anda telah keluar. Memuat ulang dalam hitungan detik!"
  },
  "deletesuccess": {
    "en": "Your profile have been deleted. Log out in a second!",
    "id": "Profil Anda telah dihapus. Keluar dalam hitungan detik!"
  },
  "clearmsg": {
    "en": `You are attempted to delete all user profile, you will be logout and your profile "${game.profile.currentuser}" will be deleted too. Are you sure?`
  },
  "deletemsg": {
    "en": `Are you sure want to delete your own profile "${game.profile.currentuser}"? This cannot be undone unless you have export it before!`
  }
};

game.else = game.lang.parse(game.lang.profile.wrong1, currentlang);
heartbeatLang = setInterval(() => {
  game.else = game.lang.parse(game.lang.profile.wrong1, currentlang);
}, 1000);
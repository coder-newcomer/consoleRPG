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
}
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
  "usernotexist": {
    "en": "Username isn't exist!",
    "id": "Username tidak ada!"
  },
  "userpwincorrect": {
    "en": "Username or password is incorrect!",
    "id": "Username atau password salah!"
  },
  "loginsuccess": {
    "en": "Login success!",
    "id": "Berhasil masuk!"
  },
  "logoutsuccess": {
    "en": "Logout success!",
    "id": "Berhasil keluar!"
  },
  "clearsuccess": {
    "en": "All profile and user data have been deleted successfully. You have been logout too and your user data have gone. Reload in 5 seconds!",
    "id": "Seluruh data dan profil pengguna telah berhasil dihapus. Data Anda juga telah dihapus dan Anda telah keluar. Memuat ulang dalam 5 detik!"
  }
};

game.else = game.lang.parse(game.lang.profile.wrong1, currentlang);
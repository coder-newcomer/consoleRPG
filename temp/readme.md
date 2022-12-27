# 🕒 Changelog
[TOC]
#### 2022-12-14
---
- Structure have been predefined, need some fix and clean it (i'm busy).
- Console window have been created successfully.
  - Function for send and get message have been created but need some fix for. more type of message and styler issue.

#### 2022-12-19
---
- Now using [jQuery](https://jquery.com/).
- Console window and the function have been created.
  - Currently supported message type: [send, get, info, warn, error] and plain in another function.
- Now developer decided to focusing on the main script of the game (consoleRPG.js) for future development and neglected the web gui for an unpredictable time.

#### 2022-12-20
---
- Basic Register, Login, and Logout method have been implemented, but still incomplete in some aspect, and maybe need to cleanup the code.

#### 2022-12-22
---
- Comment for simple explanation in some codeplace. Continuesly
- Added predefined support for multi-language (Currently supported: [id, en]).
  - Translation format and example have been created (see inside the code).
  - Language format parser function for future multi-language development support.
   - Including error handler (sometime work unexpectedly).
  - Coming soon feature!

#### 2022-12-23
---
- Some code cleanup.
- Comment *fix* if it's necessary.
- Language and Translation data splitted up from the main code file to it's own file (for better translation support).
  - The default stringid may change later.
- Fix the language format parser function error handler thrown types.
  - Some error handler may buggy and/or not working at all.
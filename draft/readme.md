# ❓ What is this?
If someone go somewhere and stop by here (it's you!), you may notice that this folder only have 2 file (draft.txt and this readme file). So what is this place for? If you asking me.

This is – as same as the folder name – is a draft *place* to devote all the thoughts and concepts from the developer (me) to later be applied to the game, nothing else but this.

If you want, you can take a look at the concept map and how the project will look like in the future. It might look messy.

# 📋 TODO & TOFIX
- [ ] Find alternative font that have **Commercial Use** license rights
- [ ] Find alternative logo of 4 leaf clover
- [ ] Add animation support for the gui
- [ ] Finish this work and release

# 🗺️ Concept Map & Table of Content
[TOC]

# 🍀 consoleRPG.js | Object explanation and definition
There is some types of object type here:

| Object Type | Definition |
| :-- | :-- |
| Main Object | The main object to be used in code, usually the most top level object. |
| Parent Object | A parent object contain a specific feature as it's constructor. Contain another child object like String Object, Function Object, an all not mentioned. |
| String Object | An object contain string only value on it's constructor (not a parent and only have at least 1 level child). Usually used for readable (not a code) string reference or data such like text or translation. |
| Function Object | An object used as function or feature to do a programmatical action. `login()`, `register()`, `parse()` is one of that thing. |

## game (Main Object)
***game*** is the most top level object contain all the stored child object, function and feature, another down-leveled child, and so on. Use this as the first typed code before accessing another feature in it's child. The usage is such like: `game.<childobject>.<down-levelchildobject>.<...>`.

Example: `game.lang.parse` to use language format parser function from parent child object *lang*.

### lang (Parent Object)
**`game.lang`** is the parent object which contain any **language and multi-language** related function and string child object (which contains translation, see below for more).
 
#### parse (Function Object)
**`game.lang.parse(stringid, langid)`**, is a function object used to parse language object format and get their string value, returning requested string (from `stringid` object) and their language (from `langid`). You may want to look at the comment code to see some explanation.

To be continue writing...
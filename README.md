# hrext07-my-cruddy-app
Extending John's CRUD app framework, to create, save, and delete favorite colors


## Features and Tasks

### Basic Reqs
- [x] Where to store data? (localstorage)
- [x] How to caputure data? (web form)
- [x] How to modify data? (update action, delete action)
- [x] How to view data? (style?)
- [x] UI/UX considerations (how are we going to use this)

### My App features:
- [x] Generate 5 random colors
- [x] Give the user the Hexcode for those colors
- [ ] Have options to save single colors
- [x] Have options to save a palette
- [ ] Show a list of favorite colors
- [ ] Show a list of favorite palettes
- [ ] Delete from list of favorite colors
- [x] Delete from list of favoite palettes
- [ ] Load save color
- [x] Load saved color palettes

### To dos
- [x] Add a button to each color panel (currently disabled)
- [x] show the button to save the color when the user hovers over the panel, hides when not hovored (also disabled)
- [ ] Add a list div (this is where the app will store favorite colors and their hex code)
- [ ] Add a list div for color palettes

### Notes:
How can we save favorite colors and favorite palettes?

For favorite palettes, we can save the 5 colors as a palette as the value, this can be stored into an Array or Object. The user can then name this palette which will be the Key.

For favorite colors, we can save the color as the Value, and save the name the user puts in as the Key.

Favorite colors can be stored into an array, that array can contain a key-value pair of the favorite color. 
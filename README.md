# hrext07-my-cruddy-app
Extending John's CRUD app framework, to create, save, and delete favorite colors


## Features and Tasks

### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

### My App features:
- [x] Generate 5 random colors
- [x] Give the user the Hexcode for those colors
- [ ] Have options to save single colors
- [ ] Have options to save a palette
- [ ] Access a list of favorite colors
- [ ] Access a list of favorite palettes
- [ ] Delete from list of favorite colors
- [ ] Delete from list of favoite palettes

### Furter features:
- [ ] Reload a saved pallete

### To dos
- [ ] Add a button to each color panel
- [ ] show the button to save the color when the user hovers over the panel, hides when not hovored
- [ ] Add a list div (this is where the app will store favorite colors and their hex code)
- [ ] Add a list dive for color palettes

### Notes:
How can we save favorite colors and favorite palettes?

For favorite palettes, we can save the 5 colors as a palette as the value, this can be stored into an Array or Object. The user can then name this palette which will be the Key.

For favorite colors, we can save the color as the Value, and save the name the user puts in as the Key.

Favorite colors can be stored into an array, that array can contain a key-value pair of the favorite color. 
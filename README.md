# TILES AND WAVES 

## PROBLEM STATEMENT
1. Creating a nxn matrix of tiles, where n is a user input. 
2. Each tile is meant to play the musical notes under the conditions: 
    - In the beginning the site should play any note from the eight musical notes.
    - If the last played note has an index i ( i ≠ 0 && i ≠ 7 ) then the note which should be played must have index between i + 1 to 7, including i + 1 and 7.
    - If the last played note has an index 7, the next note can be picked from any of the 0 to 7 indices


## ALGORITHM
- User input is stored in a variable 'n'. 
- 'n' loops are run to create 'n' div elements(representing one tile each) within the 'main' div element storing the 'n'  tiles.
- The audio clips are stored with index numbers ranging from 
- The 8 music notes gets played depending on the indcies which vaires from 0 to 7 ,getting incremented by 1.
- Once i becomes 7 it goes back 0 and the loop continues. 
- The tiles are designed such that when mouse is being hovered through the tiles random colours appear.


## Appendix

Webpage has been developed using basci html, css and javascript.

HTML 

- form action used to define where to send data when form is submitted 

- GO button and place holder is designed using animation 

css

- Heading TILES AND WAVES is designed using hover and shadow effect.

- GO button is animated usnig transition for the period of 0.3 seconds such that the border changes before and after hovering throught the "go button".

- Place holder auto-animated using transition effect for 0.4 seconds 

JAVASCRIPT 

- Tiles in the matrix are given random colours using random function.

- Audio is played while hovering through each tile depending on the indices.

- Enter key removes all the colours from the hovered tiles.

- mousover used to bring colour as well as audio track when mouse is brought next to the tile.


## Link to Deploy project 

```bash
  https://harshita-dutta.github.io/Tiles-and-waves/
```


## Authors

- [harshita-dutta](https://github.com/harshita-dutta/Tiles-and-waves.git)

- [Hayfa13](https://github.com/Hayfa13/Tiles-and-waves.git)

# Calculator
Simple calculator made with JavaScript.
> Live preview: https://facumeniy.github.io/calculator/

# Thoughts
The main issue I ran into was with how the display of the result would work. I first tried to store the two values in an array, operating with those two values and then redefining that array with the result of the operation so it would update the screen with that new value. The problem was that the display would mess up signs and work quite buggy. 

I decided to instead of operating in one array, just using two different variables was a better aproach. I updated the current value whenever a number is inputed by adding that number at the end of the empty string (+=), then, when the user presses an operator I transferred the current value to the previous value, made the current value empty, and updated the corresponding operator to the operator string. 
Finally when the user presses the equal button, it checks what operation it has to do by calling the calculate() function that updates the current value to the result of the operation and then it displays to the bottom of the screen.

Also made my code cleaner by instead of selecting each one of the buttons, I made an event listener for all the number buttons and operators that targets the event (e) text content.

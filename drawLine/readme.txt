Created 1/30/14 by benmagos.

This is a simple HTML5/JavaScript application that draws a line from the center of the canvas to wherever the user clicks.

It uses a simple moveTo(),lineTo(), and stroke() to draw the line, and uses linear interpolation (lerp) in order to draw a tenth of the line at a time, using setInterval() in order to do so.


The canvas starts at 960x480, but will resize to the window if the window changes.




THINGS TO WORK ON:
-Integrating CSS, as of yet, the stylesheet will remove the ability to draw lines.
-Animating the lines creatively, perhaps using .png or some sort of vector graphics in javascript.
-Creating a sprite(of a character or protagonist), and have its location change the initial x,y coordinate.
-And more…
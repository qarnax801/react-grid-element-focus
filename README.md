# Grid element focus

This is a piece of code that allows to you to focus on an element from a grid (or list or anything else) while blurring other elements, using **useState** and the **ternary operator** to update classes.

*PREVIEW:*


![preview](https://res.cloudinary.com/aw0696/image/upload/v1653419500/Preview.gif)


The trick to get everything back to normal outside of bounds
is to just detect if the mouse is outside the container.
It can also be used to apply different stylings, not just
a blur effect.

--------

P.S. This was made on top of create-react-template, but it doesn't use any specific package so it can work with any React code.
Let me know if you have any issues or suggestions for making it better :)

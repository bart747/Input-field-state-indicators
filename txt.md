#Input field state indicators

##Experiments with animations and CSS

Here's the SASS foundation. Everything else is build on top of it

That's a tricky one. If an UI element can change shape, it can also trigger
change in placement of other elements. That way, you can force browser to
recalculate and repaint the whole layout.

To prevent this, you should close the resizable element in a box with fixed
height or width. In this example I creaded a DIV frame with 4rem height, and
placed the form inside it

To simulate events I used the peace of code below.
It basically toggles classes in selected elements of a selected form.
I also added transitions to some CSS classes for mainly aesthetic reasons.

Why .show.animate instead of just .show? Well, if you'll look up to my event simulation
script, you'll see that animations are turned on when selected elements
receive .animate class. It's just a simple way to test.

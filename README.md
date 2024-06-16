# ✏️ Etch-a-Sketch

A digital clone of the classic mechancial drawing toy created using vanilla Javascript, HTML and SASS. This is a side project built for learning purposes and is not designed to be responsive. The focus of this project is to master DOM manipulation using fundamental Javascript concepts.

## 📦 Technologies

- `HTML`
- `CSS & SASS`
- `Javascript`

## ⭐ Features

Here's what you can do with Etch-a-Sketch:

- **Choose a Tool**: You have a pencil, paint bucket, eraser, color picker, clear and grid-sizer. Pick one and start creating. Your selected tool will be highlighted to the left of your screen. 

- **Pencil - Draw and Move**: Click and drag on the canvas to draw. You can click individual pixels to fill in percisely one spot.

- **Color Picker**: Click on the color picker and choose your desired color. You can either input the RGB parameters or use built-in color selector. Once you select a color, your pencil and paint bucket will now use the color you have selected - you can also change the color at anytime!

- **Re-size the Grid**: Click on the grid re-sizer tool and use the horizontal slider to increase or decrease the grid of your sketch pad to your liking. ⚠️ Please note, resizing the grid will also clear your sketch so proceed with caution. 

- **Paint Bucket**: Click the paint bucket to select this tool. Once you have the paint bucket selected, you can click anywhere on your canvas to paint the entire canvas with your current color. ⚠️ Please note, the paint bucket will paint over your entire canvas so use it before you start your sketch.

- **Eraser**: Click the eraser to select this tool. You can click and drag on the canvas to erase the paint on the canvas. The eraser will erase all layers of paint on your canvas marking it white.

- **Clear**: As the name suggests, the clear button will reset your entire canvas and make it empty and white.

## 📖 The Process

I started by structuring my HTML DOM to create the divs and sections for the components I would need to create my etch-a-sketch clone. Then I focused on finding the assets that I would need for the pencil, eraser, re-size and paint tools.

Next I moved onto the Javascript functionality - first listing all of the necessary HTML selectors and variables. 

The bulk of the work was creating the individual functions to allow each tool to manipulate the DOM and ultimately allow users to interact with the canvas. This involved breaking down each functionality into psuedocode to determine the event listeners and sequential logic that is required with each user action. 

Finally, I saved styling for last as it wasn't the main focus of this project. The priority from a design perspective was ensuring the user experience was intuitive and hollsitic. I asked myself the following questions:
1. Are there any conflicts in the information architecture?
2. Are all the tools intuitive for users to understand what they do without an explanation or demo?
3. Do the tools have the functionality that users expect?
4. What tools should be included in the MVP?

## 👓 What I Learned

During this project, I've learned important skills and a better understanding of vanilla Javascript, which is foundational before mastering other Javascript Frameworks.

### 🧠 `DOM Manipulation`:
- **Accessing and Creating Elements**: In order to manipulate the DOM, the correct elements must be accessed. In some cases new elements had to be created, for example, when the sketch grid is resized resulting in additional grid spaces.
- **Dynamically styling and modifying attributes**: To allow users to see the outcome of their interactions, I learned how to dynamically style and modify the attributes of an element using the style property and other attributes.

### 🖱️ `Advanced Event Handling`:
- **Event Listeners**: I learned how to combine event handlers to track certain user states when they interact with a tool. For example, by using the onmousedown and onmouseup event handlers in conjunction, I was alble to determine whether a user is holding down and dragging their cursor to draw on the sketch pad.
- **Event Propagation**: To access the correct event targets, I learned about the different event phases - bubbling and capturing. The element that has the event listener attached may be different than the element that triggers the listener due to the bubbling effect.

## 💭 How can it be improved?
For future iterations, here are some other features that could be introduced to improve this product.

- Color themes: Adding themes such as dark mode, light mode or high contrast can improve the accessibility of etch-a-sketch to users with a visual disability.
- Improved paint bucket: The paint bucket tool can be improved by allowing users to paint inside shapes that they have already drawn instead of covering the entire canvas.
- Shape Tools: Common shapes such as triangles, stars or squares can be introduced as a stamp tool so users do not need to draw it from scratch every time.

## 🚦 Running the Project
To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` or `yarn` in the project director to install the required dependencies.


// Step 1: Shape constructor function
function Shape() {
    // Common properties for all shapes can go here
  }
  
  // Define a method on Shape's prototype
  Shape.prototype.area = function () {
    return 0;
  };
  
  // Step 2: Rectangle constructor function
  function Rectangle(width, height) {
    this.width = width;
    this.height = height;
  }
  
  // Inherit from Shape by setting Rectangle.prototype to a new Shape instance
  Rectangle.prototype = Object.create(Shape.prototype);
  
  // Reset the constructor (optional but good practice)
  Rectangle.prototype.constructor = Rectangle;
  
  // Override the 'area' method
  Rectangle.prototype.area = function () {
    return this.width * this.height;
  };
  
  // ✅ Test the code
  const shape = new Shape();
  console.log("Shape area:", shape.area()); // Output: 0
  
  const rect = new Rectangle(10, 5);
  console.log("Rectangle area:", rect.area()); // Output: 50
  
  // Check prototype chain
  console.log(rect instanceof Rectangle); // true
  console.log(rect instanceof Shape);     // true

  
  /*
  Explanation:

  - The Shape function acts as a base constructor with a default area() method that returns 0.

  - The Rectangle constructor initializes specific properties: width and height.

  - Rectangle.prototype is set to an object created from Shape.prototype, establishing prototype-based inheritance.

  - The constructor property of Rectangle.prototype is reset to Rectangle for correctness.

  - The area() method is overridden in Rectangle to return the actual area (width * height).

  - instanceof checks confirm that a Rectangle object is recognized as an instance of both Rectangle and Shape.
*/
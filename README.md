## Understanding Functional Programming in JavaScript

### Programming Paradigms

Programming paradigms are a way to classify programming languages based on their features and development processes. Programming languages can adhere strictly to one paradigm, or they can be multi-paradigm. Each paradigm comes with it's own style, structure, benefits and trade offs.

The two most common programming paradigms and examples of each:

* Functional
    * Haskell
    * Elm
* Object Oriented
    * Java
    * Ruby
    * C#

JavaScript is a mutliparadigm language. It allows us to write code that is functional, object oriented, or both. In fact, it's most common to use a mixture of paradigms in building our full scale web applications.

### Functional Foundations

Functional programming relies on using functions to drive application process. Most patterns that we use in functional programming can be attributed to writing pure functions. A pure function is a function that receives some inputs and generates an output via the return value. Given the same input, we'll alway have the same output. In addition, pure functions have no side effects. A side effect can be defined as an effect that is visible outside the scope of our function, with the exception of the return value. This might include a console.log, writing to the file system, or mutating application state (e.g. pushing to a global array). A good rule of thumb is that if you're not using the ouput of your function, it is most likely not pure.

While writing our application in a functional way provides many benefits, an application without any visible changes would not be very useful. JavaScript is designed to build and interact with what the user can see, writing HTML to the DOM is a necessity.

The goal of functional programming is to make your application less error-prone, easier to reason about, easier to debug, and more efficient. To understand how we achieve that, we'll look at some of the foundational concepts of functional programming and what they provide us.

* Functional Purtiy
    * No side effects
    * Same input generates same output
* Immutability
    * Predictability
        * Immutability encourages the creation of data, rather than the destruction of exisiting structures.
        * This means that when you're moving data structures around, passing them to different functions or scopes, you're never changing the original structure and only passing copies.
        * It focuses on understanding the flow of data over time which makes our data predicatable and trackable. This is called Mutation Tracking.
        * By using copies of structures, we also avoid side effects, keeping our functions pure.
        * JavaScript is incredibly flexible and allows you to change values on the fly from anywhere that has access to it's reference. This is also one of the primary causes of bugs. `Why did that value change??` With immutability, we limit the scope for `what` changed a value and `why` it was changed.
    * Performance
        * In many cases, immutability can improve the performance of your application by taking advantage of `shared data structures`
* Referential Transparency
* Composition
* Currying

To see examples, checkout the `index.js` file.

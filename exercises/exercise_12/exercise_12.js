/*
	Explanation:

	Stack: 
		Used for static memory allocation and 
        Stores primitive values (numbers, booleans, strings, etc.) and function calls.
        Memory is small, fast, and automatically freed when a function returns.


      Heap:
           Stores objects, arrays, and functions (reference types).
           Memory is managed by the garbage collector, which removes values no longer referenced.

*/

//Memory leak example

function createLeak() {
    const largeArray = new Array(1000000).fill("data");
  
    return function () {
      // This closure holds a reference to largeArray even if it's no longer needed
      console.log("Still referencing largeArray");
    };
  }
  
  const leaky = createLeak();
  // Even if we don't use 'leaky' again, largeArray stays in memory because of the closure

  // leakyFunction holds a reference to largeArray through closure
// Even if we don't use leakyFunction, largeArray remains in memory

// To prevent the leak, set leakyFunction to null when done
leakyFunction = null;

/*
	Explanation Continued:

	- The `createLeak` function creates a large array and 
			returns a function that references it.

	- The returned function forms a closure over 'largeArray', 
			preventing it from being garbage collected.

	-If `leakyFunction` is not needed, setting it to null allows 
		'largeArray' to be garbage collected.
		
	-Properly managing references is crucial to avoid memory leaks. */

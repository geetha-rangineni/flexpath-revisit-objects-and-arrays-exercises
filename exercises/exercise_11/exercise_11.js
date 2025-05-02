const counter = {};
let _count = 0;

Object.defineProperty(counter, "count", {
  get() {
    return _count;
  },
  set(value) {
    if (value >= _count) {
      _count = value;
    } else {
      console.log(`Cannot set count to ${value}. It must not be less than current value (${_count}).`);
    }
  },
  enumerable: true,
  configurable: false
});

// Test it
counter.count = 5;    // Allowed
console.log(counter.count); // 5

counter.count = 3;    //  Not allowed
console.log(counter.count); // 5 (unchanged)

counter.count = 10;   // Allowed
console.log(counter.count); // 10



/* 
Explantion
Object.defineProperty is used to define a custom property count on the counter object with controlled behavior.
The actual value is stored privately in a variable _count, which is not directly accessible from outside.
The getter returns the current value of _count whenever counter.count is accessed.
The setter allows updating the value only if the new value is greater than or equal to the current value. If it's less, the update is rejected and a message is logged.
This enforces a rule that count cannot decrease.

  */
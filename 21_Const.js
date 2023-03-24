// const is a keyword which is also used to create a block scoped variable. But the difference between const and let is that, a const variable cannot be modified. It is constant.

// For example the below code will given an error as we are modifying a const value:

const a=10;
a=20;

// The below code will given an error as we are accessing const outside a block:

{
    const b=10;
}
console.log(b);
  
// Date objects are created with the new Date() constructor.

// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)


/* -------------------------------------------------------------------------- */
/*                                new Date()                                  */
/* -------------------------------------------------------------------------- */


// new Date() creates a new date object with the current date and time:

a = new Date();
console.log(a);
// current date

// Date objects are static. The computer time is ticking, but date objects are not.



/* -------------------------------------------------------------------------- */
/*      new Date(year, month, day, hours, minutes, seconds, milliseconds)     */
/* -------------------------------------------------------------------------- */


// new Date(year, month, ...) creates a new date object with a specified date and time.

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

b = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(b);
// 2018-12-24


// Note: JavaScript counts months from 0 to 11:
// January = 0.
// December = 11.


// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:

//example
// You can observe that, both the date objects c and d created below have same date values.
const c = new Date(2018, 15, 24, 10, 33, 30);
console.log(c);
// 2019-04-24

const d = new Date(2019, 3, 24, 10, 33, 30);
console.log(d);
// 2019-04-24


// Specifying a day higher than max, will not result in an error but add the overflow to the next month:

//example
// You can observe that, both the date objects e and f created below have same date values.
const e = new Date(2018, 5, 35, 10, 33, 30);
console.log(e);
// 2018-07-05

const f = new Date(2018, 6, 5, 10, 33, 30);
console.log(f);
// 2018-07-05


// 6 numbers specify year, month, day, hour, minute, second:
// example:
const g = new Date(2018, 11, 24, 10, 33, 30);
console.log(g);

// 5 numbers specify year, month, day, hour, and minute:
// example
const h = new Date(2018, 11, 24, 10, 33);
console.log(h);

// 4 numbers specify year, month, day, and hour:
// example
const i = new Date(2018, 11, 24, 10);
console.log(i);

// 3 numbers specify year, month, and day:
// example:
const j = new Date(2018, 11, 24);
console.log(j);

// 2 numbers specify year and month:
// example:
const k = new Date(2018, 11);
console.log(k);


// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.


/* -------------------------------------------------------------------------- */
/*                            new Date(dateString)                            */
/* -------------------------------------------------------------------------- */

// new Date(dateString) creates a new date object from a date string:

// example
const l  = new Date("October 13, 2014 11:13:00");
console.log(l);

/* -------------------------------------------------------------------------- */
/*                           new Date(milliseconds)                           */
/* -------------------------------------------------------------------------- */

// JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
// Zero time is January 01, 1970 00:00:00 UTC.

// new Date(milliseconds) creates a new date object as zero time plus milliseconds:

//example:
const m = new Date(0);
console.log(m);
// 1970-01-01

// 01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973:
const n = new Date(100000000000);
console.log(n);
// 1973-03-03

// January 01 1970 minus 100 000 000 000 milliseconds is approximately October 31 1966:
const o = new Date(-100000000000);
console.log(o);
// 1966-10-31

// One day (24 hours) is 86 400 000 milliseconds.
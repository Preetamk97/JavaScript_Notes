// When two different programs want to pass data to each other, they need a commonly accepted format of passing that data. There many formats available like plain text, xml, json, etc.

// JSON stands for JavaScript Object Notation. 

// JSON is a way of formatting the text in such a way that it looks like a JavaScript literal object. 

let empObj = {
    name : "John",
    empNumber : 1001,
    emailId : "John@gmail.com"
}


// JavaScript Object Notation (JSON Format)
// ==========================================

let empJson = '{"name":"John","empNumber":1001,"emailId":"John@gmail.com"}'   // Brackets must be surrounded by ''       
                                                                              // (single quotation marks).

// The keys in JSON string must be a string enclosed withing quotes.
//  The values can be any valid JavaScript value: null, number, string, etc.
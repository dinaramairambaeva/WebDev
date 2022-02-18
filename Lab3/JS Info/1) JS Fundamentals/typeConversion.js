let value = 'true';
alert(typeof value); // string

value = Boolean(value); // now value is a boolean true
alert(typeof value); // boolean

value = Number(value);// now value is a 1
alert(typeof value); // number

// --- //
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
// --- //

value = String(value);// now value is a string "1"
alert(typeof value);
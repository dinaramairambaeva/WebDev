result = (a !== null && a !== undefined) ? a : b;
result = a??b

//======//
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
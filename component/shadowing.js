const modemDetails = 5;

function updateModemDetails(newDetails) {
    const modemDetails = newDetails; // This shadows the outer variable
    var Alpha1 = 2;
    let Alpha2 = 3;
        
    console.log("Inner modemDetails:", modemDetails);
}

updateModemDetails(10);
console.log("Outer modemDetails:", modemDetails);


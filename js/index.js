function scanInputs(){
sideA = parseInt(document.scanned_Inputs.sideA.value);
sideB= parseInt(document.scanned_Inputs.sideB.value);
sideC = parseInt(document.scanned_Inputs.sideC.value);
    if (sideA == sideB && sideB == sideC) {
    alert("Equalateral");
    }
    if (sideA == sideB && != sideC) {
    alert("Isosceles");
    }
    if (sideA != sideB == sideC) {
    alert("Isosceles");
    }
    if (sideA != sideB != sideC != sideA) {
    alert("Scalene!");
    }
}

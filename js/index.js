function scanInputs() {
	var A = parseInt(document.scanInput.sideA.value);//converts input for side A to integer
	var B = parseInt(document.scanInput.sideB.value);//converts for side B
	var C = parseInt(document.scanInput.sideC.value);//converts for side C
	var sideAsqrd = A *A;//side A squared for pythagorean theorem
	var sideBsqrd = B * B;//side B squared
	var sideCsqrd = C * C;//side C squared
	var AB = A + B;//side A + B to check if a triangle can be formed
	var AC = A + C;//side A + C
	var BC = B + C;//side B + C
	var A2B2 = sideAsqrd + sideBsqrd;
	var A2C2 = sideAsqrd + sideCsqrd;
	var B2C2 = sideBsqrd + sideCsqrd;
	if ((AB > C) && (AC > B) && (BC > A)) {
		alert("These numbers could form a triangle.");
	}
	if ((sideAsqrd == B2C2) || (sideBsqrd == A2C2) || (sideCsqrd == A2B2)) 
  {
		alert("These numbers could also form a right triangle.");
	}
  if((A === B)&&(A === C)&&(C === B))
  {
    alert("This is an EQUILATERAL TRIANGLE");
  }
  if((A !== B)&&(A !== C)&&(C !== B))
  {
    alert("This is a SCALENE");
  }
  if((A === B)||(A === C)||(C === B))
  {
    alert("This is a ISOCSELES");
  }
	else 
  {
		alert("These 3 sides can not form a triangle.");
	}	
}
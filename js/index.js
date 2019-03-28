function myFunction() {
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
  var text;
	if ((AB > C) && (AC > B) && (BC > A)) {
    if ((sideAsqrd == B2C2) || (sideBsqrd == A2C2) || (sideCsqrd == A2B2)) 
    {
      text = "These numbers could also form a right triangle.";
    }
    else if((A === B)&&(A === C)&&(C === B))
    {
      text = "This is an EQUILATERAL TRIANGLE"
    }
    else if((A !== B)&&(A !== C)&&(C !== B))
    {
      text = "This is a SCALENE";
    }
    else if(((A === B)&&(A !== C)&&(B !== C)) ||((B === C)&&(A !==B)&&(A !== C ) )||((A === C)&&(B !== C)&&(B !== A)))
    {
      text = "This is a ISOCSELES";
    }
	}
	else 
  {
		text = "These 3 sides can not form a triangle.";
  }	
  document.getElementById("display").innerHTML = text;
}
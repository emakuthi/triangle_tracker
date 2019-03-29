function myFunction() {
	var A = parseInt(document.scanInput.sideA.value);//converts input for side A to integer
	var B = parseInt(document.scanInput.sideB.value);//converts for side B
  var C = parseInt(document.scanInput.sideC.value);//converts for side C
  var sides = [];
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
      text = "can form a RIGHT ANGLED TRIANGLE.";
      document.getElementById("image").innerHTML ='<img src="images/isosceles.jpg" alt="right angle "height="360" width="360".>'
    }
    else if((A === B)&&(A === C)&&(C === B))
    {
      text = "can form an EQUILATERAL TRIANGLE";
      document.getElementById("image").innerHTML ='<img src="images/Equilateral.jpg" alt="Equilateral "height="360" width="360".>'
    }
    else if((A !== B)&&(A !== C)&&(C !== B))
    {
      text = "can form a SCALENE TRIANGE";
      document.getElementById("image").innerHTML ='<img src="images/scalene_triangle.jpg" alt="scalene_triangle"height="360" width="360".>'
    }
    else if(((A === B)&&(A !== C)&&(B !== C)) ||((B === C)&&(A !==B)&&(A !== C ) )||((A === C)&&(B !== C)&&(B !== A)))
    {
      text = "can form an ISOCSELES TRIANGE";
      document.getElementById("image").innerHTML ='<img src="images/isosceles.jpg" alt="right angle "height="360" width="360".>'
    }
	}
	else 
  {
		text = "can not form a TRIANGLE.";
  }	
  sides.push([[A],[B],[C]]);
  document.getElementById("display").innerHTML = "Values"+" "+"["+sides +"]"+ " "+ text ;
}
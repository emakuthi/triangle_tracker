function myFunction() {
	var A = parseInt(document.scanInput.sideA.value);//converts input for sideA to integer
	var B = parseInt(document.scanInput.sideB.value);//converts for sideB to integer
  var C = parseInt(document.scanInput.sideC.value);//converts for sideC to integer
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
    if ((sideAsqrd == B2C2) || (sideBsqrd == A2C2) || (sideCsqrd == A2B2)) //check whether the triangle is right angle
    {
      text = "can form a RIGHT ANGLED TRIANGLE.";
      document.getElementById("image").innerHTML ='<img src="images/Right_Angles_Triangle.jpg" alt="right angle "height="200" width="200".>'
    }
    else if((A === B)&&(A === C)&&(C === B))// check whether the triangle is Equilateral
    {
      text = "can form an EQUILATERAL TRIANGLE";
      document.getElementById("image").innerHTML ='<img src="images/Equilateral.jpg" alt="Equilateral "height="200" width="200".>'
    }
    else if((A !== B)&&(A !== C)&&(C !== B))//check whether the triangle is scalene
    {
      text = "can form a SCALENE TRIANGE";
      document.getElementById("image").innerHTML ='<img src="images/scalene.jpg" alt="scalene_triangle"height="200" width="200".>'
    }
    else if(((A === B)&&(A !== C)&&(B !== C)) ||((B === C)&&(A !==B)&&(A !== C ) )||((A === C)&&(B !== C)&&(B !== A)))//check whether the triangle is isosceles
    {
      text = "can form an ISOCSELES TRIANGE";
      document.getElementById("image").innerHTML ='<img src="images/isosceles.jpg" alt="isosceles_triangle"height="200" width="200".>'
    }
	}
	else 
  {
    text = "can not form a TRIANGLE.";
    document.getElementById("image").innerHTML ='<img src="images/not_triangle.jpg" alt="not_triangle"height="200" width="200".>'
  }	
  sides.push([[A],[B],[C]]);// puts the inputs in an array
  document.getElementById("display").innerHTML = "Values"+" "+"["+sides +"]"+ " "+ text ; //displays the output
}
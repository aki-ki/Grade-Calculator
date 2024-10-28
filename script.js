document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let firstGrade = Number(document.getElementById("clientSide").value);
  let secondGrade = Number(document.getElementById("structProgram").value);
  let thirdGrade = Number(document.getElementById("structProgram2").value);
  let fourthGrade = Number(document.getElementById("clientSide2").value);
  let fifthGrade = Number(document.getElementById("projectA").value);

  let finalGrade =
    Math.round(
      firstGrade + secondGrade + thirdGrade + fourthGrade + fifthGrade
    ) / 5;

  // firstGrade + secondGrade + thirdGrade + fourthGrade + fifthGrade
  document.getElementById("grade").innerHTML = Math.round(finalGrade);
}

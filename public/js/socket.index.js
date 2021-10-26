let showInformation = false;
$("#information").hide();

$("#show").on("click", () => {
  $("#information").show();
  if (showInformation) {
    $("#information").hide();
    showInformation = false;
  } else {
    $("#information").show();
    showInformation = true;
  }
});

document.getElementById("generate-desktop").src =
  "escritorio.html?escritorio=" + Math.round(Math.random(4) * 10);

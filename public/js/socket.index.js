let showInformation = false;

const winWidth = $(window).width();
const docWidth = $(document).width();

$("#information").hide();
$("#modal").hide();
$("#modal-disclaimer").hide();

$("#modal").removeClass("no-display");
$("#modal-disclaimer").removeClass("no-display");

document.getElementById("generate-desktop").src =
  "escritorio.html?escritorio=" + Math.round(Math.random(4) * 10);

if (winWidth <= 650) {
  $("#modal-disclaimer").show();
}

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

$("img").on("click", () => {
  $("#modal").show();
});

$("#close-modal").on("click", () => {
  $(".modal-container").addClass("animate__bounceOut");
  setTimeout(() => {
    $(".modal-container").removeClass("animate__bounceOut");
    $("#modal").hide();
  }, 500);
});

$("#close-modal-disclaimer").on("click", () => {
  $(".modal-container").addClass("animate__bounceOut");
  setTimeout(() => {
    $(".modal-container").removeClass("animate__bounceOut");
    $("#modal-disclaimer").hide();
  }, 500);
});

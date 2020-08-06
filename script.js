$(function () {
  /* Modal */

  var modal = $("#modal");
  var imgModal = $("#img-full");

  $(".img-preview").click(function () {
    var img = $(this);
    modal.css("display", "block");
    if (img.width() > img.height()) {
      imgModal.css({ "max-height": "90%", "max-width": "85%" });
    } else {
      imgModal.css({ "max-height": "none", "max-width": "55%" });
    }
    imgModal.attr({ src: img.attr("src") });
    $("#caption").html(img.attr("alt"));
  });

  $("#close").click(function () {
    modal.css("display", "none");
  });
});

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

  /* Scroll to top */

  $(window).scroll(function () {
    var up = $(".fa-chevron-circle-up");
    if ($(document).scrollTop() > 200) {
      up.removeClass("popdown").addClass("popup");
      up.show();
    } else {
      up.removeClass("popup").addClass("popdown");
      if ($(document).scrollTop() < 180) {
        up.hide();
      }
    }
  });

  $(".fa-chevron-circle-up").click(function () {
    $(document).scrollTop(0);
  });

  /* Mobile nav */

  $("#hamburger").click(function () {
    $(this).hide();
    $("#nav-items").show();
    $("#navbar").css({
      "flex-direction": "column",
      "background-color": "black",
    });
    $("#nav-close").show().css({ padding: "20px 25px" });
  });

  $("#nav-close").click(function () {
    $(this).hide();
    $("#hamburger").show();
    $("#nav-items").hide();
    $("#navbar").css({
      "flex-direction": "row",
      "background-color": "transparent",
    });
  });
});

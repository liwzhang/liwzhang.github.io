$(function () {
  // MagicGrid

  // $(window).on("load", function () {
  //   // wait until all images load before calling magicgrid
  //   $(".img-container").show();
  //   let magicGrid = new MagicGrid({
  //     container: ".img-container",
  //     static: true,
  //     animate: true,
  //     useMin: true,
  //     maxColumns: 3,
  //     gutter: 10,
  //   });
  //   magicGrid.listen();
  // });

  // Modal

  var modal = $("#modal");
  var imgModal = $("#img-full");

  $(".img-preview").click(function () {
    var img = $(this);
    modal.css("display", "block");
    if (modal.scrollTop != 0) {
      modal.scrollTop(0);
    }
    if (img.width() > img.height()) {
      imgModal.css({ "max-height": "90%", "max-width": "85%" });
    } else {
      imgModal.css({ "max-height": "none", "max-width": "55%" });
    }
    imgModal.attr({ src: img.attr("src") });
    $("#caption").html(img.attr("alt"));
  });

  modal.click(function () {
    modal.css("display", "none");
  });

  // Scroll to top

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

  // Mobile nav

  $(".hamburger").click(function () {
    $("#nav-items").addClass("responsive");
    $(this).removeClass("active");
    $(".nav-close").addClass("active");
  });
  $(".nav-close").click(function () {
    $("#nav-items").removeClass("responsive");
    $(this).removeClass("active");
    $(".hamburger").addClass("active");
  });
});

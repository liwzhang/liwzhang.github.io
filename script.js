/* Modal */
var modal = document.getElementById("modal");
var img = document.getElementById("sw1");
var imgModal = document.getElementById("img-full");
imgHandler = function (img) {
  modal.style.display = "block";
  console.log(this.src);
  imgModal.src = img.src;
};

closeHandler = function () {
  modal.style.display = "none";
};

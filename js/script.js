document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances__sidenav = M.Sidenav.init(elems);

  var modal = document.querySelectorAll(".modal");
  var instances__modal = M.Modal.init(modal);

  var img = document.querySelectorAll(".materialboxed");
  var instances__img = M.Materialbox.init(img);
});

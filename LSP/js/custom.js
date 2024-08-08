// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// nice select
$(document).ready(function () {
  $("select").niceSelect();
});

// date picker
$(function () {
  $("#inputDate")
    .datepicker({
      autoclose: true,
      todayHighlight: true,
    })
    .datepicker("update", new Date());
});

// owl carousel slider js
$(".team_carousel").owlCarousel({
  loop: true,
  margin: 15,
  dots: true,
  autoplay: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      margin: 0,
    },
    576: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

function simpan_data() {
  swal(
    {
      title: "Pastikan Data Data Telah benar?",
      // text: "You will not be able to recover this imaginary file !!",
      type: "warning",
      showCancelButton: !0,
      confirmButtonColor: "#7066e0",
      confirmButtonText: "Ya, Lanjutkan Simpan",
      closeOnConfirm: !1,
    },
    function () {
      swal("Berhasil !!", "Data Berhasil Di Simpan", "success");
    }
  );
}

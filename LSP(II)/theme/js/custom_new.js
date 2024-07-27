function confirmDelete(button) {
  swal(
    {
      title: "Anda Akan Menghapus data Ini?",
      // text: "You will not be able to recover this imaginary file !!",
      type: "warning",
      showCancelButton: !0,
      confirmButtonColor: "red",
      confirmButtonText: "Ya, Hapus",
      closeOnConfirm: !1,
    },
    function () {
      swal(
        "Berhasil !!",
        "Untuk lanjut ke APL 02, silahkan menunggu admin approve",
        "success"
      );
    }
  );
}
// JavaScript untuk menangani aksi unduh
function confirmDownload(event, link) {
  event.preventDefault(); // Prevent the default action of the link

  // If confirmed, trigger the download
  window.location.href = link.href;
}
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

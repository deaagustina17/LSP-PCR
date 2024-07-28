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
      swal("Berhasil !!", "Data Berhasil di Hapus", "success");
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
$(".hapus_data_pengajaran").on("click", function () {
  $(".mata_kuliah").val("");
  $(".kelas_pengajaran").val("");
  $(".input_bukti_pengajaran").val("");
});

// js for delete row data pengajaran
$("#tambah-riwayat-pengajaran").click(function () {
  var newRow = `<tr>
                        <td>
                            <input type="text" class="form-control mata_kuliah" />
                        </td>
                        <td>
                            <input type="text" class="form-control kelas_pengajaran" />
                        </td>
                        <td width="28%">
                            <input type="file" class="form-control kelas_pengajaran" />
                        </td>
                        <td>
                            <button class="btn btn-danger hapus_data_pengajaran" type="button">Hapus</button>
                        </td>
                      </tr>`;
  $("#riwayat-pengajaran-body").append(newRow);
});

$(document).on("click", ".hapus_data_pengajaran", function () {
  $(this).closest("tr").remove();
});

$(".button_tambah_pengalaman_pelatihan").on("click", function () {
  var row_pelatihan = `<tr>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td width="28%">
                      <input
                        type="file"
                        class="form-control bukti_pelatihan"
                      />
                    </td>
                    <td>
                      <button class="btn btn-danger button_hapus_pengalaman_pelatihan" type="button">Hapus</button>
                    </td>
                  </tr>`;
  $(".row_tambah_pengalaman_pelatihan").append(row_pelatihan);
});
$(document).on("click", ".button_hapus_pengalaman_pelatihan", function () {
  $(this).closest("tr").remove();
});
// $(".button_hapus_pengalaman_pelatihan").on("click", function(){
//   $(this).closest("tr").remove();
// })

// riwayat pengajaran
$(".button_tambah_riwayat_pengajaran").on("click", function () {
  var row_pelatihan = ` <tr>
                                                <td>
                                                    <div class="col-lg-12">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="val-matakuliah1"
                                                            name="val-matakuliah1"
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="col-lg-12">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="val-kelas1"
                                                            name="val-kelas1"
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="button-icon ">
                                                        <input
                                                            type="file"
                                                            class="form-control"
                                                            id="exampleFormControlFile1"
                                                            accept="image/*"
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                  <button class="btn btn-danger button_hapus_riwayat_pengajaran">
                                                        Hapus
                                                  </button>
                                                </td>
                                            </tr>`;
  $(".row_riwayat_pengajaran").append(row_pelatihan);
});
$(document).on("click", ".button_hapus_riwayat_pengajaran", function () {
  $(this).closest("tr").remove();
});

// pengalaman pelatihan
$(".button_tambah_pengalaman_pelatihan1").on("click", function () {
  var row_pelatihan = `<tr>
                              <td>
                                <div class="col-lg-12">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="val-jenispelaksanaan1"
                                    name="val-pelaksanaan1"
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="col-lg-12">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="val-pelaksanaan1"
                                    name="val-pelaksanaan1"
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="col-lg-12">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="val-tahun"
                                    name="val-tahun"
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="button-icon">
                                  <input
                                    type="file"
                                    class="form-control"
                                    id="exampleFormControlFile1"
                                    accept="image/*"
                                  />
                                </div>
                              </td>
                              <td>
                                <button class="btn btn-danger button_hapus_pengalaman_pelatihan1">
                                      Hapus
                                </button>
                              </td>
                            </tr>`;
  $(".row_pengalaman_pelatihan1").append(row_pelatihan);
});
$(document).on("click", ".button_hapus_pengalaman_pelatihan1", function () {
  $(this).closest("tr").remove();
});
$(".simpan_data_pengalaman").on("click", function () {
  var is_valid = true;

  var input_nama_lengkap_asesor = $(".input_nama_lengkap_asesor").val();
  var error_input_nama_lengkap_asesor = $(".error_input_nama_lengkap_asesor");

  if (input_nama_lengkap_asesor === "") {
    error_input_nama_lengkap_asesor.text("Masukkan nama lengkap");
    is_valid = false;
  } else {
    error_input_nama_lengkap_asesor.text("");
  }

  var input_inisial_asesor = $(".input_inisial_asesor").val();
  var error_input_inisial_asesor = $(".error_input_inisial_asesor");

  if (input_inisial_asesor === "") {
    error_input_inisial_asesor.text("Masukkan inisial");
    is_valid = false;
  } else {
    error_input_inisial_asesor.text("");
  }

  var input_tempat = $(".input_tempat").val();
  var error_input_tempat = $(".error_input_tempat");

  if (input_tempat === "") {
    error_input_tempat.text("Masukkan tempat");
    is_valid = false;
  } else {
    error_input_tempat.text("");
  }

  var input_tgl_lahir = $(".input_tgl_lahir").val();
  var error_input_tgl_lahir = $(".error_input_tgl_lahir");

  if (input_tgl_lahir === "") {
    error_input_tgl_lahir.text("Masukkan tanggal");
    is_valid = false;
  } else {
    error_input_tgl_lahir.text("");
  }

  var input_jk = $(".input_jk").val();
  var error_input_jk = $(".error_input_jk");

  if (input_jk === "") {
    error_input_jk.text("Pilih jenis kelamin");
    is_valid = false;
  } else {
    error_input_jk.text("");
  }

  var input_kebangsaan = $(".input_kebangsaan").val();
  var error_input_kebangsaan = $(".error_input_kebangsaan");

  if (input_kebangsaan === "") {
    error_input_kebangsaan.text("Masukkan kebangsaan");
    is_valid = false;
  } else {
    error_input_kebangsaan.text("");
  }

  var input_alamat_rumah = $(".input_alamat_rumah").val();
  var error_input_alamat_rumah = $(".error_input_alamat_rumah");

  if (input_alamat_rumah === "") {
    error_input_alamat_rumah.text("Masukkan alamat rumah");
    is_valid = false;
  } else {
    error_input_alamat_rumah.text("");
  }

  var input_nomor_regis = $(".input_nomor_regis").val();
  var error_input_nomor_regis = $(".error_input_nomor_regis");

  if (input_nomor_regis === "") {
    error_input_nomor_regis.text("Masukkan nomor regis");
    is_valid = false;
  } else {
    error_input_nomor_regis.text("");
  }

  var input_tanda_tangan = $(".input_tanda_tangan").val();
  var error_input_tanda_tangan = $(".error_input_tanda_tangan");

  if (input_tanda_tangan === "") {
    error_input_tanda_tangan.text("Upload tanda tangan");
    is_valid = false;
  } else {
    error_input_tanda_tangan.text("");
  }

  if (is_valid == false) {
    return "";
  }

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
  $(".input_nama_lengkap_asesor").val("");
  $(".input_inisial_asesor").val("");
  $(".input_tempat").val("");
  $(".input_tgl_lahir").val("");
  $(".input_jk").val("");
  $(".input_kebangsaan").val("");
  $(".input_alamat_rumah").val("");
  $(".input_nomor_regis").val("");
  $(".input_tanda_tangan").val("");
});

// $(".simpan_data_pengalaman").on("click", function () {
// dokumensertifikasiasesor_asesor
$(".simpan_dokumensertifikasiasesor_asesor").on("click", function () {
  var is_valid = true;

  var input_skema = $(".input_skema").val();
  var error_input_skema = $(".error_input_skema");

  if (input_skema === "") {
    error_input_skema.text("Pilih skema");
    is_valid = false;
  } else {
    error_input_skema.text("");
  }

  var input_nomor_regis = $(".input_nomor_regis").val();
  var error_input_nomor_regis = $(".error_input_nomor_regis");

  if (input_nomor_regis === "") {
    error_input_nomor_regis.text("Masukkan nomor regis");
    is_valid = false;
  } else {
    error_input_nomor_regis.text("");
  }

  var input_tgl_habis = $(".input_tgl_habis").val();
  var error_input_tgl_habis = $(".error_input_tgl_habis");

  if (input_tgl_habis === "") {
    error_input_tgl_habis.text("Masukkan tangal habis");
    is_valid = false;
  } else {
    error_input_tgl_habis.text("");
  }

  var input_tandatangan = $(".input_tandatangan").val();
  var error_input_tandatangan = $(".error_input_tandatangan");

  if (input_tandatangan === "") {
    error_input_tandatangan.text("Upload tanda tangan");
    is_valid = false;
  } else {
    error_input_tandatangan.text("");
  }
  
  if (is_valid == false) {
    return "";
  }

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
  $(".input_skema").val('');
$(".input_nomor_regis").val('');
$(".input_tgl_habis").val('');
$(".input_tandatangan").val('');
});

function wajib_pdf(input) {
  var input_ktp = $(input).val();
  var fileExtension = input_ktp.split(".").pop().toLowerCase();
  if (fileExtension !== "pdf") {
    alert("Pastikan file yang diupload PDF");
    $(input).val("");
  }
}

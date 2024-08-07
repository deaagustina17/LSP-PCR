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
      $(button).closest("tr").remove();
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

// bagian d tambah dokumen sertifikasi asesor

$(".tambah_dokumen_sertifikasi_asesor").on("click", function () {
  var row_pelatihan = ` <tr>
                              <td>
                                <div class="col-lg-12">
                                  <select
                                    class="form-control form-white bidang_assesor"
                                    data-placeholder="Bidang"
                                    name="category-bidang"
                                  >
                                    <option value="">Pilih Bidang</option>
                                    <option
                                      value="Database Programming Supervisor"
                                    >
                                      Database Programming Supervisor
                                    </option>
                                    <option value="Network Administrator Muda">
                                      Network Administrator Muda
                                    </option>
                                    <option value="Programmer">
                                      Programmer
                                    </option>
                                    <option
                                      value="Teknisi Madya Jaringan Komputer"
                                    >
                                      Teknisi Madya Jaringan Komputer
                                    </option>
                                    <option
                                      value="Pengoperasian Peralatan Kelistrikan
                                          Dan Elektronika Berbasis
                                          Programmable Logic Controller (PLC)"
                                    >
                                      Pengoperasian Peralatan Kelistrikan Dan
                                      Elektronika Berbasis Programmable Logic
                                      Controller (PLC)
                                    </option>
                                    <option value="Plate Welder">
                                      Plate Welder
                                    </option>
                                    <option
                                      value="Pengoperasian Instrumentasi Proses
                                          Kontrol"
                                    >
                                      Pengoperasian Instrumentasi Proses Kontrol
                                    </option>
                                    <option value="Teknisi Akuntansi Pratama">
                                      Teknisi Akuntansi Pratama
                                    </option>
                                    <!-- <option value="bidang9">
                                            Welding Inspector Standar
                                          </option> -->
                                  </select>
                                </div>
                              </td>
                              <td>
                                <div class="col-lg-12">
                                  <div class="input-group">
                                    <input
                                      type="text"
                                      class="form-control datepicker-autoclose"
                                    />
                                    <span class="input-group-append"
                                      ><span class="input-group-text"
                                        ><i
                                          class="mdi mdi-calendar-check"
                                        ></i></span
                                    ></span>
                                  </div>
                                  <div
                                    class="text-danger error_input_tgl_lahir"
                                  ></div>
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
                                <button
                                  class="btn btn-danger hapus_dokumen_sertifikasi_asesor"
                                  type="button"
                                >
                                  Hapus
                                </button>
                              </td>
                            </tr>`;
  $(".row_tambah_dokumen_sertifikasi_asesor").append(row_pelatihan);
});
$(document).on("click", ".hapus_dokumen_sertifikasi_asesor", function () {
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
  // $(".input_nama_lengkap_asesor").val("");
  // $(".input_inisial_asesor").val("");
  // $(".input_tempat").val("");
  // $(".input_tgl_lahir").val("");
  // $(".input_jk").val("");
  // $(".input_kebangsaan").val("");
  // $(".input_alamat_rumah").val("");
  // $(".input_nomor_regis").val("");
  // $(".input_tanda_tangan").val("");
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
  $(".input_skema").val("");
  $(".input_nomor_regis").val("");
  $(".input_tgl_habis").val("");
  $(".input_tandatangan").val("");
});

function wajib_pdf(input) {
  var input_ktp = $(input).val();
  var fileExtension = input_ktp.split(".").pop().toLowerCase();
  if (fileExtension !== "pdf") {
    alert("Pastikan file yang diupload PDF");
    $(input).val("");
  }
}

function wajib_excel(input) {
  // Mendapatkan nilai dari input file
  var input_ktp = $(input).val();

  // Mendapatkan ekstensi file
  var fileExtension = input_ktp.split(".").pop().toLowerCase();

  // Daftar ekstensi file yang diizinkan
  var allowedExtensions = ["xlsx", "csv", "xls"];

  // Mengecek apakah ekstensi file ada dalam daftar ekstensi yang diizinkan
  if ($.inArray(fileExtension, allowedExtensions) == -1) {
    alert("Pastikan file yang diupload berformat .xlsx, .csv, atau .xls");
    $(input).val("");
  } else {
    // Lanjutkan dengan proses selanjutnya
  }
}

// custom datepicker

var today = new Date();

// Initialize datepicker with today's date
$(".datepicker-autoclose")
  .datepicker({
    autoclose: true,
    format: "dd-mm-yyyy",
  })
  .datepicker("setDate", today);

// buat hanya satu yang di checkbox
function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName("option");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
  var checkboxes = document.getElementsByName("options");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}
function onlyOne1(checkbox) {
  var checkboxes = document.getElementsByName("option1");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
  var checkboxes = document.getElementsByName("options");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}

function onlyOne2(checkbox) {
  var checkboxes = document.getElementsByName("option2");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
  var checkboxes = document.getElementsByName("options");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}
// buat hanya satu yang di checkbox
function handleMultiCheckbox(multiCheckbox, checkType, uncheckType) {
  // Ambil semua checkbox dengan id sesuai 'checkType' dan 'uncheckType'
  const checkboxesToCheck = document.querySelectorAll(`input[id^=${checkType}]`);
  const checkboxesToUncheck = document.querySelectorAll(`input[id^=${uncheckType}]`);

  // Atur checkbox yang sesuai dengan checkType
  checkboxesToCheck.forEach(checkbox => {
      checkbox.checked = multiCheckbox.checked;
  });

  // Atur checkbox yang sesuai dengan uncheckType
  checkboxesToUncheck.forEach(checkbox => {
      checkbox.checked = false;
  });
}
// wajib pdf yang di tampilkan ttdnya
function wajib_pdf_ditampilkan(input) {
  var file = input.files[0];
  var fileViewer = document.getElementById("fileViewer");
  fileViewer.innerHTML = ""; // Clear previous content

  if (file.type === "application/pdf") {
    var reader = new FileReader();
    reader.onload = function (e) {
      fileViewer.innerHTML = `<iframe src="${e.target.result}" width="100%" height="500px"></iframe>`;
    };
    reader.readAsDataURL(file);
  } else if (file.type.startsWith("image/")) {
    var reader = new FileReader();
    reader.onload = function (e) {
      fileViewer.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" style="max-width: 50%; height: 50%;" />`;
    };
    reader.readAsDataURL(file);
  } else {
    alert("Hanya Boleh Upload Image atau PDF");
    $(input).val("");
  }
}

function wajib_pdf_zip_rar(input) {
  var input_ktp = $(input).val();
  var fileExtension = input_ktp.split(".").pop().toLowerCase();
  
  // Array ekstensi file yang diperbolehkan
  var allowedExtensions = ["pdf", "zip", "rar"];
  
  // Memeriksa apakah ekstensi file yang diupload ada dalam daftar yang diperbolehkan
  if (!allowedExtensions.includes(fileExtension)) {
      alert("Pastikan file yang diupload adalah PDF, ZIP, atau RAR");
      $(input).val("");  // Menghapus file yang diupload jika ekstensi tidak sesuai
  }
}

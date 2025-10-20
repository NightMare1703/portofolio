const boxes = document.querySelectorAll(".Collapse");
const value = document.querySelectorAll(".value");
const titleEx = document.querySelectorAll(".titleEx");
const categories = document.querySelectorAll(".kategori");
const imgThumbnail = document.querySelectorAll(".img-thumbnail");
const imgContainer = document.querySelector("#img-container");
const nama = document.querySelector("#nama");
const email = document.querySelector("#email");
const text = document.querySelector("#text");
const kirim = document.querySelector("#kirim");
const kirimPesan = document.querySelector("#kirim-pesan");
const dropImg = document.querySelectorAll(".drop2");
const subTitile = document.querySelectorAll('.subTitle')

boxes.forEach((box) => {
  box.addEventListener("click", function (event) {
    event.stopPropagation();
    box.classList.toggle("active");
   // ambil panah di dalam box yang diklik
    const arrow = box.querySelector(".drop2");

    if (box.classList.contains("active")) {

      arrow.setAttribute("src", "icon/down.png");
    } else {
      arrow.setAttribute("src", "icon/right.png");
    }
  });
});


// console.log(dropImg)

//  document.addEventListener("click", function () {
//       boxes.forEach(b => b.classList.remove("active"));
//       // value.forEach(b => b.classList.remove("show"));

//     });

const project = {
  poster: ["12 (2).png", "12 (3).png", "12 (4).png", "51.png"],
  video: ["3d2.png", "3d2.png", "3d2.png", "3d2.png"],
  design3d: ["3d1.png", "3d2.png", "3d3.png", "3d4.png"],
  uiux: ["1.png", "2.png", "3.png", "12 (1).png"],
};

categories.forEach((item) =>
  item.addEventListener("click", function () {
    if (item.classList.contains("kategori-aktif")) {
      item.classList.remove("kategori-aktif");
    }
    categories.forEach((b) => b.classList.remove("kategori-aktif"));

    item.classList.add("kategori-aktif");

    function tampil() {
      if (item.classList.contains("video")) {
        return project["video"];
      } else if (item.classList.contains("design3d")) {
        return project["design3d"];
      } else if (item.classList.contains("uiux")) {
        return project["uiux"];
      } else {
        return project["poster"];
      }
    }

    const cat = tampil();
    
    imgContainer.innerHTML = cat
      .map(
        (img) => `
          <li data-aos="zoom-in" data-aos-duration="1500" class="m-2 list-unstyled">
            <img class="pro-img rounded-2"src="img/${img}">
          </li>`
      ).join("");
  })
);

// fungsi kirim pesan
kirim.addEventListener("click", function () {
  let isiNama = nama.value;
  let isiEmail = email.value;
  let isiText = text.value;

  if (isiNama == "" || isiEmail == "" || isiText == "") {
    alert("Silahkan isi biodata terlebih dahulu!");
    // kirimPesan.setAttribute('href', `#contact`)
  } else {
    // kirim.innerHTML = `<a href = "https://wa.me/6285173036787?text=Nama : ${isiNama}%0AEmail : ${isiEmail}%0A${isiText}" target="_blank"></a>`
    kirim.setAttribute(
      "href",
      `https://wa.me/6285173036787?text=Nama : ${isiNama}%0AEmail : ${isiEmail}%0A${isiText}`
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const envelope = document.getElementById("envelope");
  const openBtn = document.getElementById("openBtn");
  const hint = document.getElementById("hint");
  const pages = Array.from(document.querySelectorAll(".page"));

  const gallery = document.getElementById("gallery");
  const photoGrid = document.getElementById("photoGrid");
  const photoViewer = document.getElementById("photoViewer");
  const largePhoto = document.getElementById("largePhoto");
  const photoCounter = document.getElementById("photoCounter");

  let currentPage = 0;
  let photoIndex = 0;

 function fillList(id, names) {
     const list = document.getElementById(id);
     if (!list) return;

     list.innerHTML = "";

     if (Array.isArray(names)) {
         names.forEach(name => {
             const item = document.createElement("li");
             item.textContent = name;
             list.appendChild(item);
         });
     } else {
         for (let i = 1; i <= 18; i++) {
             const item = document.createElement("li");
             item.textContent = '${names} ${i}';
             list.appendChild(item);
         }
     }
 }

  fillList("treasures", ["ALIAH MACALALAG", "TONI ROSE LALAGUNA", "RAM SAYRA NUÑEZ","BEVERLY LAGASCA" , "REY GALISIM", "ANGEL TOMAS", "DANIELA RAZALAN", "LYKA SUYAT", "ALEXA RESOSO", "TANYA VENTURA", "KRIZZA SANTOS", "CRYSTAL ROGEL", "SOPHIA OVINA", "VALEEN BALIBAT", "EMILY SANTOS", "JAMAICA MARCOS", "PRECIOUS TAMAYO","JHUNNEL MANGABAY"]);
  fillList("gifts", ["RICA MACALALAG","SHERLYN MACALALAG", "JOYCELYN GARDUQUE ABUDA", "ELEAH KATHLEEN RIVERA", "JOAN BETE","ADRIAN CASTRO" , "CJ MACALALAG", "MARK ANTONY VERSOSA", "JHAZIN OLA", "ALEX JAMES BUGAYONG","RICO GARRA" , "CHLOE YADAO" ,"ALDRIN JAE VAL GARDUQUE", "AJ VAL GARDUQUE", "JENILE MAE BETE" ,"JUVY ANTONIO", "SHEENA FERRER", "JESSIE ANTONIO OSANA" ]);
  fillList("candles", ["MARIE GUILLERMO", "BUENAFE GUILLERMO","SALINIA RIVERA", "ANGELA GUILLERMO","MACEL LALAGUNA","ROVELI VERCELES", "GINA MACALALAG", "GRACE GARDUQUE" ,"ERINITA GUILLERMO","CELIA GUILLERMO","ANA CASTRO" , "JOCELYN GARDUQUE" , "KYLA DOMINGO" ,"GINA DOMINGO", "ROSITA RIVERA", "GEA RIVERA" , "ROCHELLE PASCUA", " JEAN BETE"])
  ;
  fillList("shots", ["RICO GARRA", "VALEEN BALIBAT", "LOVI CANDELARIO" , "DHEYZEL ABEJUELA", "ANGELICA NAVARRETE", "AARON CASTRO", "MARRIZ BALAOING", "ALEX CALITISIN", "JENNIFER NER", "SARAH GALLARDO", "RAE VILLEGAS", "MATT BEDANIA", "XYRUS JOLO" , "REYNHALYN ESPINAS", "CHENA CASIÑO", "JOCELL RIVELA", "MARY JANE DUQUE", "JOHN RUSSEL AVILA"]);
  fillList("roses",[ "ERIC MACALALAG" ,
  "MARC ERICK MACALALAG" ,
  "CEDRIC MACALALAG" ,
   "MARIO GUILLERMO JR"
  , "MARBHE GUILLERMO" ,
  "KRISH ANGELO GUILLERMO" ,
  "SEAN MARIO GUILLERMO" ,
  "MARBHE ADRIELLE GUILLERMO",
  "LOUIS MAVERICK GUILLERMO",
  "JOHN ANDREI GUILLERMO",
  "MARKY YOHAN LALAGUNA",
  "JHYLAN VER MACALALAG",
  "RJ VAL GARDUQUE",
  "MJ VAL GARDUQUE",
  "CHRISTIAN GUILLERMO",
  "RICO GARRA",
  "ANTERO VAN BUREN MIGUEL",
 "AJ FERNANDEZ" ]);

  function showPage(index) {
    if (index < 0 || index >= pages.length) return;

    currentPage = index;

    pages.forEach((page, i) => {
      page.classList.toggle("active", i === index);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openInvitation() {
    if (envelope) envelope.classList.add("open");
    if (openBtn) openBtn.style.display = "none";
    if (hint) hint.textContent = "Your invitation is open!";
    showPage(0);
  }

  function changePage(direction) {
    showPage(currentPage + Number(direction));
  }

  function closeGallery() {
    if (!gallery) return;
    gallery.classList.remove("show");
    gallery.setAttribute("aria-hidden", "true");
  }

  function closePhoto() {
    if (!photoViewer) return;
    photoViewer.classList.remove("show");
    photoViewer.setAttribute("aria-hidden", "true");
  }

  function exitInvitation() {
    if (envelope) envelope.classList.remove("open");
    if (openBtn) openBtn.style.display = "";
    if (hint) hint.textContent = "Tap the button to open your invitation";
    showPage(0);
    closeGallery();
    closePhoto();
  }

  const photoURLs = (["E0.jpg",
  "e2.jpg",
  "e3.jpg",
  "e1.jpg" ,
  "em12.jpg",
  "em13.jpg",
 "A1.jpg", "a2.jpg", "a3.jpg", "a4.jpg", "a5.jpg", "a6.jpg", "a7.jpg", "a8.jpg","ae1.jpg", "ae2.jpg", "ae3.jpg", "ae4.jpg",
 "ae5.jpg", "ae6.jpg", "ae7.jpg"
       ,"E18.jpg",

] );

  function updateLargePhoto() {
    if (!largePhoto) return;

    largePhoto.src = photoURLs[photoIndex];
    largePhoto.alt = `Birthday photo ${photoIndex + 1}`;

    if (photoCounter) {
      photoCounter.textContent =
        `${photoIndex + 1} / ${photoURLs.length}`;
    }
  }

  function showGallery() {
    if (!gallery) return;
    gallery.classList.add("show");
    gallery.setAttribute("aria-hidden", "false");
  }

  function movePhoto(direction) {
    photoIndex =
      (photoIndex + Number(direction) + photoURLs.length) %
      photoURLs.length;
    updateLargePhoto();
  }

  if (openBtn) {
    openBtn.addEventListener("click", function (event) {
      event.preventDefault();
      openInvitation();
    });
  }

  if (photoGrid) {
    photoURLs.forEach((url, index) => {
      const img = document.createElement("img");
      img.src = url;
      img.alt = `Birthday photo ${index + 1}`;
      img.loading = "lazy";

      img.addEventListener("click", function () {
        photoIndex = index;
        updateLargePhoto();

        if (photoViewer) {
          photoViewer.classList.add("show");
          photoViewer.setAttribute("aria-hidden", "false");
        }
      });

      photoGrid.appendChild(img);
    });
  }

  if (gallery) {
    gallery.addEventListener("click", event => {
      if (event.target === gallery) closeGallery();
    });
  }

  if (photoViewer) {
    photoViewer.addEventListener("click", event => {
      if (event.target === photoViewer) closePhoto();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeGallery();
      closePhoto();
    }

    if (photoViewer && photoViewer.classList.contains("show")) {
      if (event.key === "ArrowRight") movePhoto(1);
      if (event.key === "ArrowLeft") movePhoto(-1);
    }
  });

  window.openInvitation = openInvitation;
  window.changePage = changePage;
  window.exitInvitation = exitInvitation;
  window.showPage = showPage;
  window.showGallery = showGallery;
  window.closeGallery = closeGallery;
  window.movePhoto = movePhoto;
  window.closePhoto = closePhoto;
});


const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (bgMusic && musicBtn) {
    musicBtn.addEventListener("click", async () => {
        try {
            if (bgMusic.paused) {
                await bgMusic.play();
                musicBtn.textContent = "♫ Pause Music";
            } else {
                bgMusic.pause();
                musicBtn.textContent = "♫ Play Music";
            }
        } catch (error) {
            console.error("Music error:", error);
            alert("Music could not play. Please check your music file.");
        }
    });
}
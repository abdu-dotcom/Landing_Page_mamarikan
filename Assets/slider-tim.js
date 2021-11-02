var allSectionTim = document.querySelectorAll('#tim');
var containerSectionTim = document.querySelector('.container-tim aside');
var prevBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');
var posisi = 0;

// kode untuuk menjarakan posisi setiap section left 100%
allSectionTim.forEach((sectionTim, i) => {
    sectionTim.style.left = i * 100 +'%';
});
// tombol lanjut slide
nextBtn.addEventListener("click", function() {
    posisi++;
    kePosisi(posisi);
});
// tombol balik slide
prevBtn.addEventListener("click", function() {
    posisi--;
    kePosisi(posisi);
});
// Fungsi pindah slide
function kePosisi(posisi){
    containerSectionTim.style.transform = "translateX(-"+allSectionTim[0].clientWidth * posisi +"px)";
    if (posisi === 0) {
        prevBtn.style.display = "none";
    }else if(posisi === 2){
        nextBtn.style.display = "none";
    }else{
        nextBtn.style.display = "block";
        prevBtn.style.display = "block";
    }
}
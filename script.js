document.querySelectorAll('nav ul li a'). forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();


        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        })
    })
})


window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.95)";
    } else{
        header.style.background ="rgba(17,17,17,0.9)";
    }
});


const sections = document.querySelectorAll("section");
window.addEventListener("scroll",() =>{
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        
        if (top > offset) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";

        }
    });
});

function kirimWA () {
    const nama = document.getElementById('namaUser').value;
    const pesan = document.getElementById('pesanUser').value;
    const nomroWA = "6283895486275";
    if (nama === "" || pesan === "") {
        alert("isi nama dan pesan dulu yaa");
        return;
    }
    const teks = `Halo Samudera, saya ${nama}. ${pesan}`;
    const link = `https://wa.me/${nomroWA}?text=${encodeURIComponent(teks)}`;

    window.open(link, `_blank`);

}
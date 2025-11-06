const albums = {
  lany: {
    title: "LANY (2017)",
    desc: "Debut album LANY berisi hits seperti 'ILYSB' dan 'Super Far'.",
  },
  malibu: {
    title: "Malibu Nights (2018)",
    desc: "Album penuh emosi pasca heartbreak dengan lagu seperti 'Thru These Tears'.",
  },
  mamasboy: {
    title: "Mama’s Boy (2020)",
    desc: "Kembali ke akar, dengan lagu seperti 'Good Guys' dan 'Cowboy in LA'.",
  },
  ggbb: {
    title: "gg bb xx (2021)",
    desc: "Era baru penuh warna dan eksplorasi synth-pop modern.",
  },
  blur: {
    title: "A Beautiful Blur (2023)",
    desc: "Refleksi penuh perasaan, lembut, dan introspektif.",
  },
  soft: {
    title: "Soft (2024)",
    desc: "Eksperimen sonik terbaru — hangat, dreamy, dan jujur.",
  }
};

const modal = document.getElementById('albumModal');
const modalDetails = document.getElementById('modalDetails');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.album-card').forEach(card => {
  card.addEventListener('click', () => {
    const data = albums[card.dataset.album];
    modalDetails.innerHTML = `<h2>${data.title}</h2><p>${data.desc}</p>`;
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if (e.target == modal) modal.style.display = 'none'; });
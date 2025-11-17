let images = document.getElementsByClassName('container_img');
let nbrImages = images.length;
let modal = document.getElementById('modal');
let modalImg = document.getElementById('modal-img');
let etape = 0;

function showModal(index) {
    modal.style.display = 'flex';
    modalImg.src = images[index].src;
    etape = index;
}

function closeModal() { modal.style.display = 'none'; }
function suivantImage() { etape++; if (etape >= nbrImages) etape = 0; modalImg.src = images[etape].src; }
function precedentImage() { etape--; if (etape < 0) etape = nbrImages - 1; modalImg.src = images[etape].src; }

for (let i = 0; i < nbrImages; i++) {
    images[i].addEventListener("click", function () { showModal(i); });
}

document.querySelector('.close').addEventListener('click', closeModal);
document.querySelector('.suivant').addEventListener('click', suivantImage);
document.querySelector('.precedent').addEventListener('click', precedentImage);



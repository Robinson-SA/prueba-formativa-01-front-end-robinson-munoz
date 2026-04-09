const catalogRoot = document.querySelector('.catalogo-grid');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const movieBatches = [
    [
        {
            title: 'La noche interstellar',
            description: 'Un viaje espacial único con efectos visuales y emoción.',
            image: 'Imagenes/OIP.png',
            alt: 'Póster de La noche interstellar'
        },
        {
            title: 'Caminos del destino',
            description: 'Historias entrelazadas en el corazón de una ciudad vibrante.',
            image: 'Imagenes/OIP (1).png',
            alt: 'Póster de Caminos del destino'
        },
        {
            title: 'Ecos del pasado',
            description: 'Un documental íntimo que revela sueños y memorias.',
            image: 'Imagenes/OIP.png',
            alt: 'Póster de Ecos del pasado'
        },
        {
            title: 'Luz de medianoche',
            description: 'Una historia de esperanza y amistad en tiempos difíciles.',
            image: 'Imagenes/OIP (1).png',
            alt: 'Póster de Luz de medianoche'
        }
    ],
    [
        {
            title: 'Horizontes rojos',
            description: 'Aventura épica con paisajes impresionantes y un final inesperado.',
            image: 'Imagenes/OIP (1).png',
            alt: 'Póster de Horizontes rojos'
        },
        {
            title: 'Sueños eléctricos',
            description: 'Una película de ciencia ficción con ritmo y estilo.',
            image: 'Imagenes/OIP.png',
            alt: 'Póster de Sueños eléctricos'
        },
        {
            title: 'Voces anónimas',
            description: 'Relatos conmovedores sobre vidas que inspiran.',
            image: 'Imagenes/OIP (1).png',
            alt: 'Póster de Voces anónimas'
        },
        {
            title: 'Cierre de temporada',
            description: 'Una celebración del cine con emociones para todos.',
            image: 'Imagenes/OIP.png',
            alt: 'Póster de Cierre de temporada'
        }
    ]
];

let currentBatch = 0;

function renderCatalog(items) {
    catalogRoot.innerHTML = items.map(item => `
        <div class="pelicula">
            <img src="${item.image}" alt="${item.alt}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `).join('');
}

function updateCatalog() {
    currentBatch = (currentBatch + 1) % movieBatches.length;
    renderCatalog(movieBatches[currentBatch]);
}

function toggleTheme() {
    const isLight = body.classList.toggle('light-mode');
    themeToggle.textContent = isLight ? 'Modo Oscuro' : 'Modo Claro';
    themeToggle.setAttribute('aria-pressed', String(isLight));
}

themeToggle.addEventListener('click', toggleTheme);
renderCatalog(movieBatches[currentBatch]);
setInterval(updateCatalog, 12000);
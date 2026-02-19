function openModal(category, title, date, content) {
    const modal = document.getElementById('blog-modal');
    const panel = document.getElementById('modal-panel');
    const overlay = document.getElementById('modal-overlay');

    // 1. Inyectar datos en los IDs correspondientes
    if (document.getElementById('modal-category')) {
        document.getElementById('modal-category').innerText = category;
    }
    if (document.getElementById('modal-title')) {
        document.getElementById('modal-title').innerText = title;
    }
    // Inyectamos la fecha (asegúrate de tener este ID en el HTML del modal)
    if (document.getElementById('modal-date')) {
        document.getElementById('modal-date').innerText = date;
    }
    if (document.getElementById('modal-content')) {
        document.getElementById('modal-content').innerHTML = content;
    }

    // 2. Mostrar contenedor base
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    // 3. Animación suave de entrada
    setTimeout(() => {
        overlay.classList.add('opacity-100');
        panel.classList.add('opacity-100', 'scale-100');
        panel.classList.remove('scale-[0.98]');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('blog-modal');
    const panel = document.getElementById('modal-panel');
    const overlay = document.getElementById('modal-overlay');

    // Revertir animaciones
    overlay.classList.remove('opacity-100');
    panel.classList.remove('opacity-100', 'scale-100');
    panel.classList.add('scale-[0.98]');

    // Ocultar después de la transición (700ms coincide con tu duration-700)
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }, 700);
}

// Opcional: Cerrar con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
});
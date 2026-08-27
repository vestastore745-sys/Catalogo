// Base de datos de productos (puedes añadir los que quieras)
const productos = [
  {
    id: 1,
    nombre: "Pasamontañas",
    categoria: "Accesorios",
    precio: 4,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf2s21JD4_ljem5gki8kEpmo6CNKot-DRMHLxw0gd6qw&s=10"
  },
  {
    id: 2,
    nombre: "Pomada para Peinar",
    categoria: "Accesorios",
    precio: 15,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsqGdAqqNoqehdAIvWeQfBXC36n4PEAofQzDTNCfNvA&s=10"
  }
];

const telefonoWhatsApp = "584125866999";

function mostrarProductos(lista) {
  const contenedor = document.getElementById('gridProductos');
  contenedor.innerHTML = '';

  lista.forEach(p => {
    const mensaje = encodeURIComponent(`Hola! Me interesa pedir el producto: ${p.nombre} ($${p.precio})`);
    const linkWhatsApp = `https://wa.me/${telefonoWhatsApp}?text=${mensaje}`;

    contenedor.innerHTML += `
      <div class="tarjeta-producto" style="border: 1px solid #334155; border-radius: 10px; padding: 15px; background-color: #1e293b; text-align: center; margin-bottom: 10px;">
        <img src="${p.imagen}" alt="${p.nombre}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px;">
        <h3 style="color: #ffffff; margin: 10px 0;">${p.nombre}</h3>
        <p class="precio" style="color: #10b981; font-weight: bold; font-size: 1.2rem;">$${p.precio}</p>
        <a href="${linkWhatsApp}" target="_blank" class="btn-whatsapp" style="display: inline-block; background-color: #25D366; color: white; text-decoration: none; padding: 8px 12px; border-radius: 6px; font-weight: bold;">Pedir por WhatsApp</a>
      </div>
    `;
  });
}

mostrarProductos(productos);
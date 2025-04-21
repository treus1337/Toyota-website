const container = document.getElementById("carGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");


const cars = [
    {
      name: "2022 Prius Prime",
      usd: 28880,
      pen: 108300,
      image: "imagenes/01.png",
      tag: "Oferta",
      tagColor: "red",
      category : "Coches",
    },
    {
      name: "2022 Prius",
      usd: 26285,
      pen: 98568.75,
      image: "imagenes/02.png",
      tag: "Oferta",
      tagColor: "red",
      category : "Coches",
    },
    {
      name: "Toyota Corolla 2022",
      usd: 25230,
      pen: 94612.5,
      image: "imagenes/03.png",
      tag: "Oferta",
      tagColor: "red",
      category : "Compacto",
    },
    {
      name: "2022 GR Supra",
      usd: 27270,
      pen: 102262.5,
      image: "imagenes/04.png",
      tag: "Oferta",
      tagColor: "red",
      category : "Compacto",
    },
    {
      name: "Toyota Corolla Cross",
      usd: 26140,
      pen: 98025,
      image: "imagenes/05.png",
      tag: "Oferta",
      tagColor: "red",      
      category : "Compacto",
    },
    {
      name: "Toyota Corolla 2025",
      usd: 26170,
      pen: 98137.5,
      image: "imagenes/06.png",
      tag: "Oferta",
      tagColor: "red",
      category : "Compacto",
    },
    {
      name: "Hilux Cabine Simples 2025",
      usd: 20160,
      pen: 75600,
      image: "imagenes/07.png",
      tag: "Nuevo",
      tagColor: "red",
      category : "Compacto",
    },
    {
      name: "2022 Model X",
      usd: 27200,
      pen: 102000,
      image: "imagenes/08.png",
      tag: "Hibrido",
      tagColor: "blue",
      category : "Coches",
    },
    {
      name: "Toyota Corolla Cross",
      usd: 26140,
      pen: 98025,
      image: "imagenes/09.png",
      
      category : "Compacto",
    },
    {
      name: "Toyota Corolla Cross GR-Sport 2025",
      usd: 34770,
      pen: 130387.5,
      image: "imagenes/012.png",
      tag: "Nuevo",
      tagColor: "red",
      category : "Camioneta",
    },
    {
      name: "Corolla Cross 2026",
      usd: 31000,
      pen: 116250,
      image: "imagenes/013.png",
      tag: "Nuevo",
      tagColor: "red",
      category : "Camioneta",
    },
    {
      name: "Toyota Fortuner 2023",
      usd: 42930,
      pen: 160987.5,
      image: "imagenes/014.png",
      category : "Camioneta",
    },
    {
      name: "Toyota Corolla 2023",
      usd: 27940,
      pen: 104775,
      image: "imagenes/015.png",
      
      category : "Coches",
    },
    {
      name: "Toyota Corolla Cross GR-Sport",
      usd: 32490,
      pen: 121837.5,
      image: "imagenes/016.png",
      tag: "Nuevo",
      tagColor: "red",
      category : "Camioneta",
    },
    {
      name: "Toyota Corolla Cross",
      usd: 26140,
      pen: 98025,
      image: "imagenes/101.png",
      
      category : "Coches",
    }
  ];     



// FUNCION PARA RENDERIZAR LAS TARJETAS
function renderCars(carsToShow) {
  console.log("Renderizando", carsToShow.length, "autos");
  container.innerHTML = "";

  carsToShow.forEach(car => {
    const card = document.createElement("div");
    card.className = "card";

    if (car.tag) {
      const label = document.createElement("div");
      label.className = `label ${car.tagColor}`;
      label.textContent = car.tag;
      card.appendChild(label);
    }

    const image = document.createElement("img");
    image.src = car.image;
    image.alt = car.name;
    card.appendChild(image);

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = car.name;
    card.appendChild(title);

    const price = document.createElement("div");
    price.className = "price";
    price.innerHTML = `Precio sugerido<br>$${car.usd.toLocaleString()} o<br>S/${car.pen.toLocaleString()}`;
    card.appendChild(price);

    container.appendChild(card);
  });
}

// MUESTRA TODOS LOS AUTOS AL INICIO
renderCars(cars);

// ESCUCHA EL CAMPO DE BÚSQUEDA
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm)
  );
  renderCars(filteredCars);
});

function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
  
    let filteredCars = cars.filter(car =>
      car.name.toLowerCase().includes(searchTerm)
    );
  
    if (selectedCategory) {
      filteredCars = filteredCars.filter(car => car.category === selectedCategory);
    }
  
    renderCars(filteredCars);
  }
  
  // Eventos
  searchInput.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("change", applyFilters);
  
  // Mostrar todos los autos al inicio
  renderCars(cars);

  





    
    

    
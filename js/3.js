function filterCars(type) {
    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      if (type === 'todos') {
        card.style.display = 'flex';
      } else {
        card.style.display = card.classList.contains(type) ? 'flex' : 'none';
      }
    });
  }
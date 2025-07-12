fetch('/api/sweets')
.then(res => res.json())
.then(data => {
  const container = document.getElementById('sweet-list');
  data.forEach(sweet => {
    const div = document.createElement('div');
    div.className = 'sweet-card';
    div.innerHTML = `
      <img src="${sweet.image}" alt="${sweet.name}">
      <h2>${sweet.name}</h2>
      <p>${sweet.price}</p>
      <a class="order-btn" href="https://wa.me/8801725517978?text=আমি অর্ডার করতে চাই ${sweet.name}" target="_blank">অর্ডার</a>
    `;
    container.appendChild(div);
  });
});

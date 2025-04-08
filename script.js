const cats = [

];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('catsContainer');
    
    cats.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${cat.img_link}" alt="${cat.name}">
            <div class="card-body">
                <h3>${cat.name} ${cat.favourite ? '★<span class="favorite"></span>' : ''}</h3>
                <p>Возраст: ${cat.age} год(а)</p>
                <p>Рейтинг: <span class="rate">${cat.rate}/10</span></p>
                <p>${cat.description}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
});

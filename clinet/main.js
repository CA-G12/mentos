const cards = document.querySelector('.cards')
const searchInput = document.querySelector('.searchInput')
fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6d16c97231f4eadcb5ba5ab27aa3338d', createCard)

searchInput.addEventListener('keyup', () => {
  if (!searchInput.value) {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6d16c97231f4eadcb5ba5ab27aa3338d', createCard)

  } else {
    fetch('../movies-names.json?q=' + searchInput.value, createOptions)
    let editTitle = searchInput.value.toLowerCase().split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join('+')
    fetch('https://api.themoviedb.org/3/search/movie?api_key=6d16c97231f4eadcb5ba5ab27aa3338d&query=' + editTitle, createCard)

  }
})




function createCard(data) {
  cards.textContent = ''
  data.results.forEach(e => {
    if (e.poster_path == null) {
      return
    }
    const card = document.createElement('figure')
    card.setAttribute('class', 'card')
    cards.appendChild(card)
    const img = document.createElement('img')
    img.src = `https://image.tmdb.org/t/p/w500//${e.poster_path}`
    card.appendChild(img)
    const info = document.createElement('div')
    card.appendChild(info)
    const title = document.createElement('h3')
    info.setAttribute('class', 'info')
    info.appendChild(title)
    title.textContent = e.title
    const des = document.createElement('p')
    des.textContent = e.overview
    info.appendChild(des)
  });
}


function createOptions(data) {
  const optionsContainer = document.querySelector('.optionsContainer');
  optionsContainer.textContent = '';

  data.forEach(e => {
    const option = document.createElement('h3');
    optionsContainer.appendChild(option);
    option.textContent = e.name;


    option.addEventListener('click', () => {
      optionsContainer.textContent = '';
      let editTitle = e.name.toLowerCase().split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join('+')
      fetch('https://api.themoviedb.org/3/search/movie?api_key=6d16c97231f4eadcb5ba5ab27aa3338d&query=' + editTitle, createCard)
    })
  })

  const body = document.querySelector('body');
  body.addEventListener('click', () => {
    optionsContainer.textContent = '';
  })
}


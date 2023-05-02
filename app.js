const carousel = document.getElementById('carousel')
const rowNext = document.getElementById('idNext')

const list = document.querySelector('ul')
var position = 0
var count = 3
const width = 80


const heroData = async ()=>{
    let indexHero = 1
    const hero = await fetch('https://randomuser.me/api?results=50')

    const {results} = await hero.json()

    carousel.innerHTML = ''

    results.forEach(hero => {
        const li = document.createElement('li')

        li.setAttribute('id', indexHero)

        li.innerHTML = `
            <img src="${hero.picture.large}" alt="${hero.name.first}">
        `

        li.classList.add('carousel-hero')

        carousel.appendChild(li)
        indexHero += 1
    });

    console.log(results)
}

rowNext.onclick = ()=>{
    const listElements = document.querySelectorAll('li')
    
    position = width * count

    if ((listElements.length * width) > position) {
        list.style.marginLeft = -position + 'px'
    
    }

    count += 3
    
    // alert(listElements.length * (width * ))
    // alert(count)
    // position += width * count
    // position = Math.min(position, 0)
    // list.style.marginLeft = position + 'px'
}


heroData()

// https://plnkr.co/edit/3AumgK3YFx3VDqnO?p=preview&preview
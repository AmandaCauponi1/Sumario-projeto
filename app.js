const menu =
[
    {
        'color': 'reaction',
        'class': 'content2',
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
        'color': 'Memory',
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg",
      'class': 'content3',
    // 'color': ,
    },
    {
        'color': 'verbal',
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg",
      'class': 'content4',
    },
    {
        'color': 'visual',
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg",
      'class': 'content5',
    }
  ]

  const boxContent = document.getElementById('section')

  

  window.addEventListener('DOMContentLoaded', function(){
    // alert('ola')
    displayMenuItem(menu)
 
})

function displayMenuItem(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `
        <article class="${item.class}">

        <div>
          <img src="${item.icon}" alt="">
          <p class="${item.color}">${item.category}</p>
        </div>
        <p>${item.score} / 100</p>
      </article>`
    })
    displayMenu = displayMenu.join('')
    console.log(displayMenu)
    boxContent.innerHTML += displayMenu
}
  
document.getElementById('btn').addEventListener('mouseover', () => {
    document.getElementById('btn').style.background = 'hsl(224, 30%, 27%)'
})

document.getElementById('btn').addEventListener('mouseout', () => {
    document.getElementById('btn').style.background = ' linear-gradient(to bottom,  hsl(252, 100%, 67%), hsl(241, 81%, 54%))'
})
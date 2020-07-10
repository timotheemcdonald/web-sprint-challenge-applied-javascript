// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header = document.createElement('header')
    const date = document.createElement('span')
    const hOne = document.createElement('h1')
    const temp = document.createElement('span')

    header.appendChild(date)
    header.appendChild(hOne)
    header.appendChild(temp)

    header.className = 'header'
    date.className = 'date'
    temp.className = 'temp'

    hOne.textContent = 'Lambda Times'
    date.textContent = 'MARCH 28, 2020'
    temp.textContent = '98°'

    return header
}

const headerContainer = document.querySelector('.header-container')
const newHeader = Header()
headerContainer.appendChild(newHeader)
console.log('sanity check')
console.log('newHeader')
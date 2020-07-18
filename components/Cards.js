// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function ArticleMachine(object){
    const card = document.createElement('div')
    const newHeadline = document.createElement('div')
    const author = document.createElement('author')
    const portraitBox = document.createElement('div')
    const portrait = document.createElement('img')
    const by = document.createElement('span')

    card.appendChild(newHeadline)
    card.appendChild(author)
    author.appendChild(portraitBox)
    portraitBox.appendChild(portrait)
    author.appendChild(by)

    card.className = 'card'
    newHeadline.className = 'headline'
    author.className = 'author'
    portraitBox.className = 'img-container'

    newHeadline.textContent = `${object.headline}`
    portrait.src = object.authorPhoto
    by.textContent = `By: ${object.authorName}`

    card.addEventListener('click', event => {
        console.log(newHeadline)
    })

    return card
}

const cardsContainer = document.querySelector('.cards-container')

const articleURL = 'https://lambda-times-backend.herokuapp.com/articles'
axios.get(articleURL)
.then( function (value){
    const bootstrapArticles = value.data.articles.bootstrap
    const javascriptArticles = value.data.articles.javascript
    const nodeArticles = value.data.articles.node
    const jqueryArticles = value.data.articles.jquery
    const technologyArticles = value.data.articles.technology

    console.log(bootstrapArticles)
    bootstrapArticles.forEach(object => {
        const card = ArticleMachine(object)
        cardsContainer.appendChild(card)
        console.log('bootstrap function working')
    })
   
    javascriptArticles.forEach(object => {
        const card = ArticleMachine(object)
        cardsContainer.appendChild(card)
    })

    nodeArticles.forEach(object => {
        const card = ArticleMachine(object)
        cardsContainer.appendChild(card)
    })

    jqueryArticles.forEach(object => {
        const card = ArticleMachine(object)
        cardsContainer.appendChild(card)
    })

    technologyArticles.forEach(object => {
        const card = ArticleMachine(object)
        cardsContainer.appendChild(card)
    })
   
    console.log('article success start')
})
.catch(function (error){
    console.log('article error')
})
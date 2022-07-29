main ()


async function main() { 
const articles = await getArticles ()
for (article of articles) { 
displayArticle (article)
}
}
 

function getArticles() {
    fetch("http://localhost:3000/api/products")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(articles) {
        console.log (articles);
    })
    .catch(function(err) {
      // Une erreur est survenue
    })
    

 }

// AFFICHAGE DES PRODUITS DANS LA PAGE D'ACCUEIL

function displayArticle (article) {

document.getElementById("items").innerHTML +=  `

<a href="./product.html?id=${article._id}">
<article>
    <img src="${article.imageURL}" alt="${article.altTxT}">
    <h3 class="productName">${article.name}</h3>
    <p class="${article.description}</p>
</article>
</a>
`
}

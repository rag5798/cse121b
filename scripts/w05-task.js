/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];
/* async displayTemples Function */

const displayTemples = async (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl)
        img.setAttribute('alt', temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    const data = await response.json();
    templeList = data;
    console.log(templeList);
    displayTemples(templeList);
}

/* reset Function */

const reset = () => {
  templesElement.innerHTML = '';
}

/* filterTemples Function */
const filterTemples = async (temples) => {
    reset();
    const filter = document.querySelector('#filtered').value;
    console.log(filter);
    switch (filter) {
      case 'utah':
          let filteredData = temples.filter(item => item.location.toLowerCase().includes('utah'));
          displayTemples(filteredData);
          break;
      case 'notutah':
          let notUtah = temples.filter(item => !item.location.toLowerCase().includes('utah'));
          displayTemples(notUtah);
          break;
      case 'older':
          let olderTemples = temples.filter(item => {
              const dedicatedDate = new Date(item.dedicated);
              const cutoffDate = new Date(1950, 0, 1);
              return dedicatedDate < cutoffDate;
          });
          displayTemples(olderTemples);
          break;
      case 'all':
        displayTemples(temples);
        break;
    }
}
getTemples();
//reset();
/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {filterTemples(templeList)})
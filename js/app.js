'use strict';

/*

shop{
  name:
  custperHour: custperhour(){

  }
  ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm']

}

*/


// let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];


let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  hours: ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'],
  generateCookies: function() {
    console.log(this.name);
    this.cookiesBought = [];
    for (let i = 0; i < this.hours.length; i++) {
      let customersPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      let cookiesPerHour = customersPerHour * this.avgCookieBought;
      this.cookiesBought.push(cookiesPerHour);
      console.log(`${this.hours[i]}: ${customersPerHour} customers`);
    }
  },
};
// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   hours: ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'],
//   cookiesBought: [],
//   generateCookies: function() {
//     console.log(this.name);
//     this.cookiesBought = randomHour(this.minCust,this.maxCust);
//     console.log(this.cookiesBought);
//   }
// }

// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   hours: ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'],
//   cookiesBought: [],
//   generateCookies: function() {
//     console.log(this.name);
//     this.cookiesBought = randomHour(this.minCust,this.maxCust);
//     console.log(this.cookiesBought);
//   }
// }

// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   hours: ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'],
//   cookiesBought: [],
//   generateCookies: function() {
//     console.log(this.name);
//     this.cookiesBought = randomHour(this.minCust,this.maxCust);
//     console.log(this.cookiesBought);
//   }
// }






seattle.generateCookies();

console.log(seattle);


const parentElement = document.getElementById('storeProfiles');

const article = document.createElement('article');
parentElement.appendChild(article);

const h2 = document.createElement('h2');
h2.textContent = seattle.name;
article.appendChild(h2);

const p = document.createElement('p');
p.textContent = `Seattle is killing it, and sold ${seattle.customers} cookies sold`;
article.appendChild(p);

const ul = document.createElement('ul');
article.appendChild(ul);

for (let i = 0; i < seattle.hours.length; i++) {
  const li = document.createElement('li');
  li.textContent = `${seattle.hours[i]}: text here`;
  ul.appendChild(li);
}

// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2
//   cookiesBought:
//   generateCookies: function(){
//     //calculation
//   }

// }

// let dubai = {
//   name: 'Dubai'
//   minCust:
//   maxCust:
//   avgCookieBought:
//   cookiesBought:
//   generateCookies: function(){
//     //calculation
//   }
// }

// let paris = {
//   name: 'Paris'
//   minCust:
//   maxCust:
//   avgCookieBought:
//   cookiesBought:
//   generateCookies: function(){
//     //calculation
//   }
// }

// let lima = {
//   name: 'Lima'
//   minCust:
//   maxCust:
//   avgCookieBought:
//   cookiesBought:
//   generateCookies: function(){
//     //calculation
//   }
// }


// ***GLOBALS

// let storeSection = document.getElementById('')


// // from mdx
// return Math.floor(Math.random() * (max - min + 1) + min);
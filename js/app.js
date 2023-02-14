'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesSoldPerHour: [],
  customersForHour: [],
  hours: hours,
  dailySoldTotal: 0,
  generateCookies: function() {
    this.cookiesSoldPerHour = [];
    this.customersForHour = [];
    this.dailySoldTotal = 0;
    for (let i = 0; i < this.hours.length; i++) {
      //get random number of customers per hour between the minCust maxCust
      let customersForHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      console.log(customersForHour);
      //then get random cookies for hour which is avgCookieBought * customersForHour
      let cookiesForHour = Math.round(customersForHour * this.avgCookieBought);
      //push cookies sold for hour
      this.cookiesSoldPerHour.push(cookiesForHour);
      //push customers for hour not really needed
      this.customersForHour.push(customersForHour);
      //add daily sold total
      this.dailySoldTotal += cookiesForHour;
    }
  },
};

seattle.generateCookies();

console.log(seattle);

const parentElement = document.getElementById('CookieStand');

const article = document.createElement('article');
parentElement.appendChild(article);

const h2 = document.createElement('h2');
h2.textContent = seattle.name;
article.appendChild(h2);

const p = document.createElement('p');
p.textContent = `Seattle is killing it, and sold ${seattle.dailySoldTotal} cookies sold`;
article.appendChild(p);

const ul = document.createElement('ul');
article.appendChild(ul);

for (let i = 0; i < seattle.hours.length; i++) {
  const li = document.createElement('li');
  li.textContent = `${seattle.hours[i]}: ${seattle.cookiesSoldPerHour[i]} cookies`;
  ul.appendChild(li);
}


const li = document.createElement('li');
li.textContent = `Total cookies: ${seattle.dailySoldTotal} cookies`;
ul.appendChild(li);

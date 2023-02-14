









'use strict';

let parentElement = document.getElementById('CookieStand');

let storeTable = []; // store all of my kitten objects


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function Store(name, minCust, maxCust, avgCookiesBought, hours, dailySoldTotal) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesBought = avgCookiesBought;
  this.hours = hours;
  this.dailySoldTotal = dailySoldTotal;
  this.cookiesSoldPerHour = [];
  this.customersForHour = [];
}

Store.prototype.generateCookies = function() {
  this.cookiesSoldPerHour = [];
  this.customersForHour = [];
  this.dailySoldTotal = 0;
  for (let i = 0; i < this.hours.length; i++) {
    //get random number of customers per hour between the minCust maxCust
    let customersForHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    console.log(customersForHour);
    //then get random cookies for hour which is avgCookieBought * customersForHour
    let cookiesForHour = Math.round(customersForHour * this.avgCookiesBought);
    //push cookies sold for hour
    this.cookiesSoldPerHour.push(cookiesForHour);
    //push customers for hour not really needed
    this.customersForHour.push(customersForHour);
    //add daily sold total
    this.dailySoldTotal += cookiesForHour;
  }
};


Store.prototype.render = function(){
  let article = document.createElement('article');
  parentElement.appendChild(article);

  let h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);

  let ul = document.createElement('ul');
  article.appendChild(ul);

  for (let i = 0; i < this.hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${this.hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    ul.appendChild(li);
  }

  let p = document.createElement('p');
  p.textContent = `${this.name} is killing it, and sold ${this.dailySoldTotal} cookies sold`;
  article.appendChild(p);

  let table = document.createElement('table');
  article.appendChild(table);

  let row1 = document.createElement('tr');
  table.appendChild(row1);

  let th1 = document.createElement('th');
  th1.textContent = 'Hours';
  row1.appendChild(th1);

  let th2 = document.createElement('th');
  th2.textContent = 'Maximum Customers';
  row1.appendChild(th2);

  let th3 = document.createElement('th');
  th3.textContent = 'Average Customers';
  row1.appendChild(th3);

  let row2 = document.createElement('tr');
  table.appendChild(row2);

  let td1 = document.createElement('td');
  td1.textContent = this.hours;
  row2.appendChild(td1);

  let td2 = document.createElement('td');
  td2.textContent = this.maxCust;
  row2.appendChild(td2);

  let td3 = document.createElement('td');
  td3.textContent = this.avgCookiesBought;
  row2.appendChild(td3);
};


let seattle = new Store('Seattle', 23, 65, 6.3, hours, 0);

storeTable.push(seattle);

console.log(storeTable);

function renderAll(){
  for(let i = 0; i < storeTable.length; i++){
    storeTable[i].generateCookies();
    storeTable[i].render();
  }
}

renderAll();


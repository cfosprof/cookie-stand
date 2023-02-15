'use strict';

let parentElement = document.getElementById('CookieStand');

let storeTable = []; // store all of my store objects


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//constructor function use new with it later to create new store object
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

//object method
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

//creates the html table element and appends it to the article element which has been appended to the parent element
Store.prototype.render = function(){
  let article = document.createElement('article');
  parentElement.appendChild(article);

  //create row for store name append it to table
  let h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);

  //creates an unordered list for the to
  let ul = document.createElement('ul');
  article.appendChild(ul);

  //creating table
  let table = document.createElement('table');
  article.appendChild(table);

  //create header row--rows are horizontal
  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  //creates table header cell which is our times here
  let headerCell1 = document.createElement('th');
  headerCell1.textContent = 'Time';
  headerRow.appendChild(headerCell1);

  //creating a column for each time slot
  for (let i = 0; i < this.hours.length; i++) {
    let headerCell2 = document.createElement('th');
    headerCell2.textContent = this.hours[i];
    headerRow.appendChild(headerCell2);
  }

  //creating data row for citys row
  let dataRow = document.createElement('tr');
  table.appendChild(dataRow);

  //creates table cell for this.name
  let dataCell1 = document.createElement('td');
  dataCell1.textContent = this.name;
  dataRow.appendChild(dataCell1);

  //takes each time slot and fills its td city
  for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
    let dataCell2 = document.createElement('td');
    dataCell2.textContent = this.cookiesSoldPerHour[i];
    dataRow.appendChild(dataCell2);
  }
};

//constructing new object
let seattle = new Store('Seattle', 23, 65, 6.3, hours, 0);

let tokyo = new Store('Tokyo', 3, 24, 1.2, hours, 0);

let dubai = new Store('Dubai', 11, 38, 3.7, hours, 0);

let paris = new Store('Paris', 20, 38, 2.3, hours, 0);

let lima = new Store('Lima', 2, 16, 4.6, hours, 0);


//pushing stores into our storeTable
storeTable.push(seattle, tokyo, dubai, paris, lima);

console.log(storeTable);

function renderAll() {
  //appends table to parent
  let table = document.createElement('table');
  parentElement.appendChild(table);

  //create and append new header table row element
  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);
  
  //new header cell element for city
  let headerCell1 = document.createElement('th');
  headerCell1.textContent = 'City';
  headerRow.appendChild(headerCell1);
  //this is where we iterate the hours array and append them along city
  for (let i = 0; i < hours.length; i++) {
    let headerCell2 = document.createElement('th');
    headerCell2.textContent = hours[i];
    headerRow.appendChild(headerCell2);
  }
  //generate cookies for each hour for each store in the store table and data rows for the data
  for (let i = 0; i < storeTable.length; i++) {
    storeTable[i].generateCookies();
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    let dataCell1 = document.createElement('td');
    dataCell1.textContent = storeTable[i].name;
    dataRow.appendChild(dataCell1);

    for (let j = 0; j < storeTable[i].cookiesSoldPerHour.length; j++) {
      let dataCell2 = document.createElement('td');
      dataCell2.textContent = storeTable[i].cookiesSoldPerHour[j];
      dataRow.appendChild(dataCell2);
    }
  }
}


renderAll();

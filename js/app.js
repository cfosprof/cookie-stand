// Use strict mode for better error handling
'use strict';

// Get the parent element from the DOM
let parentElement = document.getElementById('CookieStand');

let myForm = document.getElementById('store-form');

// Store all of the store objects in an array
let storeTable = [];

// Define the hours of operation as an array
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Constructor function to create new store objects
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

// Generate the number of cookies sold for each hour of the day
Store.prototype.generateCookies = function() {
  this.cookiesSoldPerHour = [];
  this.customersForHour = [];
  this.dailySoldTotal = 0;
  for (let i = 0; i < this.hours.length; i++) {
    // Generate a random number of customers for the hour
    let customersForHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    // Calculate the number of cookies sold for the hour based on the average number of cookies bought and the number of customers
    let cookiesForHour = Math.round(customersForHour * this.avgCookiesBought);
    // Add the number of cookies sold for the hour to the cookiesSoldPerHour array
    this.cookiesSoldPerHour.push(cookiesForHour);
    // Add the number of customers for the hour to the customersForHour array (not really needed)
    this.customersForHour.push(customersForHour);
    // Update the daily total number of cookies sold
    this.dailySoldTotal += cookiesForHour;
  }
};

// Calculate the hourly sales totals for all stores
Store.prototype.hourlyTotals = function() {
  let hourlyTotals = new Array(this.hours.length).fill(0);
  for (let i = 0; i < storeTable.length; i++) {
    let store = storeTable[i];
    for (let j = 0; j < store.hours.length; j++) {
      // Add the number of cookies sold for the hour to the hourlyTotals array for all stores
      hourlyTotals[j] += store.cookiesSoldPerHour[j];
    }
  }
  // Return the hourlyTotals array
  return hourlyTotals;
};

// Render the sales data as an HTML table for a single store
Store.prototype.render = function(){
  // Create a new article element and append it to the parent element
  let article = document.createElement('article');
  parentElement.appendChild(article);

  // Create a new header element for the store name and append it to the article element
  let h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);

  // Create an unordered list for the store data and append it to the article element
  let ul = document.createElement('ul');
  article.appendChild(ul);

  // Create a new table element for the sales data and append it to the article element
  let table = document.createElement('table');
  article.appendChild(table);

  // Create a new table row element for the header row and append it to the table element
  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  // Create a new table header cell element for the "Time" header and append it to the header row
  let headerCell1 = document.createElement('th');
  headerCell1.textContent = 'Time';
  headerRow.appendChild(headerCell1);

  // Create a new table header cell element for each hour and append it to the header row
  for (let i = 0; i < this.hours.length; i++) {
    let headerCell2 = document.createElement('th');
    headerCell2.textContent = this.hours[i];
    headerRow.appendChild(headerCell2);
  }

  // Create a new data row element for the store and append it to the table element
  let dataRow = document.createElement('tr');
  table.appendChild(dataRow);

  // Create a new table cell element for the store name and append it to the data row
  let dataCell1 = document.createElement('td');
  dataCell1.textContent = this.name;
  dataRow.appendChild(dataCell1);

  // Create a new table cell element for each hour and append it to the data row
  for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
    let dataCell2 = document.createElement('td');
    dataCell2.textContent = this.cookiesSoldPerHour[i];
    dataRow.appendChild(dataCell2);
  }
};

// Construct a table to display the sales data for all stores
function renderAll() {
  // Create a new table element for the sales data and append it to the parent element
  let table = document.createElement('table');
  parentElement.appendChild(table);

  // Create a new header row element for the table and append it to the table element
  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  // Create a new table header cell element for the "City" header and append it to the header row
  let headerCell1 = document.createElement('th');
  headerCell1.textContent = 'City';
  headerRow.appendChild(headerCell1);

  // Create a new table header cell element for each hour and append it to the header row
  for (let i = 0; i < hours.length; i++) {
    let headerCell2 = document.createElement('th');
    headerCell2.textContent = hours[i];
    headerRow.appendChild(headerCell2);
  }

  // Generate the number of cookies sold for each hour of the day and create a data row for each store
  for (let i = 0; i < storeTable.length; i++) {
    storeTable[i].generateCookies();
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    // Create a new table cell element for the store name and append it to the data row
    let dataCell1 = document.createElement('td');
    dataCell1.textContent = storeTable[i].name;
    dataRow.appendChild(dataCell1);

    // Create a new table cell element for each hour and append it to the data row
    for (let j = 0; j < storeTable[i].cookiesSoldPerHour.length; j++) {
      let dataCell2 = document.createElement('td');
      dataCell2.textContent = storeTable[i].cookiesSoldPerHour[j];
      dataRow.appendChild(dataCell2);
    }

    // Create a new table cell element for the daily total and append it to the data row
    let dataCell3 = document.createElement('td');
    dataCell3.textContent = storeTable[i].dailySoldTotal;
    dataRow.appendChild(dataCell3);
  }

  // Create a new table header cell element for the "Daily Total" header and append it to the header row
  let headerCell3 = document.createElement('th');
  headerCell3.textContent = 'Daily Total';
  headerRow.appendChild(headerCell3);

  // Create a new table row element for the footer row and append it to the table element
  let footerRow = document.createElement('tr');
  table.appendChild(footerRow);

  // Create a new table header cell element for the "Company Wide" header and append it to the footer row
  let footerCell1 = document.createElement('th');
  footerCell1.textContent = 'Company Wide';
  footerRow.appendChild(footerCell1);

  // Calculate the hourly sales totals for all stores and display the data in the footer row
  let hourlyTotals = storeTable[0].hourlyTotals();
  let dailyTotal = 0;
  for (let i = 0; i < hourlyTotals.length; i++) {
    let footerCell2 = document.createElement('th');
    footerCell2.textContent = hourlyTotals[i];
    footerRow.appendChild(footerCell2);
    dailyTotal += hourlyTotals[i];
  }

  // Create a new table header cell element for the daily total and append it to the footer row
  let footerCell3 = document.createElement('th');
  footerCell3.textContent = dailyTotal;
  footerRow.appendChild(footerCell3);
}

function handleFormSubmit(event){
  event.preventDefault();

  let storeName = event.target.storeName.value;
  let maxCustomers = event.target.maxCustomers.value;
  let minCustomers = event.target.minCustomers.value;
  let avgCookiesPerCustomer = event.target.avgCookiesPerCustomer.value;
  let newStore = new Store(storeName, minCustomers, maxCustomers, avgCookiesPerCustomer, hours, 0);

  // Add the new store to the storeTable array
  storeTable.push(newStore);

  // Remove the existing table and render the sales data as an HTML table for all stores
  parentElement.innerHTML = '';
  renderAll();

  myForm.reset();
}


// Create new store objects for Seattle, Tokyo, Dubai, Paris, and Lima
let seattle = new Store('Seattle', 23, 65, 6.3, hours, 0);
let tokyo = new Store('Tokyo', 3, 24, 1.2, hours, 0);
let dubai = new Store('Dubai', 11, 38, 3.7, hours, 0);
let paris = new Store('Paris', 20, 38, 2.3, hours, 0);
let lima = new Store('Lima', 2, 16, 4.6, hours, 0);

// Add the new store objects to the storeTable array
storeTable.push(seattle, tokyo, dubai, paris, lima);

// Render the sales data as an HTML table for all stores
renderAll();

myForm.addEventListener('submit', handleFormSubmit);

'use strict';
var allhours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'
];
var storeArr = [];

//these arent stored in a variable because they are pushed and stored into storeArr.
new CookieStore('1st and Pike', allhours, 23, 54, 6.3).calculateSales();
new CookieStore('SeaTac Airport', allhours, 3, 24, 1.2).calculateSales();
new CookieStore('Seattle Center', allhours, 11, 38, 3.7).calculateSales();
new CookieStore('Capitol Hill', allhours, 20, 38, 2.3).calculateSales();
new CookieStore('Alki', allhours, 2, 16, 4.6).calculateSales();

renderStores(storeArr);

//constructor for the cookie stores.
function CookieStore(name, hours, minCustomers, maxCustomers, avgSales) {
  this.name = name;
  this.hours = hours;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSales = avgSales;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
  this.calculateCustomers = function() {
    for (var i = 0; i < this.hours.length; i++) {
      var rand = customers(this.minCustomers, this.maxCustomers);
      this.customersPerHour.push(rand);
    }
  };
  this.calculateSales = function() {
    this.calculateCustomers();
    for (var numCustomers of this.customersPerHour) {
      var cookies = Math.ceil(this.avgSales * numCustomers);
      this.cookiesPerHour.push(cookies);
      this.dailyTotal += cookies;
    }
  };
  storeArr.push(this);
}

window.onload = function() {
  //adding a store to the table, with forms
  var formEl = document.getElementById('main-form');
  formEl.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log(storeArr.length);

    var name = event.target.name.value;
    var minCust = event.target.minCust.value;
    var maxCust = event.target.maxCust.value;
    var avgSales = event.target.avgSales.value;

    new CookieStore(
      name,
      allhours,
      minCust,
      maxCust,
      avgSales
    ).calculateSales();
    console.log(storeArr);
    renderAStore(storeArr[storeArr.length - 1]); //yes there is confusing code here, it just takes the last element from the array which we just added, and renders just that to the screen.
  });
};

function customers(min, max) {
  //generates random numbers for the amount of customers
  return Math.random() * (max - min) + min;
}

function renderStores(cookiesArr) {
  for (var j = 0; j < cookiesArr[0].hours.length; j++) {
    //time cells on top of table
    var thEl = document.createElement('td');
    thEl.textContent = cookiesArr[0].hours[j] + ':';
    var mainEl = document.getElementById('storeName');
    if (j === 0) {
      //this puts in the blank cell at the upper left corner.
      var blank = document.createElement('td');
      blank.textContent = ' ';
      mainEl.appendChild(blank);
    }
    mainEl.appendChild(thEl);
  }
  for (var i = 0; i < cookiesArr.length; i++) {
    //Store name cells
    renderAStore(cookiesArr[i]);
  }
}
function renderAStore(store) {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  var storeEl = document.getElementById('storeName');
  tdEl.textContent = store.name;
  storeEl.appendChild(trEl);
  storeEl.appendChild(tdEl);
  for (var c = 0; c < store.cookiesPerHour.length; c++) {
    //amount of cookies sold cells.
    tdEl = document.createElement('td');
    tdEl.textContent = store.cookiesPerHour[c];
    storeEl.appendChild(tdEl);
  }
}

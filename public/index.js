var app = function(){

  const countriesModel = new CountriesModel("https://restcountries.eu/rest/v2/all");

  const listViewDiv = document.querySelector('.countries-view');
  const listView = new ListView(listViewDiv, countriesModel);
  countriesModel.getCountries();

}

window.addEventListener('DOMContentLoaded', app);

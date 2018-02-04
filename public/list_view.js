const ListView = function(listViewDiv, countriesModel) {
  this.listViewDiv = listViewDiv;
  this.countriesModel = countriesModel;
  this.countriesModel.onUpdate = this.render;
}

ListView.prototype.render = function(data) {
  const countriesUL = document.querySelector('#country-list');

  data.forEach(function(country) {
    const li = document.createElement('li');
    li.innerHTML = country.name;
    countriesUL.appendChild(li);
  })
}

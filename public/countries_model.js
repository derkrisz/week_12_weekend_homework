const CountriesModel = function (url) {
  this.url = url;
  this.data = [];
  this.onUpdate = null;
}

CountriesModel.prototype.getCountries = function() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", this.url);

  xhr.addEventListener('load', function() {
    if (xhr.status != 200) return;
    const jsonString = xhr.responseText;
    this.data  = JSON.parse(jsonString);
    this.onUpdate(this.data);
  }.bind(this));

  xhr.send();
};

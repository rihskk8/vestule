function writeToFile(filename, content) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  
  function generateLetters() {
    var names = ["Marta", "Kristīne", "Robert", "Kristap"];
    var surnames = ["Vītole", "Kaija", "Vītol", "Bērziņ"];
    var ages = [18, 98, 72, 25];
  
    var letters = [
      "Sveika, {name} {surname}! Tu esi laimējusi {amount}€!",
      "Sveika, {name} {surname}! Tu esi laimējusi {amount}€!",
      "Sveiks, {name} {surname}! Tu esi laimējis {amount}€!",
      "Sveiks, {name} {surname}! Tu esi laimējis {amount}€!"
    ];
  
    for (var i = 0; i < names.length; i++) {
      var filename = "vestule" + (i + 1) + ".txt";
      var content = letters[i]
        .replace("{name}", names[i])
        .replace("{surname}", surnames[i])
        .replace("{amount}", ages[i] * 10);
  
      writeToFile(filename, content);
    }
  }
  
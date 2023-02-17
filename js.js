// 
async function populate() {

  const requestURL = 'https://raw.githubusercontent.com/AnitaMjaow/fetch-json-with-javascript/main/data.json';
  const request = new Request(requestURL);

  const response = await fetch(request); // We use the fetch method to retreive JSON data from the above address.
  const jsonData = await response.json(); // and store the JSON data in the variable jsonData.

  // html file has two block <header> and <section>.
  populateHeader(jsonData); // Contains title and subtitle.
  populateSection(jsonData); // Contains text materials.

}
// Populating and appending the html file with our objects below.
function populateHeader(obj) {
  const header = document.querySelector('header'); // populating inside of <header>.
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = obj.headerTitle;
  header.appendChild(headerTitle);

  const headerSubTitle = document.createElement('h2');
  headerSubTitle.textContent = `${obj.headerSubTitle}`; // Other objects can be added from the JSON file, define: ${obj.keywordfromthejsonfile}.
  header.appendChild(headerSubTitle);
}
// Populating and appending the html file with our objects below.
function populateSection(obj) {
  const section = document.querySelector('section'); // populating inside of <section>.
  const articleBoxes = obj.articles; // articles is a list nested in the JSON file which is stored in the variable articleBoxes.

  for (const articleBox of articleBoxes) { // Iterate through the nested list articles.
    const theArticle = document.createElement('div'); // <div> represents an articleBox. 
    const sectionSubTitle3 = document.createElement('h3');
    const stringElement1 = document.createElement('p');
    const stringElement2 = document.createElement('p');
    const stringElement3 = document.createElement('p');
    const showList = document.createElement('ul'); // Creating ul, unordered list inside <div>.

    sectionSubTitle3.textContent = articleBox.name; // data object from JSON files fetched; name, age, city and interests.
    stringElement1.textContent = `Age: ${articleBox.age}`;
    stringElement2.textContent = `City: ${articleBox.city}`;
    stringElement3.textContent = 'Interests:';

    const interests = articleBox.interests; // Iterate through the nested list interests.
    for (const interest of interests) {
      const listItem = document.createElement('li'); // Creating list items inside <div>.
      listItem.textContent = interest; // listItem represents one interest.
      showList.appendChild(listItem); // Adding and displaying every item.
    }
    // Adding and displaying theArticle in the order it's placed, or read up-down.
    theArticle.appendChild(sectionSubTitle3);
    theArticle.appendChild(stringElement1);
    theArticle.appendChild(stringElement2);
    theArticle.appendChild(stringElement3);
    theArticle.appendChild(showList);

    // Call on the section and our <div> articleBoxes.
    section.appendChild(theArticle);
  }
}

// Call on function to start building page.
populate();

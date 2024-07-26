let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResults(result) {
  let { link, title, description } = result;

  //div container Element
  let resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");

  //achor tag Element
  let titleEl = document.createElement("a");
  titleEl.href = link;
  titleEl.target = "_blank";
  titleEl.textContent = title;
  titleEl.classList.add("result-title");
  resultItemEl.appendChild(titleEl);

  //break Element
  let titleBreakEl = document.createElement("br");
  resultItemEl.appendChild(titleBreakEl);

  //achor tag Element
  let achorEle = document.createElement("a");
  achorEle.classList.add("result-url");
  achorEle.textContent = link;
  achorEle.target = "_blank";
  achorEle.href = link;
  resultItemEl.appendChild(achorEle);

  //line break Element
  let linebreakEle = document.createElement("br");
  resultItemEl.appendChild(linebreakEle);

  //HTMLParagraphElement
  let paragraphEl = document.createElement("p");
  paragraphEl.classList.add("link-description");
  paragraphEl.textContent = description;
  resultItemEl.appendChild(paragraphEl);

  searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
  spinnerEl.classList.add("d-none");

  for (let result of searchResults) {
    createAndAppendSearchResults(result);
  }
}

function searchWikipidia(Event) {
  if (Event.key === "Enter") {
    spinnerEl.classList.remove("d-none");
    searchResultsEl.textContent = "";

    let searchInput = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
    let options = {
      method: "GET",
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;
        displayResults(search_results);
      });
  }
}
searchInputEl.addEventListener("keydown", searchWikipidia);

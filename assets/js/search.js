$("#search-query").on("change keyup", function(){
  const searchQuery = document.getElementById("search-query").value
  const query_length = searchQuery.length;

  if (query_length >= 3) {
    executeSearch(searchQuery);
  } else if (query_length == 0) {
    showAll();
  }
})

if (!window.productPositions) {
  const items = document.getElementsByClassName("masonry-item");
  let productPositions = {}
  for (var index = 0; index < items.length; index++) {
    const item = items[index];
    productPositions[index] = {
      "position": item.style["position"],
      "left": item.style["left"],
      "top": item.style["top"]
    }
  }
  window.productPositions = productPositions;
}

const productClass = "masonry-item";
var fuseOptions = {
  shouldSort: true,
  tokenize: true,
  matchAllTokens: true,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [{
      name: "title",
      weight: 0.8
    },
    {
      name: "content",
      weight: 0.3
    },
    {
      name: "tags",
      weight: 0.6
    }
  ]
};


function getJSON(url, fn) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      fn(data);
    } else {
      console.log("Target reached on " + url + " with error " + request.status);
    }
  };
  request.onerror = function () {
    console.log("Connection error " + request.status);
  };
  request.send();
}

function executeSearch(searchQuery) {
  getJSON("/index.json", function (data) {
    var pages = data;
    var fuse = new Fuse(pages, fuseOptions);
    var result = fuse.search(searchQuery);
    if (result.length > 0) {
      populateResults(result);
    }
  });
}

function populateResults(result) {
  let productsToBeKept = [];

  result.forEach(function (value, key) {
    productsToBeKept.push(value.permalink);
  });

  let products = document.getElementsByClassName(productClass);
  for (var index =0; index < products.length; index++) {
    const product = products[index];
    const permalink = product.getElementsByTagName("a")[0].href;
  
    if (!productsToBeKept.includes(permalink)) {
      product.style.display = "none";
    }
  
    product.style.position = null;
    product.style.left = null;
    product.style.top = null;
  
  }

}

function showAll() {
  let products = document.getElementsByClassName(productClass);
  for (var index =0; index < products.length; index++) {
    const product = products[index];
    product.style.display = "grid";
    product.style.position = window.productPositions[index]["position"];
    product.style.left = window.productPositions[index]["left"];
    product.style.top = window.productPositions[index]["top"];
  }
}

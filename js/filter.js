function toggleFilter() {
    var filter = document.getElementById("filter-categ");
    if (filter.style.display === "block") {
      filter.style.display = "none";
    } else {
      filter.style.display = "block";
    }
    var filter = document.getElementById("filter");
    if (filter.style.display === "flex") {
      filter.style.display = "none";
    } else {
      filter.style.display = "flex";
    }
  }
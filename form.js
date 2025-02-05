document.addEventListener("DOMContentLoaded", function () {
  const filterButton = document.querySelector(".filter__button");
  const filteringForm = document.querySelector(".filtering-form");

  
  filterButton.addEventListener("click", function (event) {
    event.preventDefault(); 
    if (
      filteringForm.style.display === "none" ||
      filteringForm.style.display === ""
    ) {
      filteringForm.style.display = "flex"; 
    } else {
      filteringForm.style.display = "none"; 
    }
  });

  
  document.addEventListener("click", function (event) {
    if (
      !filteringForm.contains(event.target) &&
      !filterButton.contains(event.target)
    ) {
      filteringForm.style.display = "none";
    }
  });
});

//анимация для поиска в галереи
const search = document.querySelector(".search_box input"),
  images = document.querySelectorAll(".image_box");

search.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    let searchValue = search.value,
      value = searchValue.toLowerCase();
    images.forEach((image) => {
      if (value === image.dataset.name) {
        return (image.style.display = "block");
      }
      image.style.display = "none";
    });
    console.log(value);
  }
});

search.addEventListener("keyup", () => {
  if (search.value != "") return;
  images.forEach((image) => {
    image.style.display = "block";
  });
});
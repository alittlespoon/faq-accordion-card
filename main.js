const acc = document.querySelectorAll(".accordion__item");

// variable to keep track of currently opened tab
let activeItem = null;

for (item of acc) {
  item.addEventListener("click", function () {
    let isActive = this.classList.contains("active");
    let accBody = this.querySelector(".accordion__body");
    this.classList.toggle("active");

    if (activeItem && activeItem != this) {
      // remove `active` class
      activeItem.classList.remove("active");
      // assign it to `prevItem` variable
      let prevItem = activeItem.querySelector(".accordion__body");
      // reset styles
      prevItem.style.maxHeight = null;
    }

    // if new clicked item
    if (!isActive) {
      // calculate content height
      let scrollHeight = accBody.scrollHeight;

      // expand accordion body
      accBody.style.maxHeight = `${scrollHeight}px`;

      // assign clicked item to `activeItem`
      activeItem = this;
    } else {
      // reset styles
      accBody.style.maxHeight = null;
      activeItem = null;
    }
  });
}

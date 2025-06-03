document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fill").forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => (bar.style.width = width), 100);
  });
});

const hey = "hey";
console.log(hey);

var lastName = "hello";
var names = [lastName.length - 1];

var array = [90,60,70];
var ourData = array[0];
 array[0] = "srtt";
console.log(array);

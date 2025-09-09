# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("avinash");

const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function (button) {
  //console.log(button)
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2

```javascript
console.log("avinash");

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## project 3

```javascript
console.log("avinash");

const clock = document.getElementById("clock");
// const clock = document.querySelector("#clock")

// method that is used to control the events of javascript
// in this  time is given in millisecond and the function describe whaat to do.

setInterval(function () {
  let date = new Date();

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 4

```javascript
console.log("avinash");
```

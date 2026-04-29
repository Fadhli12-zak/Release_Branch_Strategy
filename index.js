const { version } = require("./package.json");

function greet(name) {
  return `Halo, ${name}! Selamat datang di aplikasi versi ${version}.`;
}

console.log(greet("Programmer"));

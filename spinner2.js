spinners = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
];
let time = 100;
for (let spinner of spinners) {
  setTimeout(() => {
    process.stdout.write(spinner);
  }, time);
  time += 200;
}

export default (function() {
  // console.log(greetNamed("John"));
  // console.log(greetUnnamed("John"));

  function greetNamed(name: string) : string {
    if (name) {
      return `Hello, ${name}`;
    }
  }

  let greetUnnamed = function(name: string) : string {
    if (name) {
      return `Hello, ${name}`;
    }
  }

  console.log(greetNamed('Vasily'));
})();
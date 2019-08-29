let x: any = {
  foo: 'bar'
};

if (typeof x === 'string') {
  console.log(x.toUpperCase);
}

interface ICustomConsole {
  log(arg: string): void;
}

declare var customConsole: ICustomConsole;

customConsole = {
  log: (arg) => {
    console.log(arg);
  }
}

window.addEventListener('resize', function() {
  // console.log('hoba');
})


// customConsole.log('hoba');
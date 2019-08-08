const modules = {
  'ComponentA': () => import('./componentA'),
  'ComponentB': () => import('./componentB'),
  'InterfaceClass': () => import('./interfaceClass'),
  'Geometry': () => import('./geometry'),
}

const container = document.createElement('div');
document.body.appendChild(container);

interface IRenderModuleButton {
  moduleName: string;
  container: HTMLElement;
  moduleImport: () => Promise<any>;
}

function renderModuleButton(options: IRenderModuleButton) {
  const button = document.createElement('button');
  button.innerHTML = options.moduleName;
  options.container.appendChild(button);
  button.onclick = () => {
    options.moduleImport().then((Module) => {
      console.log(`module ${options.moduleName} successfully loaded`);
      Module.default();
    })
  }
}

for (let moduleName in modules) {
  renderModuleButton({
    moduleName,
    moduleImport: modules[moduleName],
    container: container
  });
}


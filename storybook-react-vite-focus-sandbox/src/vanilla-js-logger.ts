export function listeners(button: HTMLButtonElement, container: HTMLDivElement, output: HTMLPreElement) {
  let log = ''
  const print = (message: string) => {
    log += `\n${message}`;
    output.innerHTML = log;
  }
  button.addEventListener('focus', () => print('Button focused'))
  container.addEventListener('focus', () => print('Container focused'));
}

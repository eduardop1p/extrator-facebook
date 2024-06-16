/* eslint-disable @typescript-eslint/no-explicit-any */
window.addEventListener('DOMContentLoaded', () => {
  const { ipcRenderer } = window.electron;
  const form = document.querySelector('form') as HTMLFormElement;
  const inputFilePath = document.querySelector('#selected-dir') as HTMLSpanElement // eslint-disable-line
  const inputEmail = document.querySelector('#email') as HTMLInputElement;
  const inputPassword = document.querySelector('#password') as HTMLInputElement;
  const inputSearch = document.querySelector('#search') as HTMLInputElement;

  const driverRun = document.querySelector('.driver-run') as HTMLDivElement;
  const btnQuit = document.querySelector('#quit') as HTMLButtonElement;
  const driverError = document.querySelector('.driver-error') as HTMLDivElement;
  const btnNewStart = document.querySelector('#new-start') as HTMLDivElement;

  const handleClick = () => {
    ipcRenderer.send('quit-selenium');

    inputFilePath.innerText = 'Selecione um diretório para salvar as contas';
    inputEmail.value = '';
    inputPassword.value = '';
    inputSearch.value = '';

    driverRun.style.display = 'none';
    driverError.style.display = 'none';
    form.style.display = 'flex';
  };

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const filePath = inputFilePath.innerText;
    const email = inputEmail.value;
    const password = inputPassword.value;
    const searchQuery = inputSearch.value;

    if (!filePath || !email || !password || !searchQuery) return;

    ipcRenderer.send('start-selenium', {
      filePath,
      email,
      password,
      searchQuery,
    });
    form.style.display = 'none';
    driverError.style.display = 'none';
    driverRun.style.display = 'flex';
  });

  btnQuit.addEventListener('click', handleClick);

  ipcRenderer.on('error-selenium', () => {
    form.style.display = 'none';
    driverRun.style.display = 'none';
    driverError.style.display = 'flex';
    btnNewStart.addEventListener('click', handleClick);
  });

  const selectDirButton = document.getElementById('select-dir')!;
  const selectedDirPath = document.getElementById('selected-dir')!;
  selectDirButton.addEventListener('click', async () => {
    const dirPaths = await window.electron.selectDirs();
    selectedDirPath.innerText =
      dirPaths.length > 0
        ? dirPaths[0]
        : 'Selecione um diretório para salvar as contas';
  });
});

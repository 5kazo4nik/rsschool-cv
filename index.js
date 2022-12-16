[...document.querySelectorAll('.nav-list a')].forEach((el) => {
  const id = el.getAttribute('href');
  const section = document.querySelector(`${id}`);
  const header = section.querySelector('h2');
  el.addEventListener('click', () => {
    header.classList.add('underline');
    console.log(header.className);
    setTimeout(() => {
      header.classList.remove('underline');
      console.log(header.className);
    }, 4000);
  });
});

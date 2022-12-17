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

const burgerBtn = document.querySelector('.burg-btn');

const burgerEvent = (e) => {
  if (e.target === burgerBtn || burgerBtn.contains(e.target)) {
    document.querySelector('.burg-btn').classList.toggle('burg-btn-active');
    document.querySelector('.nav-list').classList.toggle('nav-list-active');
  }

  const myInfo = burgerBtn.closest('.my-info');

  document.body.addEventListener('click', (e) => {
    if (!myInfo.contains(e.target)) {
      document.querySelector('.burg-btn').classList.remove('burg-btn-active');
      document.querySelector('.nav-list').classList.remove('nav-list-active');
    }
  });

  const link = [...document.querySelectorAll('.nav-item a')];
  link.forEach((el) =>
    el.addEventListener('click', () => {
      document.querySelector('.burg-btn').classList.remove('burg-btn-active');
      document.querySelector('.nav-list').classList.remove('nav-list-active');
    })
  );
};

burgerBtn.addEventListener('click', burgerEvent);

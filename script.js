const toggle = document.querySelector('.lang-toggle');
let language = 'en';

toggle.addEventListener('click', () => {
  language = language === 'en' ? 'zh' : 'en';
  document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  document.querySelectorAll('[data-en]').forEach((node) => {
    node.textContent = node.dataset[language];
  });
  toggle.querySelectorAll('span').forEach((item, index) => {
    item.classList.toggle('active', (language === 'en' && index === 0) || (language === 'zh' && index === 1));
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

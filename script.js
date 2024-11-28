<script>
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.fontSize = '23px';
    console.log('Mouse over:', link.textContent); // Debug para verificar se o evento está sendo acionado
  });

  link.addEventListener('mouseout', () => {
    link.style.fontSize = '20px';
    console.log('Mouse out:', link.textContent); // Debug para verificar se o evento está sendo acionado
  });
});
document.querySelector('#carouselExampleCaptions').classList.add('carousel-fade');

document.querySelector('buttonn1').addEventListener('click', function () {
  window.location.href = 'https://www.e-recovery.com.br/blog/quais-os-tipos-de-armazenamento-de-dados-para-computadores/';
});

document.querySelector('buttonn2').addEventListener('click', function () {
  window.location.href = 'https://ultahost.com/blog/pt/garantindo-a-seguranca-dos-dados-no-seu-servidor-de-armazenamento/';
});
</script>

document.addEventListener("DOMContentLoaded", function() {
    const questionElements = document.querySelectorAll('.row-element');
  
    questionElements.forEach((element) => {
      const icon = element.querySelector('img');
      const answer = element.nextElementSibling;
  
      icon.addEventListener('click', () => {
        if (answer.style.display === 'block') {
          answer.style.display = 'none';  
          icon.src = './assets/images/icon-plus.svg'; 
        } else {
          answer.style.display = 'block'; 
          icon.src = './assets/images/icon-minus.svg';  
        }
      });
    });
  });
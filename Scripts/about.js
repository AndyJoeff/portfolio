document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');
    
    skills.forEach((skill, index) => {
      skill.style.opacity = '0';
      skill.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        skill.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        skill.style.opacity = '1';
        skill.style.transform = 'translateY(0)';
      }, 100 * index);
    });
  });
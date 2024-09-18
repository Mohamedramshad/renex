// Function to animate counting up
function countUp(element, start, end, duration) {
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      element.innerHTML = Math.floor(progress * (end - start) + start) + "+";
  
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }
    requestAnimationFrame(animation);
  }
  
  // Scroll Trigger for Count-Up Animation
  const observerOptions = {
    threshold: 0.5  // Trigger when 50% of the element is visible
  };
  
  const counters = [
    { id: 'customers', end: 12 },
    { id: 'offices', end: 14 },
    { id: 'students', end: 10 }
  ];
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => {
          const element = document.getElementById(counter.id);
          countUp(element, 0, counter.end, 2000);  // count from 0 to the final value over 2 seconds
        });
        observer.unobserve(entry.target);  // stop observing once animation is triggered
      }
    });
  }, observerOptions);
  
  // Start observing the section
  const section = document.querySelector('ul');  // Replace with the appropriate section to observe
  observer.observe(section);
  
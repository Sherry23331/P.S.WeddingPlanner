
    // 获取导航栏元素
    const navbar = document.querySelector('.navbar');

    // 监听滚动事件
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // 滚动距离大于50px时添加类
            navbar.classList.add('scrolled');
        } else {
            // 滚动回顶部时移除类
            navbar.classList.remove('scrolled');
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
      const sections = document.querySelectorAll(".fade-in-section");
  
      const observer = new IntersectionObserver(
          (entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add("is-visible");
                      observer.unobserve(entry.target); // 动画触发后取消观察
                  }
              });
          },
          {
              threshold: 0.1 // 元素进入视口 10% 时触发
          }
      );
  
      sections.forEach(section => observer.observe(section));
  });
  
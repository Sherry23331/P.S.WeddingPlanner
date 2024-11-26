// 获取导航栏元素
const navbar = document.getElementById("navbar");

// 监听滚动事件
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled"); // 添加 "scrolled" 类
    } else {
        navbar.classList.remove("scrolled"); // 移除 "scrolled" 类
    }
});

// 获取所有带有 "dropdown" 类的元素
const dropdowns = document.querySelectorAll('.dropdown');

// 为每个 dropdown 添加鼠标事件监听
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.classList.add('show'); // 展开菜单
    });

    dropdown.addEventListener('mouseleave', () => {
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.classList.remove('show'); // 隐藏菜单
    });
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
  
  
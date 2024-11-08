window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 50;
    let activeLink = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navbar.className = ""; 
            navbar.classList.add(`nav-${section.id}`);
            
            
            document.querySelectorAll("nav ul li a").forEach(link => {
                link.classList.remove("active");
            });

            activeLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
            if (activeLink) activeLink.classList.add("active");
        }
    });
});

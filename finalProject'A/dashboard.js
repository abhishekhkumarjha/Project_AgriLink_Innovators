function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}

function toggleSubmenu(id, element) {
    const submenu = document.getElementById(id);
    const isVisible = submenu.style.display === "block";

    document.querySelectorAll(".submenu").forEach(menu => menu.style.display = "none");
    document.querySelectorAll(".sidebar ul li").forEach(li => li.classList.remove("active"));

    if (!isVisible) {
        submenu.style.display = "block";
        element.classList.add("active");
    }
}

function openSection(page) {
    document.querySelectorAll('.sidebar ul li').forEach(li => li.classList.remove('active'));

    if (event.target.tagName === "LI") {
        event.target.classList.add('active');
    }

    if (page.includes('.html')) {
        window.location.href = page;
    }
}

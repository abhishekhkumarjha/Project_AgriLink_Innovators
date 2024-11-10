// Toggle sidebar visibility
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}

// Toggle submenu visibility and set active section style with red border
function toggleSubmenu(id, element) {
    const submenu = document.getElementById(id);
    const isVisible = submenu.style.display === "block";

    // Close all submenus and remove active styling from all sections
    document.querySelectorAll(".submenu").forEach(menu => menu.style.display = "none");
    document.querySelectorAll(".sidebar ul li").forEach(li => li.classList.remove("active"));

    // Toggle the clicked submenu and add red border to the active section
    if (!isVisible) {
        submenu.style.display = "block";
        element.classList.add("active");
    }
}

// Open specific pages or handle submenus
function openSection(page) {
    // Remove active styling from all sections
    document.querySelectorAll('.sidebar ul li').forEach(li => li.classList.remove('active'));

    // Mark the clicked submenu item as active
    if (event.target.tagName === "LI") {
        event.target.classList.add('active');
    }

    // Navigate to the page if it's an HTML file
    if (page.includes('.html')) {
        window.location.href = page;
    }
}

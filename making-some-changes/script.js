// Making active nav link indicator
// give us the current location of the page like index.html etc
const activePage = window.location.pathname;

// thinks function is says "we have this nav link and we gonna lop through 'em n then we gonna check the link href in it"
const navLinks = document.querySelectorAll('nav ul a').forEach(link => {
    // if the link href is include the same name in activePage then we add the class 'active'
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})
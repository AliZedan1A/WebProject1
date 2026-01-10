function createNavbar(activePage = 'home') {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  
  navbar.innerHTML = `

      <a class="nav-link ${activePage === 'home' ? 'active' : ''}" href="home.html">Home</a>
      <a class="nav-link ${activePage === 'languages' ? 'active' : ''}" href="programming-languages.html">Languages</a>
      <a class="nav-link ${activePage === 'comparison' ? 'active' : ''}" href="comparison.html">Comparison</a>
      <a class="nav-link ${activePage === 'about' ? 'active' : ''}" href="about-us.html">About Us</a>
    </div>
  `;
  
  return navbar;
}

document.addEventListener('DOMContentLoaded', function() {
  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  if (navbarPlaceholder) {
    const scriptTag = document.querySelector('script[data-active-page]');
    const activePage = scriptTag ? scriptTag.getAttribute('data-active-page') : 'home';
    const navbar = createNavbar(activePage);
    navbarPlaceholder.parentNode.replaceChild(navbar, navbarPlaceholder);
  }
});

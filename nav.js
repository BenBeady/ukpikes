// nav.js — injects nav and footer into every page
const NAV_LINKS = [
  { href: 'index.html',        label: 'Home' },
  { href: 'about.html',        label: 'About' },
  { href: 'recruitment.html',  label: 'Recruitment' },
  { href: 'philanthropy.html', label: 'Philanthropy' },
  { href: 'alumni.html',       label: 'Alumni' },
  { href: 'donate.html',       label: 'Donate', donate: true },
];
function buildNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const links = NAV_LINKS.map(l => {
    const active = (l.href === current) ? 'active' : '';
    const cls = l.donate ? 'nav-donate-btn' : '';
    return `<li><a href="${l.href}" class="${active} ${cls}">${l.label}</a></li>`;
  }).join('');
  return `
  <nav class="nav">
    <a class="nav-logo" href="index.html">ΠΚΑ <span>Omega Chapter · University of Kentucky</span></a>
    <ul class="nav-links">${links}</ul>
  </nav>`;
}
function buildFooter() {
  return `
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <h3>Pi Kappa Alpha — Omega Chapter</h3>
        <p>University of Kentucky<br>Brotherhood. Leadership. Excellence.<br><br>
          @kentuckypikes &nbsp;|&nbsp; UKpikes.com</p>
      </div>
      <div class="footer-col">
        <h4>Chapter</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="recruitment.html">Rush Pike</a></li>
          <li><a href="philanthropy.html">Philanthropy</a></li>
          <li><a href="housing.html">Housing Project</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="alumni.html">Alumni</a></li>
          <li><a href="donate.html">Donate</a></li>
          <li><a href="https://instagram.com/kentuckypikes" target="_blank">Instagram</a></li>
          <li><a href="https://bbnvolved.uky.edu" target="_blank">BBNvolved</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:info@ukpikes.com">info@ukpikes.com</a></li>
          <li><a href="mailto:recruitment@ukpikes.com">recruitment@ukpikes.com</a></li>
          <li><a href="mailto:alumni@ukpikes.com">alumni@ukpikes.com</a></li>
          <li><a href="mailto:cvonallmen@gmail.com">Housing Corp</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Pi Kappa Alpha · Omega Chapter · University of Kentucky · All rights reserved.</span>
      <div class="social-links">
        <a href="https://instagram.com/kentuckypikes" target="_blank">Instagram</a>
        <a href="https://twitter.com/KentuckyPikes" target="_blank">X / Twitter</a>
        <a href="https://tiktok.com/@kentuckypikes" target="_blank">TikTok</a>
        <a href="#" target="_blank">Facebook</a>
        <a href="#" target="_blank">LinkedIn</a>
      </div>
    </div>
  </footer>`;
}
document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', buildNav());
  document.body.insertAdjacentHTML('beforeend', buildFooter());
});
document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', buildNav());
  document.body.insertAdjacentHTML('beforeend', buildFooter());
});

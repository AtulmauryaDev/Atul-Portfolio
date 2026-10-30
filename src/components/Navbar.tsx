
const navigationLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'ProblemSolving', href: '#problem-solving' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="site-header">
      <nav
        className="navbar"
        aria-label="Main navigation"
      >
      
      <a
        className="navbar__brand"
        href="#hero"
        aria-label="Atul Kumar Maurya - Home"
        >
        <span className="navbar__brand-code" aria-hidden="true">
        {'</>'}
        </span>
        <span className="navbar__brand-name">Atul</span>
      </a>


        <ul className="navbar__links">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="navbar__contact"
          href="#contact"
        >
          Let's Connect
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
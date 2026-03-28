export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  scrollToSection(sectionId);
}

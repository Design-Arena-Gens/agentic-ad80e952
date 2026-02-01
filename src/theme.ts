// Initialize theme
export function initTheme(): void {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.className = savedTheme;
}

// Toggle theme
export function toggleTheme(): void {
  const currentTheme = document.body.className;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.className = newTheme;
  localStorage.setItem('theme', newTheme);
}

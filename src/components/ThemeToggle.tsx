import { useEffect, useState } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

type Theme = 'light' | 'dark';
const THEME_KEY = 'theme';

const getPreferredTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = window.localStorage.getItem(THEME_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setDocumentTheme = (theme: Theme) => {
  document.documentElement.dataset.bsTheme = theme;
};

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());

  useEffect(() => {
    setDocumentTheme(theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <OverlayTrigger placement="left" overlay={<Tooltip>Switch to {nextTheme} theme</Tooltip>}>
      <Button
        variant="link"
        className="theme-toggle"
        onClick={() => setTheme(nextTheme)}
        aria-label={`Switch to ${nextTheme} mode`}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </Button>
    </OverlayTrigger >
  );
}

export default ThemeToggle;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

  :root {
    --primary-bg: #fdfbfb;
    --secondary-bg: #ebedee;
    --card-bg: rgba(255, 255, 255, 0.85);
    --text-dark: #2d3748;
    --btn-decrease: #fc8181;
    --btn-decrease-hover: #f56565;
    --btn-reset: #a0aec0;
    --btn-reset-hover: #718096;
    --btn-increase: #68d391;
    --btn-increase-hover: #48bb78;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-dark);
  }
`;

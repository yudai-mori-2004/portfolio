// app/theme.ts
'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// アクセントカラー: 琥珀色（真正性・本物の証明を象徴）
const accentColor = {
  main: '#C4A035',
  light: '#D4B55A',
  dark: '#A68A2A',
};

// モノクロ基調でシンプルでスタイリッシュなテーマを作成
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#333333', // ダークグレー
      light: '#555555',
      dark: '#111111',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#666666', // ミディアムグレー
      light: '#999999',
      dark: '#444444',
      contrastText: '#ffffff',
    },
    warning: {
      main: accentColor.main,
      light: accentColor.light,
      dark: accentColor.dark,
    },
    background: {
      default: '#f8f8f8', // ほぼ白のバックグラウンド
      paper: '#ffffff',
    },
    text: {
      primary: '#111111',
      secondary: '#555555',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8, // 角の丸みを減らす
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            borderColor: 'rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 4,
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        containedPrimary: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: '#333333',
          transition: 'color 0.2s ease',
          '&:hover': {
            color: accentColor.main,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 500,
          backgroundColor: 'rgba(196, 160, 53, 0.15)',
          color: '#8B7024',
          border: '1px solid rgba(196, 160, 53, 0.3)',
        },
      },
    },
  },
});

// レスポンシブなタイポグラフィに
const responsiveTheme = responsiveFontSizes(theme);

// ダークモード対応
const darkTheme = createTheme({
  ...responsiveTheme,
  palette: {
    ...responsiveTheme.palette,
    mode: 'dark',
    primary: {
      main: '#e0e0e0', // ライトグレー
      light: '#f5f5f5',
      dark: '#cccccc',
      contrastText: '#111111',
    },
    secondary: {
      main: '#b0b0b0', // ミディアムグレー
      light: '#d0d0d0',
      dark: '#909090',
      contrastText: '#111111',
    },
    warning: {
      main: accentColor.light, // ダークモードでは明るめの琥珀色
      light: '#E5C97A',
      dark: accentColor.main,
    },
    background: {
      default: '#121212', // ダークバックグラウンド
      paper: '#1a1a1a',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#b0b0b0',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  components: {
    ...responsiveTheme.components,
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            borderColor: 'rgba(255, 255, 255, 0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 500,
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          color: '#e0e0e0',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: '#e0e0e0',
          transition: 'color 0.2s ease',
          '&:hover': {
            color: accentColor.light,
          },
        },
      },
    },
  },
});

export { responsiveTheme as theme, darkTheme };
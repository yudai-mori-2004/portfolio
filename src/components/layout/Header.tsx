// components/layout/Header.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    useMediaQuery,
    useTheme,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Memos', path: '/memos' },
];

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const pathname = usePathname();

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const isActive = (path: string) => pathname === path;

    return (
        <Box sx={{ mb: 4 }}>
            <AppBar
                position="static"
                color="transparent"
                elevation={0}
                sx={{
                    backgroundColor: 'transparent',
                    borderBottom: 'none',
                }}
            >
                <Box sx={{ maxWidth: '1200px', mx: 'auto', width: '100%' }}>
                    <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 0 } }}>
                        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Box
                                sx={{
                                    transition: 'opacity 0.2s ease',
                                    '&:hover': {
                                        opacity: 0.8,
                                    }
                                }}
                            >
                                <Image
                                    src="/icon.jpg"
                                    alt="moodai"
                                    width={48}
                                    height={48}
                                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                                />
                            </Box>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'text.primary',
                                    transition: 'opacity 0.2s ease',
                                }}
                            >
                                Moodai&apos;s Portfolio
                            </Typography>
                        </Link>

                        {isMobile ? (
                            <>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="end"
                                    onClick={handleDrawerToggle}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Drawer
                                    anchor="right"
                                    open={drawerOpen}
                                    onClose={handleDrawerToggle}
                                >
                                    <Box sx={{ width: 240, pt: 2, px: 1 }}>
                                        <List>
                                            {navLinks.map((link) => (
                                                <ListItem
                                                    key={link.path}
                                                    button
                                                    onClick={() => {
                                                        window.location.href = link.path;
                                                        setDrawerOpen(false);
                                                    }}
                                                    sx={{
                                                        borderRadius: 1,
                                                        mb: 1,
                                                        bgcolor: isActive(link.path) ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                                                        color: isActive(link.path) ? 'primary.main' : 'text.primary',
                                                    }}
                                                >
                                                    <ListItemText primary={link.name} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </Drawer>
                            </>
                        ) : (
                            <Box sx={{ display: 'flex' }}>
                                {navLinks.map((link) => (
                                    <Button
                                        key={link.path}
                                        component={Link}
                                        href={link.path}
                                        color="inherit"
                                        sx={{
                                            mx: 1,
                                            py: 1,
                                            px: 2,
                                            fontWeight: isActive(link.path) ? 600 : 400,
                                            color: isActive(link.path) ? 'text.primary' : 'text.secondary',
                                            position: 'relative',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: '6px',
                                                left: '50%',
                                                width: isActive(link.path) ? '20px' : '0px',
                                                height: '2px',
                                                backgroundColor: 'text.primary',
                                                transition: 'all 0.2s ease',
                                                transform: 'translateX(-50%)',
                                            },
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                color: 'text.primary',
                                            },
                                            '&:hover::after': {
                                                width: '20px',
                                            }
                                        }}
                                    >
                                        {link.name}
                                    </Button>
                                ))}
                            </Box>
                        )}
                    </Toolbar>
                </Box>
            </AppBar>
            <Box sx={{
                height: '1px',
                width: '100%',
                background: 'rgba(0, 0, 0, 0.08)',
                mt: 1,
            }} />
        </Box>
    );
}

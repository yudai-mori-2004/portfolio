// components/ui/Tag.tsx
'use client';
import React, { ReactNode } from 'react';
import { Chip, Box, useTheme } from '@mui/material';

interface TagProps {
    children: ReactNode;
}

export function Tag({ children }: TagProps) {
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    return (
        <Chip
            label={children}
            size="small"
            sx={{
                bgcolor: isLight
                    ? 'rgba(196, 160, 53, 0.15)'
                    : 'rgba(255, 255, 255, 0.08)',
                color: isLight
                    ? '#8B7024'
                    : 'text.secondary',
                fontWeight: 500,
                borderRadius: 1,
                border: isLight
                    ? '1px solid rgba(196, 160, 53, 0.3)'
                    : 'none',
                '&:hover': {
                    bgcolor: isLight
                        ? 'rgba(196, 160, 53, 0.25)'
                        : 'rgba(255, 255, 255, 0.12)',
                }
            }}
        />
    );
}

export function TagList({ children }: { children: ReactNode }) {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {children}
        </Box>
    );
}

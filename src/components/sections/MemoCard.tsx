// components/sections/MemoCard.tsx
import React from 'react';
import Link from 'next/link';
import { Box, Typography, CardContent, Chip, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Card } from '../ui/Card';
import { Tag, TagList } from '../ui/Tag';

interface MemoItem {
    slug: string;
    title: string;
    date: string;
    tags?: string[];
    excerpt?: string;
}

interface MemoCardProps {
    memo: MemoItem;
}

export function MemoCard({ memo }: MemoCardProps) {
    const { slug, title, date, tags, excerpt } = memo;

    // Format date
    const formattedDate = new Date(date).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <Card>
            <CardContent sx={{ p: 4 }}>
                <Box sx={{ mb: 1 }}>
                    <Chip
                        label={formattedDate}
                        size="small"
                        sx={{
                            borderRadius: 1,
                            backgroundColor: 'rgba(0, 0, 0, 0.05)',
                            color: 'text.secondary',
                            fontWeight: 500,
                        }}
                    />
                </Box>

                <Link href={`/memos/${slug}`} style={{ textDecoration: 'none' }}>
                    <Typography
                        variant="h5"
                        component="h3"
                        fontWeight={600}
                        sx={{
                            mb: 2,
                            color: 'text.primary',
                            transition: 'color 0.2s ease',
                            '&:hover': {
                                color: 'warning.main',
                            }
                        }}
                    >
                        {title}
                    </Typography>
                </Link>

                {excerpt && (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {excerpt}
                    </Typography>
                )}

                {tags && tags.length > 0 && (
                    <Box sx={{ mb: 3 }}>
                        <TagList>
                            {tags.map(tag => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </TagList>
                    </Box>
                )}

                <Box sx={{ pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                    <Button
                        component={Link}
                        href={`/memos/${slug}`}
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                            fontWeight: 500,
                            '&:hover': {
                                backgroundColor: 'transparent',
                                transform: 'translateX(4px)',
                            }
                        }}
                    >
                        続きを読む
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}
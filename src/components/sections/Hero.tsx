'use client';

// components/sections/Hero.tsx
import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button, Grid, IconButton, Tooltip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TwitterIcon from '@mui/icons-material/Twitter'; // ここを修正 - x から Twitter に変更
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import { Card } from '../ui/Card';

export function Hero() {
    return (
        <Box sx={{ mt: 6, mb: 10 }}>
            <Grid container spacing={6} alignItems="flex-start">
                <Grid item xs={12} md={7}>
                    <Typography
                        variant="h3"
                        component="h1"
                        fontWeight="bold"
                        sx={{ mb: 2 }}
                    >
                        Yudai Mori
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', maxWidth: '40ch' }}>
                        ものづくりが趣味です。世の中をより良くする手段として、ブロックチェーンに可能性を感じています。「何かを作りたい」欲を絶やさずに、これからも挑戦を続けていきたいです。
                    </Typography>

                    {/* Contact & Platform Links */}
                    <Box sx={{ mb: 4 }}>
                        {/* Contact Links */}
                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                            <Tooltip title="X (Twitter)">
                                <IconButton 
                                    component="a" 
                                    href="https://x.com/moodai0119" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="small" 
                                    sx={{ 
                                        color: 'text.secondary',
                                        '&:hover': { color: 'primary.main' }
                                    }}
                                >
                                    <TwitterIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Telegram">
                                <IconButton 
                                    component="a" 
                                    href="https://t.me/moodai0119" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="small" 
                                    sx={{ 
                                        color: 'text.secondary',
                                        '&:hover': { color: 'primary.main' }
                                    }}
                                >
                                    <TelegramIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        </Box>

                        {/* Platform Links */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <GitHubIcon fontSize="small" sx={{ color: 'text.secondary', mr: 1.5 }} />
                                <Typography 
                                    component="a"
                                    href="https://github.com/yudai-mori-2004"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="body2"
                                    sx={{ 
                                        color: 'text.secondary', 
                                        textDecoration: 'none',
                                        '&:hover': { 
                                            color: 'primary.main',
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    GitHub
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LinkedInIcon fontSize="small" sx={{ color: 'text.secondary', mr: 1.5 }} />
                                <Typography 
                                    component="a"
                                    href="https://www.linkedin.com/in/yudai-mori-6a0258364/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="body2"
                                    sx={{ 
                                        color: 'text.secondary', 
                                        textDecoration: 'none',
                                        '&:hover': { 
                                            color: 'primary.main',
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    LinkedIn
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <DescriptionIcon fontSize="small" sx={{ color: 'text.secondary', mr: 1.5 }} />
                                <Typography 
                                    component="a"
                                    href="https://note.com/moodai0119"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="body2"
                                    sx={{ 
                                        color: 'text.secondary', 
                                        textDecoration: 'none',
                                        '&:hover': { 
                                            color: 'primary.main',
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    Note
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Button
                            component={Link}
                            href="/projects"
                            variant="contained"
                            color="primary"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                px: 3,
                                py: 1.5,
                                borderRadius: 1,
                            }}
                        >
                            プロジェクト一覧
                        </Button>
                        <Button
                            component={Link}
                            href="/memos"
                            variant="outlined"
                            color="primary"
                            sx={{
                                px: 3,
                                py: 1.5,
                                borderRadius: 1,
                            }}
                        >
                            メモ一覧
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Card>
                            <Box sx={{
                                p: 4,
                                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                                borderRadius: 1,
                                border: '1px solid rgba(0, 0, 0, 0.05)'
                            }}>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                    関心
                                </Typography>

                                <Box component="ul" sx={{
                                    pl: 2,
                                    '& li': {
                                        mb: 1.5,
                                        color: 'text.secondary',
                                        fontSize: '0.95rem'
                                    }
                                }}>
                                    <li>ブロックチェーン</li>
                                    <li>C2PA / コンテンツ来歴証明</li>
                                    <li>Rust</li>
                                </Box>
                            </Box>
                        </Card>

                        <Card>
                            <Box sx={{
                                p: 4,
                                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                                borderRadius: 1,
                                border: '1px solid rgba(0, 0, 0, 0.05)'
                            }}>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                    経歴・実績
                                </Typography>

                                <Box sx={{
                                    '& > div': {
                                        mb: 2.5,
                                        '&:last-child': {
                                            mb: 0
                                        }
                                    }
                                }}>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                                            学歴
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                                            大阪大学 基礎工学部 システム科学科
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                                            4年在学中
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                                            職務経験
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                                            株式会社シーライヴ
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                                            Web開発 (2023/08 - 2025/06)
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                                            受賞歴
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                                            Crypto Cities Hackathon
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', mb: 1 }}>
                                            Governance Track Winner (2025/07)
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                                            Solana Student Hackathon
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', fontStyle: 'italic' }}>
                                            結果発表待ち (2025/11提出)
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
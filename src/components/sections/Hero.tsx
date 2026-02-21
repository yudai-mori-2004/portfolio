'use client';

// components/sections/Hero.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Button, Grid, IconButton, Tooltip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TwitterIcon from '@mui/icons-material/Twitter'; // ここを修正 - x から Twitter に変更
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import { Card } from '../ui/Card';

export function Hero() {
    return (
        <Box sx={{ mt: 6, mb: 10 }}>
            <Grid container spacing={6} alignItems="flex-start">
                <Grid item xs={12} md={7}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2 }}>
                        <Box
                            sx={{
                                width: 100,
                                height: 100,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                flexShrink: 0,
                                border: '3px solid',
                                borderColor: 'divider',
                            }}
                        >
                            <Image
                                src="/profile.png"
                                alt="Yudai Mori"
                                width={100}
                                height={100}
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>
                        <Typography
                            variant="h3"
                            component="h1"
                            fontWeight="bold"
                        >
                            Yudai Mori
                        </Typography>
                    </Box>

                    <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', maxWidth: '50ch' }}>
                        幼少期からものづくりが好きで、大学卒業を機に起業しました。今取り組んでいるのは、AI時代における人間の創作活動を守るインフラです。AIは人間の創作物なしには成り立たない——にもかかわらず、AI生成と人間の作品が同じ土俵で評価され、クリエイターが報われない現状があります。この構造的矛盾を、技術で解決したいと考えています。
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
                                        '&:hover': { color: 'warning.main' }
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
                                        '&:hover': { color: 'warning.main' }
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
                                            color: 'warning.main',
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
                                            color: 'warning.main',
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
                                            color: 'warning.main',
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    Note
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon fontSize="small" sx={{ color: 'text.secondary', mr: 1.5 }} />
                                <Typography
                                    component="a"
                                    href="mailto:yudai.mori@moodai.jp"
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        textDecoration: 'none',
                                        '&:hover': {
                                            color: 'warning.main',
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    yudai.mori@moodai.jp
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Button
                            component={Link}
                            href="/projects"
                            variant="contained"
                            color="warning"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                px: 3,
                                py: 1.5,
                                borderRadius: 1,
                                color: '#111',
                                fontWeight: 600,
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                },
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
                                backgroundColor: 'action.hover',
                                borderRadius: 1,
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
                                    <li>C2PA / コンテンツ来歴証明</li>
                                    <li>Blockchain (Solana, RWAs)</li>
                                    <li>暗号技術 (ZK, TEE)</li>
                                </Box>
                            </Box>
                        </Card>

                        <Card>
                            <Box sx={{
                                p: 4,
                                backgroundColor: 'action.hover',
                                borderRadius: 1,
                            }}>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                    技術スタック
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                                            言語
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                                            TypeScript, Rust, Python, C#
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                                            フレームワーク
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                                            Next.js, React, Solana/Anchor
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                                            その他
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                                            C2PA, Docker, PostgreSQL
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>

                        <Card>
                            <Box sx={{
                                p: 4,
                                backgroundColor: 'action.hover',
                                borderRadius: 1,
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
                                            2026年3月卒業予定
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                                            職歴
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                                            moodai（個人事業主）
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', mb: 1 }}>
                                            Webサービス開発・受託開発 (2026/02 -)
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                                            株式会社シーライヴ
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                                            医療機関向けシフト自動作成SaaSの開発 (2023/08 - 2025/06)
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
                                            Governance Track Winner (2025)
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                                            Odyssey of the Mind 世界大会
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                                            Vehicle部門 Division2 銅メダル (2017)
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
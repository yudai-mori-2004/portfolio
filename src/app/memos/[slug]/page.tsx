// app/memos/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  Box,
  Typography,
  Paper,
  Divider,
  Button,
  Chip,
  Container,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { memos } from '@/lib/memos';

export async function generateStaticParams() {
  return memos.map((memo) => ({
    slug: memo.slug,
  }));
}

export default async function MemoPage({params}:{params:Promise<{slug: string}>}) {
  const { slug } = await params;

  const memo = memos.find(m => m.slug == slug);
  if(!memo) return "No contents";

  // Memo date
  const memoDate = memo.date;

  // Format date to display in a more readable format (YYYY年MM月DD日)
  const formattedDate = new Date(memoDate).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Container maxWidth="md">
      <Box component="article" sx={{ position: 'relative', my: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          {memo.title}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2, mb: 4 }}>
          <Chip
            icon={<CalendarTodayIcon />}
            label={formattedDate}
            component="time"
            dateTime={memoDate}
            variant="outlined"
            size="small"
            sx={{
              borderRadius: 1,
              py: 0.5,
              px: 0.5,
              '& .MuiChip-label': {
                px: 1,
                fontWeight: 500,
              },
            }}
          />

          <Box sx={{ display: 'flex', gap: 1 }}>
            {memo.tags.map((tag,i) => (
              <Chip
              key={i}
                label={tag}
                size="small"
                sx={{
                  bgcolor: 'rgba(0, 0, 0, 0.2)',
                  color: 'text.secondary',
                  fontWeight: 500,
                  borderRadius: 1,
                }}
              />
            ))}
          </Box>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 1,
            mb: 4,
            border: '1px solid rgba(0, 0, 0, 0.05)',
          }}
        >
          {memo.paragraphs.map((paragraph,i) => (
            <Typography key={i} variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            {paragraph}
          </Typography>
          ))}
        </Paper>

        <Divider sx={{ my: 4 }} />

        <Button
          component={Link}
          href="/memos"
          startIcon={<ArrowBackIcon />}
          sx={{
            color: 'text.primary',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'transparent',
              color: 'text.secondary',
              transform: 'translateX(-6px)',
            }
          }}
        >
          メモ一覧に戻る
        </Button>
      </Box>
    </Container>
  );
}
'use client';

import React from 'react';
import { Paper } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MemoContentProps {
  paragraphs: string[];
}

export default function MemoContent({ paragraphs }: MemoContentProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 1,
        mb: 4,
        border: '1px solid rgba(0, 0, 0, 0.05)',
        '& p': {
          color: 'text.secondary',
          mb: 2,
        },
        '& strong': {
          fontWeight: 600,
          color: 'text.primary',
        },
        '& ul, & ol': {
          color: 'text.secondary',
          pl: 3,
          mb: 2,
        },
        '& li': {
          mb: 0.5,
        },
      }}
    >
      {paragraphs.map((paragraph, i) => (
        <ReactMarkdown key={i} remarkPlugins={[remarkGfm]}>
          {paragraph}
        </ReactMarkdown>
      ))}
    </Paper>
  );
}

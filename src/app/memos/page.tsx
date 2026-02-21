// app/memos/page.tsx
import { SectionTitle } from '@/components/ui/SectionTitle'
import { MemoCard } from '@/components/sections/MemoCard'
import { Box } from '@mui/material'
import { memos } from '@/lib/memos'

export const metadata = {
    title: 'Memos | moodai',
    description: 'あとから見返すための日記やメモ',
}

export default function MemosPage() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8">
                <SectionTitle className="mb-2 sm:mb-0">Memos</SectionTitle>
                <p className="text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full shadow-sm inline-block">あとから見返すための日記やメモ</p>
            </div>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[...memos].reverse().map((memo) => (
                    <MemoCard key={memo.slug} memo={memo} />
                ))}
            </Box>
        </div>
    )
}

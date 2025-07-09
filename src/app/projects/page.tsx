// app/projects/page.tsx
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { Box } from '@mui/material'

export const metadata = {
    title: 'Projects | moodai',
    description: 'moodaiのプロジェクト一覧',
}

export default function ProjectsPage() {
    return (
        <div>
            <SectionTitle>Projects</SectionTitle>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <ProjectCard
                    title="CitizenHub"
                    description="CitizenHubは、住民が少額トークンを担保に具体的な政策提案を行い、コミュニティメンバーが民主的に投票して最も支持された提案を採択するSolanaベースのプラットフォームです。投票の結果、多数派には少数派の担保を分配するインセンティブ設計で市民の能動的参加を促進し、代表制民主主義の限界を補完します。"

                    link="https://citizen-hub-drab.vercel.app/"
                    tags={["Solana", "DAO", "Web3"]}
                />


                <ProjectCard
                    title="RiceChain"
                    description="Solana上でP2P米流通プラットフォームの構築を目指しています。今回はハッカソンに出すフローを通してクリプトの経験を積む目的が大きいですが、いつか実現したいアイデアです。"

                    link="https://ricechain.example.com"
                    tags={["Solana", "Blockchain", "Web3"]}
                />



                <ProjectCard
                    title="進捗があればどんどん更新していきます"
                    description="幅広く、生活や社会をよりよくするアイデアを創出します。"
                    link=""
                    tags={[]}
                />
            </Box>
        </div>
    )
}

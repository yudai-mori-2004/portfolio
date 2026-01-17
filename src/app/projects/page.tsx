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
                    title="Title Protocol"
                    description="C2PA署名付きコンテンツの権利者をブロックチェーン上で解決するプロトコル。AI生成時代において、デジタルコンテンツの「登記簿」を目指します。不動産に登記簿があるように、コンテンツにも「誰が権利を持つか」を記録し、誰でも確認できる仕組みを構築中。"
                    link="https://github.com/yudai-mori-2004/title-protocol"
                    tags={["C2PA", "Solana", "Web3"]}
                    status="coming-soon"
                />

                <ProjectCard
                    title="RootLens"
                    description="AIが何でも生成できる時代、本当の価値は「実際にそこにいた人の記録」に宿る。カメラのハードウェア署名（C2PA）で撮影の真正性を証明し、ブロックチェーン上でデジタル資産として所有・取引できるマーケットプレイス。無限に生成される世界において、人間の目撃こそが究極の希少性となる。"
                    link="https://github.com/yudai-mori-2004/root-lens"
                    tags={["Solana", "C2PA", "Web3"]}
                />

                <ProjectCard
                    title="Gogourmet"
                    description="SNSで流れて消えた「行きたい店」、もう見失わない。YouTubeグルメインフルエンサーが動画で紹介したレストランを、インフルエンサー別に整理してマップで探せるキュレーションサイト。店舗登録を完全自動化するフローを構築し、複数のインフルエンサーの動画から継続的に新店舗を追加中。気になる店をリスト化して、デートや友人との食事プランを簡単に共有できます。"
                    link="https://gogourmet.jp"
                    tags={["Next.js", "自動化", "マップ検索"]}
                />

                <ProjectCard
                    title="CitizenHub"
                    description="CitizenHubは、住民が少額トークンを担保に具体的な政策提案を行い、コミュニティメンバーが民主的に投票して最も支持された提案を採択するSolanaベースのプラットフォームです。投票の結果、多数派には少数派の担保を分配するインセンティブ設計で市民の能動的参加を促進し、代表制民主主義の限界を補完します。"
                    link="https://github.com/yudai-mori-2004/citizen-hub"
                    tags={["Solana", "DAO", "Web3"]}
                />
            </Box>
        </div>
    )
}

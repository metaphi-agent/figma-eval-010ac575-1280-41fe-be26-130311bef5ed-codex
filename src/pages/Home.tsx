import { Link } from 'react-router-dom'
import { Container } from '../components/blocks/Container'

function Card({
  title,
  description,
  to,
}: {
  title: string
  description: string
  to: string
}) {
  return (
    <Link
      to={to}
      className="group block rounded-[18px] border border-[var(--color-border)] bg-white p-7 transition-colors duration-150 hover:bg-black/[0.02]"
    >
      <div className="text-lg font-bold text-[color:var(--color-heading)]">{title}</div>
      <div className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">{description}</div>
      <div className="mt-5 text-sm font-bold text-[color:var(--color-heading)] underline-offset-4 group-hover:underline">
        Open
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-16">
        <h1 className="text-4xl font-bold tracking-tight text-[color:var(--color-heading)]">
          Pages
        </h1>
        <p className="mt-3 max-w-[60ch] text-base leading-7 text-[color:var(--color-muted)]">
          Two blog page templates converted from the Figma “Startup” kit.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card
            title="page_1"
            description="Hero header + article content with photo and callouts."
            to="/page-1"
          />
          <Card
            title="page_2"
            description="Article with sidebar: last seen, newsletter, most popular."
            to="/page-2"
          />
        </div>
      </Container>
    </div>
  )
}


import { useMemo, useState } from 'react'
import { Container } from '../components/blocks/Container'
import { Button } from '../components/ui/Button'
import { TextInput } from '../components/ui/TextInput'

function MetaLabel({ children }: { children: string }) {
  return (
    <div className="text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--color-muted)]">
      {children}
    </div>
  )
}

function SidebarSectionTitle({ children }: { children: string }) {
  return (
    <div className="text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--color-muted)]">
      {children}
    </div>
  )
}

function SidebarPost({
  imgSrc,
  title,
  date,
}: {
  imgSrc: string
  title: string
  date: string
}) {
  return (
    <a
      href="#"
      className="group flex gap-5 rounded-[14px] p-2 transition-colors duration-150 hover:bg-black/[0.02]"
      onClick={(e) => e.preventDefault()}
    >
      <img
        src={imgSrc}
        alt=""
        loading="lazy"
        className="h-[70px] w-[70px] rounded-[10px] object-cover"
      />
      <div className="min-w-0">
        <div className="text-sm leading-[26px] text-[color:var(--color-heading)] group-hover:underline underline-offset-4">
          {title}
        </div>
        <div className="mt-1 text-sm leading-[26px] text-[color:var(--color-muted)]">{date}</div>
      </div>
    </a>
  )
}

function NewsletterCard() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const isValidEmail = useMemo(() => email.includes('@') && email.includes('.'), [email])

  return (
    <div className="rounded-[18px] border border-[var(--color-border)] bg-white p-7">
      <div className="text-base font-bold text-[color:var(--color-heading)]">Newsletter</div>
      <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">
        Get our news earlier, let’s get in touch.
      </p>

      <form
        className="mt-5 flex items-center gap-3"
        onSubmit={async (e) => {
          e.preventDefault()
          if (!isValidEmail || status === 'sending') return
          setStatus('sending')
          await new Promise((r) => setTimeout(r, 450))
          setStatus('sent')
        }}
      >
        <TextInput
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status !== 'idle') setStatus('idle')
          }}
          placeholder="Your email"
          inputMode="email"
          aria-label="Your email"
        />
        <Button className="h-12 px-7" type="submit" disabled={!isValidEmail || status === 'sending'}>
          {status === 'sending' ? 'Sending' : status === 'sent' ? 'Sent' : 'Send'}
        </Button>
      </form>
    </div>
  )
}

function ArticleFigure({
  src,
  caption,
  lazy,
}: {
  src: string
  caption: string
  lazy?: boolean
}) {
  return (
    <figure className="mt-10">
      <img
        src={src}
        alt=""
        loading={lazy ? 'lazy' : undefined}
        className="w-full rounded-[10px]"
      />
      <figcaption className="mt-4 text-xs leading-5 text-[color:var(--color-muted)]">
        {caption}
      </figcaption>
    </figure>
  )
}

export default function Page2() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[700px_370px] lg:justify-center lg:gap-[100px]">
          <main>
            <h1 className="text-[32px] leading-[40px] font-bold tracking-[-0.02em] text-[color:var(--color-heading)] sm:text-[42px] sm:leading-[52px]">
              To these in the morning I sent the lead who was to enter the hole
            </h1>
            <div className="mt-4">
              <MetaLabel>20 December</MetaLabel>
            </div>

            <p className="mt-6 text-base leading-[26px] text-[color:var(--color-muted)]">
              This sounded nonsense to Alice, so she said nothing, but set off at once toward
              the Red Queen. To her surprise, she lost sight of her in a moment, and found
              herself walking in at the front-door again.
            </p>
            <p className="mt-6 text-base leading-[26px] text-[color:var(--color-muted)]">
              For some minutes Alice stood without speaking, looking out in all directions over
              the country - and a most curious country it was.
            </p>

            <h2 className="mt-10 text-[22px] leading-[32px] font-medium text-[color:var(--color-heading)]">
              Perfect for Your
            </h2>
            <p className="mt-4 text-base leading-[26px] text-[color:var(--color-muted)]">
              The method is this: in an acre of ground you bury, at six inches distance and
              eight deep, a quantity of acorns, dates, chestnuts, and other mast or vegetables,
              whereof these animals are fondest then you drive.
            </p>

            <ArticleFigure src="./assets/images/page2-photo-1.png" caption="photo by Denis" />

            <ArticleFigure
              src="./assets/images/page2-photo-2.png"
              caption="photo by Denis"
              lazy
            />

            <p className="mt-8 text-base leading-[26px] text-[color:var(--color-muted)]">
              When the last &apos;natural&apos; had been declared, and the profit and loss
              account of fish and sixpences adjusted, to the satisfaction of all parties, Mr.
              Bob Sawyer rang for supper, and the visitors squeezed.
            </p>
          </main>

          <aside className="space-y-10">
            <section>
              <SidebarSectionTitle>Last Seen</SidebarSectionTitle>
              <div className="mt-4 space-y-4">
                <SidebarPost
                  imgSrc="./assets/images/last-seen-4.png"
                  title="To these in the morning I sent the lead who was to..."
                  date="19 December"
                />
                <SidebarPost
                  imgSrc="./assets/images/last-seen-1.png"
                  title="When the last 'natural' had been declared, and the profit..."
                  date="13 December"
                />
                <SidebarPost
                  imgSrc="./assets/images/last-seen-3.png"
                  title="Sam's attention that, when this person dismounted..."
                  date="21 December"
                />
                <SidebarPost
                  imgSrc="./assets/images/last-seen-2.png"
                  title="The tattered remains of a checked curtain were drawn round..."
                  date="12 December"
                />
              </div>
            </section>

            <NewsletterCard />

            <section>
              <SidebarSectionTitle>Most Popular</SidebarSectionTitle>
              <div className="mt-4 space-y-4">
                <SidebarPost
                  imgSrc="./assets/images/most-popular-1.png"
                  title="However, I travelled along the shore of the sea towards the..."
                  date="14 December"
                />
                <SidebarPost
                  imgSrc="./assets/images/most-popular-2.png"
                  title="Sam's attention that, when this person dismounted..."
                  date="21 December"
                />
                <SidebarPost
                  imgSrc="./assets/images/most-popular-3.png"
                  title="As we passed, I remarked a beautiful church-spire rising..."
                  date="18 December"
                />
                <SidebarPost
                  imgSrc="./assets/images/most-popular-4.png"
                  title="Lady Crawley, and mother of the young ladies. she was..."
                  date="18 December"
                />
                <SidebarPost
                  imgSrc="./assets/images/most-popular-5.png"
                  title="This I have produced as a scantling of Jack’s great..."
                  date="15 December"
                />
              </div>

              <div className="mt-7">
                <Button variant="pink" className="h-10 px-7 text-xs tracking-[0.14em] uppercase">
                  Load More
                </Button>
              </div>
            </section>
          </aside>
        </div>
      </Container>
    </div>
  )
}


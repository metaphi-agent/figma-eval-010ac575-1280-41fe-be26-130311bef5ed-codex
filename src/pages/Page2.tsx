import { NewsletterCard } from '../components/blocks/NewsletterCard'
import { SidebarPost } from '../components/blocks/SidebarPost'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'

const lastSeen = [
  {
    title: 'To these in the morning I sent the lead who was to...',
    date: '19 December',
    imageSrc: './assets/images/last-seen-4.png',
    imageAlt: 'Last seen post thumbnail',
  },
  {
    title: "When the last 'natural' had been declared, and the profit...",
    date: '13 December',
    imageSrc: './assets/images/last-seen-1.png',
    imageAlt: 'Last seen post thumbnail',
  },
  {
    title: "Sam's attention that, when this person dismounted…",
    date: '21 December',
    imageSrc: './assets/images/last-seen-3.png',
    imageAlt: 'Last seen post thumbnail',
  },
  {
    title: 'The tattered remains of a checked curtain were drawn round...',
    date: '12 December',
    imageSrc: './assets/images/last-seen-2.png',
    imageAlt: 'Last seen post thumbnail',
  },
]

const mostPopular = [
  {
    title: 'However, I travelled along the shore of the sea towards the…',
    date: '14 December',
    imageSrc: './assets/images/most-popular-1.png',
    imageAlt: 'Most popular post thumbnail',
  },
  {
    title: "Sam's attention that, when this person dismounted…",
    date: '21 December',
    imageSrc: './assets/images/most-popular-2.png',
    imageAlt: 'Most popular post thumbnail',
  },
  {
    title: 'As we passed, I remarked a beautiful church-spire rising…',
    date: '18 December',
    imageSrc: './assets/images/most-popular-3.png',
    imageAlt: 'Most popular post thumbnail',
  },
  {
    title: 'Lady Crawley, and mother of the young ladies. she was…',
    date: '18 December',
    imageSrc: './assets/images/most-popular-4.png',
    imageAlt: 'Most popular post thumbnail',
  },
  {
    title: "This I have produced as a scantling of Jack’s great...",
    date: '15 December',
    imageSrc: './assets/images/most-popular-5.png',
    imageAlt: 'Most popular post thumbnail',
  },
]

export default function Page2() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Container className="py-[56px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[700px_370px] lg:gap-[100px]">
            <article>
              <h1 className="text-[36px] leading-[44px] font-bold tracking-[-0.4px] text-[var(--color-heading)] sm:text-[42px] sm:leading-[52px]">
                To these in the morning I sent the lead who was to enter the hole
              </h1>

              <p className="mt-3 text-[14px] leading-[26px] font-bold uppercase tracking-[2px] text-[var(--color-muted)]">
                20 December
              </p>

              <p className="mt-5 text-[18px] leading-[28px] font-medium text-[var(--color-heading)]">
                This sounded nonsense to Alice, so she said nothing, but set off
                at once toward the Red Queen. To her surprise, she lost sight of
                her in a moment, and found herself walking in at the front-door
                again.
              </p>
              <p className="mt-5 text-[18px] leading-[28px] font-medium text-[var(--color-heading)]">
                For some minutes Alice stood without speaking, looking out in all
                directions over the country - and a most curious country it was.
              </p>

              <h2 className="mt-8 text-[22px] leading-[32px] font-medium text-[var(--color-heading)]">
                Perfect for Your
              </h2>
              <p className="mt-3 text-[16px] leading-[26px] text-[var(--color-muted)]">
                The method is this: in an acre of ground you bury, at six inches
                distance and eight deep, a quantity of acorns, dates, chestnuts,
                and other mast or vegetables, whereof these animals are fondest
                then you drive.
              </p>

              <img
                src="./assets/images/page2-photo-1.png"
                alt="Article photo"
                loading="lazy"
                className="mt-8 w-full rounded-[10px] object-cover"
              />
              <p className="mt-3 text-[16px] leading-[26px] text-[var(--color-muted)]">
                photo by Denis
              </p>

              <p className="mt-5 text-[16px] leading-[26px] text-[var(--color-muted)]">
                The tattered remains of a checked curtain were drawn round the
                bed&apos;s head, to exclude the wind, which, however, made its way
                into the comfortless room through the numerous chinks in the
                door.
              </p>

              <img
                src="./assets/images/page2-photo-2.png"
                alt="Article photo"
                loading="lazy"
                className="mt-8 w-full rounded-[10px] object-cover"
              />
              <p className="mt-3 text-[16px] leading-[26px] text-[var(--color-muted)]">
                photo by Denis
              </p>

              <p className="mt-5 text-[16px] leading-[26px] text-[var(--color-muted)]">
                When the last &apos;natural&apos; had been declared, and the profit
                and loss account of fish and sixpences adjusted, to the
                satisfaction of all parties, Mr. Bob Sawyer rang for supper, and
                the visitors squeezed.
              </p>
            </article>

            <aside>
              <section>
                <p className="text-[14px] leading-[26px] font-bold uppercase tracking-[2px] text-[var(--color-muted)]">
                  Last Seen
                </p>

                <div className="mt-5 flex flex-col gap-[26px]">
                  {lastSeen.map((p) => (
                    <SidebarPost key={`${p.title}-${p.date}`} {...p} />
                  ))}
                </div>
              </section>

              <div className="mt-11">
                <NewsletterCard />
              </div>

              <section className="mt-11">
                <p className="text-[14px] leading-[26px] font-bold uppercase tracking-[2px] text-[var(--color-muted)]">
                  Most Popular
                </p>
                <div className="mt-5 flex flex-col gap-[26px]">
                  {mostPopular.map((p) => (
                    <SidebarPost key={`${p.title}-${p.date}`} {...p} />
                  ))}
                </div>

                <div className="mt-7">
                  <Button variant="pink" className="w-[130px]">
                    Load More
                  </Button>
                </div>
              </section>
            </aside>
          </div>
        </Container>
      </main>
    </div>
  )
}

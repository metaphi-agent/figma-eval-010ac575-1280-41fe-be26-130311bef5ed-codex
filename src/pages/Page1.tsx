import { Container } from '../components/blocks/Container'

function SocialIcon({ src, label }: { src: string; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-150 hover:bg-white/10"
      onClick={(e) => e.preventDefault()}
    >
      <img src={src} alt="" className="h-4 w-4 opacity-90" />
    </a>
  )
}

export default function Page1() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[var(--color-hero-bg)] text-white">
        <Container className="pt-20 pb-16">
          <div className="max-w-[820px]">
            <div className="text-sm font-bold tracking-[0.14em] uppercase opacity-90">
              Splashproof Design
            </div>
            <h1 className="mt-5 text-[44px] leading-[52px] font-bold tracking-[-0.02em] sm:text-[58px] sm:leading-[70px] sm:tracking-[-0.03em]">
              How To Protect Computer.
              <br />
              Very Useful Tips
            </h1>

            <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-5">
                <img
                  src="./assets/images/author-avatar.png"
                  alt="Samuel Aubley"
                  className="h-[60px] w-[60px] rounded-full"
                />
                <div>
                  <div className="text-base font-bold leading-6">Samuel Aubley</div>
                  <div className="mt-1 text-sm leading-6 opacity-60">
                    Having the world. Shaping the world.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:ml-3">
                <SocialIcon src="./assets/icons/twitter.svg" label="Twitter" />
                <SocialIcon src="./assets/icons/facebook.svg" label="Facebook" />
                <SocialIcon src="./assets/icons/dribbble.svg" label="Dribbble" />
                <SocialIcon src="./assets/icons/instagram.svg" label="Instagram" />
              </div>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <Container className="py-16">
          <article className="mx-auto max-w-[770px]">
            <h2 className="text-[34px] leading-[44px] font-bold tracking-[-0.02em] text-[color:var(--color-heading)] sm:text-[42px] sm:leading-[52px]">
              Branding
            </h2>
            <p className="mt-5 text-base leading-[26px] text-[color:var(--color-muted)]">
              This sounded nonsense to Alice, so she said nothing, but set off at once toward
              the Red Queen. To her surprise, she lost sight of her in a moment, and found
              herself walking in at the front-door again.
            </p>
            <p className="mt-6 text-base leading-[26px] text-[color:var(--color-muted)]">
              For some minutes Alice stood without speaking, looking out in all directions over
              the country - and a most curious country it was. There were a number of tiny
              little brooks running straight across it from side to side, and the ground between
              was divided up into squares by a number of little.
            </p>

            <h3 className="mt-10 text-[22px] leading-[32px] font-medium text-[color:var(--color-heading)]">
              Perfect for Your
            </h3>
            <p className="mt-4 text-base leading-[26px] text-[color:var(--color-muted)]">
              She gave my mother such a turn, that I have always been convinced I am indebted
              to Miss Betsey for having been born on a Friday. The word was appropriate to the
              moment.
            </p>

            <figure className="mt-10">
              <img
                src="./assets/images/page1-hero-photo.png"
                alt="Article photo"
                loading="lazy"
                className="w-full rounded-[10px]"
              />
              <figcaption className="mt-5 text-xs font-bold tracking-[0.14em] uppercase text-[color:var(--color-muted)]">
                There have not been any since
              </figcaption>
            </figure>

            <h3 className="mt-10 text-[22px] leading-[32px] font-medium text-[color:var(--color-heading)]">
              The Fall Report
            </h3>
            <p className="mt-4 text-base leading-[26px] text-[color:var(--color-muted)]">
              This sounded nonsense to Alice, so she said nothing, but set off at once toward
              the Red Queen. To her surprise, she lost sight of her in a moment, and found
              herself walking in at the front-door again.
            </p>

            <ul className="mt-7 space-y-5">
              <li className="flex gap-4">
                <span className="mt-2 h-3 w-3 shrink-0 rounded-full border-2 border-[color:var(--color-heading)]" />
                <p className="text-[18px] leading-[28px] font-medium text-[color:var(--color-heading)]">
                  Thus much I thought proper to tell you in relation to yourself, and to the
                  trust I reposed in you.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="mt-2 h-3 w-3 shrink-0 rounded-full border-2 border-[color:var(--color-heading)]" />
                <p className="text-[18px] leading-[28px] font-medium text-[color:var(--color-heading)]">
                  So saying he unbuckled his baldric with the bugle, took a feather from his
                  cap, and gave them to Wamba.
                </p>
              </li>
            </ul>

            <p className="mt-7 text-base leading-[26px] text-[color:var(--color-muted)]">
              She gave my mother such a turn, that I have always been convinced I am indebted
              to Miss Betsey for having been born on a Friday. The word was appropriate to the
              moment.
            </p>
          </article>
        </Container>
      </main>
    </div>
  )
}


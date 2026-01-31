import { Container } from '../components/ui/Container'

function HeroSocialLink({
  href,
  iconSrc,
  label,
}: {
  href: string
  iconSrc: string
  label: string
}) {
  return (
    <a
      href={href}
      aria-label={label}
      onClick={(e) => e.preventDefault()}
      className="inline-flex h-6 w-6 items-center justify-center text-white/90 transition-opacity duration-150 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-purple)]"
    >
      <img src={iconSrc} alt="" className="h-4 w-4 opacity-90" />
    </a>
  )
}

export default function Page1() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[var(--color-purple)]">
        <Container className="py-[88px]">
          <div className="mx-auto max-w-[780px]">
            <p className="text-[14px] leading-[26px] font-bold uppercase tracking-[2px] text-white">
              Splashproof Design
            </p>
            <h1 className="mt-3 text-[44px] leading-[52px] font-bold tracking-[-0.4px] text-white sm:text-[58px] sm:leading-[70px] sm:tracking-[-1px]">
              How To Protect Computer.
              <br />
              Very Useful Tips
            </h1>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
              <img
                src="./assets/images/author-avatar.png"
                alt="Samuel Audley"
                className="h-[100px] w-[100px] rounded-full object-cover"
              />

              <div className="min-w-0">
                <p className="text-[14px] leading-[26px] font-bold uppercase tracking-[2px] text-white">
                  Samuel Audley
                </p>
                <p className="mt-[6px] text-[16px] leading-[26px] text-white/70">
                  Saving the world. Shaping the world.
                </p>
                <div className="mt-[10px] flex items-center gap-5">
                  <HeroSocialLink
                    href="#"
                    iconSrc="./assets/icons/twitter.svg"
                    label="Twitter"
                  />
                  <HeroSocialLink
                    href="#"
                    iconSrc="./assets/icons/facebook.svg"
                    label="Facebook"
                  />
                  <HeroSocialLink
                    href="#"
                    iconSrc="./assets/icons/dribbble.svg"
                    label="Dribbble"
                  />
                  <HeroSocialLink
                    href="#"
                    iconSrc="./assets/icons/instagram.svg"
                    label="Instagram"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <Container className="py-[64px]">
          <article className="mx-auto max-w-[770px]">
            <h2 className="text-[42px] leading-[52px] font-bold tracking-[-0.4px] text-[var(--color-heading)]">
              Branding
            </h2>

            <p className="mt-4 text-[16px] leading-[26px] text-[var(--color-muted)]">
              This sounded nonsense to Alice, so she said nothing, but set off at
              once toward the Red Queen. To her surprise, she lost sight of her
              in a moment, and found herself walking in at the front-door again.
            </p>
            <p className="mt-4 text-[16px] leading-[26px] text-[var(--color-muted)]">
              For some minutes Alice stood without speaking, looking out in all
              directions over the country - and a most curious country it was.
              There were a number of tiny little brooks running straight across
              it from side to side, and the ground between was divided up into
              squares by a number of little.
            </p>

            <h3 className="mt-[28px] text-[22px] leading-[32px] font-medium text-[var(--color-heading)]">
              Perfect for Your
            </h3>
            <p className="mt-3 text-[16px] leading-[26px] text-[var(--color-muted)]">
              She gave my mother such a turn, that I have always been convinced I
              am indebted to Miss Betsey for having been born on a Friday. The
              word was appropriate to the moment.
            </p>

            <img
              src="./assets/images/page1-hero-photo.png"
              alt="Article feature"
              loading="lazy"
              className="mt-6 w-full rounded-[10px] object-cover"
            />

            <p className="mt-4 text-[14px] leading-[26px] font-bold uppercase tracking-[2px] text-[var(--color-muted)]">
              There have not been any since
            </p>
            <h3 className="mt-2 text-[22px] leading-[32px] font-medium text-[var(--color-heading)]">
              The Fall Report
            </h3>
            <p className="mt-3 text-[16px] leading-[26px] text-[var(--color-muted)]">
              This sounded nonsense to Alice, so she said nothing, but set off at
              once toward the Red Queen. To her surprise, she lost sight of her
              in a moment, and found herself walking in at the front-door again.
            </p>

            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex gap-3">
                <span className="mt-[7px] h-3 w-3 shrink-0 rounded-full border-2 border-[var(--color-heading)]" />
                <p className="text-[18px] leading-[28px] font-medium text-[var(--color-heading)]">
                  Thus much I thought proper to tell you in relation to yourself,
                  and to the trust I reposed in you.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-[7px] h-3 w-3 shrink-0 rounded-full border-2 border-[var(--color-heading)]" />
                <p className="text-[18px] leading-[28px] font-medium text-[var(--color-heading)]">
                  So saying he unbuckled his baldric with the bugle, took a
                  feather from his cap, and gave them to Wamba.
                </p>
              </li>
            </ul>

            <p className="mt-6 text-[16px] leading-[26px] text-[var(--color-muted)]">
              She gave my mother such a turn, that I have always been convinced I
              am indebted to Miss Betsey for having been born on a Friday. The
              word was appropriate to the moment.
            </p>
          </article>
        </Container>
      </main>
    </div>
  )
}

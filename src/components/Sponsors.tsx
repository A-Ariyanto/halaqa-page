import Image from 'next/image'

import { Container } from '@/components/Container'
import isocLogo from '@/images/logos/ISOC-UNSW-Logo.png'
import myFundActionLogo from '@/images/logos/my-fund-action-logo-new.avif'
import yoshHalaqaLogo from '@/images/logos/yosh-logo.png'
import arcClubLogo from '@/images/logos/arc-club-logo.png'

const sponsors = [
  { name: 'ISOC', logo: isocLogo },
  { name: 'MyFundAction', logo: myFundActionLogo },
  { name: 'ARC Club', logo: arcClubLogo },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-orange-900 sm:text-5xl">
          Current sponsorships for our halaqa and speakers.
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

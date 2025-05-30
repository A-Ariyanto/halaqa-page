import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24">
      <BackgroundImage className="-top-36 -bottom-14" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-orange-600 sm:text-7xl">
            <span className="sr-only">ISOC Halaqa - </span>
            More Than a Halaqa <br />A Place to Belong
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-orange-900">
            <p>
              University can feel really lonely sometimes — especially when you're buried under assignments 
              and deadlines. And you're not alone in feeling that. Many students feel disconnected, 
              even in a busy campus like this.
            </p>
            <p>
              But as Muslims, we’re encouraged by the Prophet Muhammad ﷺ to build brotherhood — to 
              bond, support, and uplift one another. That connection can be a source of strength in 
              both our deen and our dunya
            </p>
            <p>
              That’s what this halaqa is about. It’s a space under ISOC where you can learn more 
              about Allah ﷻ and the call to da’wah, while also meeting brothers who might just 
              become close companions on your journey.
            </p>
            <p>
              Two birds with one stone — build knowledge and real connections. Come for the reminder, 
              stay for the snacks, and leave with something meaningful inshaAllah.
            </p>
          </div>
          <Button href="#qrCode" className="mt-10 w-full sm:hidden">
            Join our Halaqa now!
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', '4'],
              ['People Attending', '25+'],
              ['Venue', 'Squarehouse'],
              ['Location', 'UNSW Kensington'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-orange-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-orange-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}

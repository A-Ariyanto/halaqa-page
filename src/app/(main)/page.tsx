import { Hero } from '@/components/Hero'
import { QrCode } from '@/components/QrCode'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Hero />
      <Speakers />
      <Schedule />
      <Sponsors />
      <QrCode />
    </>
  )
}
 
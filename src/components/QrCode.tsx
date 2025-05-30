import Image from 'next/image'

import qrCodes from '@/images/qr-codes.png'
import ISOC_halaqa_group from '@/images/ISOC-halaqa-qr-code.png'
import YOSH_circle_group from '@/images/YOSH-qr-code.png'

export function QrCode() {
  return (
    <section id="qrCode" aria-label="QRCode" className="py-20">
      <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-orange-900 sm:text-5xl">
        Join our Whatsapp group for updates and announcements
      </h2>
      <div className="mx-auto flex min-h-[16rem] max-w-3xl flex-col items-center justify-center gap-8 sm:flex-row">
        <Image
          src={ISOC_halaqa_group}
          alt="ISOC Halaqa QR Code"
          width={1300}
          height={1300}
          className="h-128 w-128 object-contain"
          unoptimized
        />
        <Image
          src={YOSH_circle_group}
          alt="YOSH Circle QR Code"
          width={1300}
          height={1300}
          className="h-128 w-128 object-contain"
          unoptimized
        />
      </div>
    </section>
  )
}

import Image from 'next/image'

import qrCodes from '@/images/qr-codes.png'

export function QrCode() {
  return (
    <section id="qrCode" aria-label="QRCode" className="py-20">
       <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-orange-900 sm:text-5xl">
          Please join our Whatsapp group for updates and announcements.
        </h2>
      <div className="flex justify-center items-center min-h-[16rem]">
        <Image
          src={qrCodes}
          alt="QR Codes"
          width={1300}
          height={1300}
          className="object-contain"
          unoptimized
        />
      </div>
    </section>
  )
}

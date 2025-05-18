import Image from 'next/image'

import qrCodes from '@/images/qr-codes.png'

export function Newsletter() {
  return (
    <section id="qrCode" aria-label="QRCode" className="py-20">
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

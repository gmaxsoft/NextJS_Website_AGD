export const metadata = {
  title: 'Candy - Naprawa pralek Świebodzin, zmywarek, Chodkiewicz, suszarek i ekspresów do kawy. Świebodzin, Międzyrzecz, Sulechów, płyty indukcyjne',
  description: 'Chodkiewicz - Naprawa pralek, zmywarek, suszarek i ekspresów do kawy. Świebodzin, Międzyrzecz, Sulechów,Lubrza,części zamienne, Naprawa płyt indukcyjnych',
  keywords: 'Świebodzin, Międzyrzecz, Sulechów ,Lubrza,Naprawa, pralek,pralki, zmywarki, naprawa zmywarek, naprawa pralek, serwis, agd, części zamienne, Krosno Odrzańskie, Chodkiewicz, Naprawa płyt indukcyjnych',
  creator: 'Maxsoft',
  publisher: 'Serwis AGD - Świebodzin',
  openGraph: {
    title: 'Serwis AGD Chodkiewicz - Naprawa pralek i zmywarek',
    description: 'Chodkiewicz - Naprawa pralek, zmywarek, suszarek i ekspresów do kawy. Świebodzin, Międzyrzecz, Sulechów,Lubrza,części zamienne',
    url: 'https://www.serwisagd.swiebodzin.pl/',
    siteName: 'Serwis AGD',
    locale: 'pl_PL',
    images: '/opengraph-image.jpg'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serwis AGD Chodkiewicz - Naprawa pralek i zmywarek Świebodzin',
    description: 'Chodkiewicz - Naprawa pralek Świebodzin, zmywarek, suszarek i ekspresów do kawy. Świebodzin, Międzyrzecz, Sulechów,Lubrza,części zamienne',
    images: '/twitter-image.jpg'
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/candy/",
  }
}

export default function Marka() {
  return (
    <>
      <section className="py-lg-7 py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-12 col-12">
              <div className="text-center mb-lg-6 mb-5">
                <h2 className="mb-3">Candy</h2>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-12">
              <div className="pageContentTxt">
                <p>Candy S.p.A. - Włoska grupa przemysłowa produkująca sprzęt AGD, głównie pod marką Candy. W 1995 roku Candy przejęła w Europie markę Hoover.</p>
                <p>Firma Candy została założona w 1945 roku przez rodzinę Fumagalli, która do dziś jest właścicielem grupy. Za początek istnienia marki uznaje się wyprodukowanie pralki model 50. Była to pierwsza pralka całkowicie włoskiej produkcji. Siedziba główna grupy mieści się w Brugherio we Włoszech.</p>
              </div>
              <div className='tags mt-5'>
                <strong>Tagi:</strong> Candy, <b>Serwis Candy</b>, Części Candy, programator Candy, <b>łożyska Candy</b>, pralki Candy, zmywarki Candy
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export const metadata = {
  title: 'Miele - Naprawa pralek Świebodzin, zmywarek, Chodkiewicz, suszarek i ekspresów do kawy. Świebodzin, Międzyrzecz, Sulechów, części zamienne',
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
    canonical: "/miele/",
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
                <h2 className="mb-3">Miele</h2>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-12">
              <div className="pageContentTxt">
                <p>Miele & Cie. KG - niemieckie przedsiębiorstwo zajmujące się produkcją artykułów gospodarstwa domowego (m.in. pralek, chłodziarek, ekspresów do kawy, zmywarek do naczyń, piekarników). Siedziba przedsiębiorstwa znajduje się w Gütersloh, w kraju związkowym Nadrenia Północna-Westfalia, w Niemczech. Firma ma obecnie swoje przedstawicielstwa w 47 krajach</p>
                <p>Przedsiębiorstwo założyli w 1899 roku Carl Miele i Reinhard Zinkann, a dziś rodzinnym przedsiębiorstwem kieruje już czwarte pokolenie rodzin założycieli.</p>
              </div>
              <div className='tags mt-5'>
                <strong>Tagi:</strong> Miele, <b>Serwis Miele</b>, Części Miele, programator Miele, <b>łożyska Miele</b>, pralki Miele, zmywarki Miele
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
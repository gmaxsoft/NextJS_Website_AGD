export const metadata = {
  title: 'Amica - Naprawa pralek Świebodzin, zmywarek, Chodkiewicz, suszarek i ekspresów do kawy. Świebodzin, Międzyrzecz, Sulechów, płyty indukcyjne',
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
    canonical: "/amica/",
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
                                <h2 className="mb-3">Amica</h2>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-12">
                            <div className="pageContentTxt">
                             <p>Amica SA - polski producent przemysłu elektromaszynowego, głównie sprzętu AGD, założony w 1945 roku we Wronkach. Od 1997 spółka jest notowana na Giełdzie Papierów Wartościowych w Warszawie.</p> 
                             <p>Grupa Amica generuje ponad 70% przychodów dzięki sprzedaży na ponad 50 rynkach zagranicznych. Największą popularnością cieszy się w Niemczech, Wielkiej Brytanii i Skandynawii. W portfolio marek Grupy Amica znajdują się również zagraniczne marki: Gram, Hansa i CDA. Gram to duńska marka istniejąca od 1901 roku, przejęta przez Amikę w 2001 roku i znana w Skandynawii. Hansa to marka występująca na rynkach Europy Wschodniej. CDA to brytyjska marka przejęta w 2015 roku i rozpoznawalna w takich kanałach dystrybucyjnych jak studia mebli kuchennych. W 2017 roku Amica dokupiła 60,71% akcji spółki Sideme SA Societe Industrielle d’Equipement Moderne, jednego z dystrybutorów AGD we Francji. Po zakupie 39,29% akcji w sierpniu 2015 roku Amica posiada już 100% Sideme. Całkowita cena zakupu wszystkich akcji francuskiej spółki wyniosła 5,4 mln EUR, co zostało sfinansowane ze środków własnych.</p>  
                            </div>
                            <div className='tags mt-5'>
                              <strong>Tagi:</strong> Amica, <b>Serwis Amica</b>, Części Amica, programator Amica, <b>łożyska Amica</b>, pralki Amica, zmywarki Amica
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}
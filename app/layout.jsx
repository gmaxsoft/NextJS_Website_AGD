import { Inter } from 'next/font/google'
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import BootstrapClient from '@/components/BootstrapClient'
import Seo from '@/components/Seo'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const revalidate = 3600

export const metadata = {
  metadataBase: new URL('https://www.serwisagd.swiebodzin.pl/'),
  title: 'Naprawa pralek Świebodzin, zmywarek, Chodkiewicz, suszarek i ekspresów do kawy. Świebodzin, Międzyrzecz, Sulechów, Lubrza, części zamienne, płyty indukcyjne',
  description: 'Chodkiewicz - Naprawa pralek, zmywarek, suszarek i ekspresów do kawy. Świebodzin, Międzyrzecz, Sulechów,Lubrza,części zamienne, Naprawa płyt indukcyjnych',
  keywords: 'Świebodzin, Międzyrzecz, Sulechów ,Lubrza,Naprawa, pralek,pralki, zmywarki, naprawa zmywarek, naprawa pralek, serwis, agd, części zamienne, Krosno Odrzańskie, Chodkiewicz, Naprawa płyt indukcyjnych',
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
    canonical: "/",
  }
};

export default function RootLayout({ children }) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "url": "https://www.serwisagd.swiebodzin.pl/",
    "name": "Serwis Agd Świebodzin - Naprawa pralek i zmywarek",
    "alternateName": "Naprawa pralek Świebodzin, zmywarek, Chodkiewicz, suszarek i ekspresów do kawy.",
    "description": "Chodkiewicz - Naprawa pralek, zmywarek, suszarek i ekspresów do kawy. Świebodzin, Międzyrzecz, Sulechów,Lubrza,części zamienne, Naprawa płyt indukcyjnych",
    "openingHours": "Poniedziałek, Wtorek, Środa, Czwartek, Piątek, Sobota po ugodnieniu telefoninczym, Niedziela NIECZYNNE",
    "image": "https://www.serwisagd.swiebodzin.pl/opengraph-image.jpg",
    "telephone": "+48600641862",
    "priceRange": "od 100,- PLN",
    "address":
    {
      "@type": "PostalAddress",
      "addressCountry": "PL",
      "addressRegion": "Lubuskie",
      "addressLocality": "Świebodzin",
      "postalCode": "66-200",
      "streetAddress": "Wałowa 56"
    }
    ,
    "contactPoint":
    {
      "@type": "ContactPoint",
      "telephone": "+48600641862",
      "contactType": "Rezerwacja"
    }
  };

  return (
    <>
      <html lang="pl" itemScope itemType='http://schema.org/WebPage'>
        <body>
          <main>
            <Header />
            <Navigation />
            {children}
          </main>
          <Footer />
          <ScrollToTopButton />
          <BootstrapClient />
          <Seo />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </body>
      </html>
    </>
  )
}
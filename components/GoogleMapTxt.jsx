"use client"

import Image from 'next/image'
import GoogleMapTag from '@/components/GoogleFrameMap'

const GoogleMapTxt = () => {
    return (
        <section className="py-lg-7 py-5 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="text-center mb-lg-6 mb-5">
                            <h2 className="mb-4 ">Znajdź nasz punkt na mapie</h2>
                            <p className="mb-0">Uwaga! Wizyta w punkcie tylko po uprzednim potwierdzeniu telefoniczym</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <GoogleMapTag />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GoogleMapTxt
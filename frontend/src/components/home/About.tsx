import aboutImg from "../../assets/aboutImg.png";


const About = () => {
    return (
        <main className='w-full flex flex-col items-start my-24'>
            <div className="w-full grid md:grid-cols-2 gap-20 lg:px-28 px-4">
                <div className="w-full relative before:bg-gradient-to-t before:absolute before:w-full before:h-full flex justify-between items-center">
                    <img src={aboutImg} alt="aboutImage" />
                </div>
                <div className="flex flex-col items-start gap-1.5">
                    <h1 className="text-3xl text-color5 font-belanosima">About Flow8</h1>
                    <p className="text-gray-500 font-barlow">At Flow8, we're revolutionizing decentralized finance (DeFi) with our innovative token streaming application. Our mission is to empower individuals and businesses to automate financial processes seamlessly, making transactions faster, more efficient, and hassle-free.</p>
                    <h3 className="text-xl text-color4 font-belanosima mt-4">Our Vision</h3>
                    <p className="text-gray-500 font-barlow">We envision a future where financial transactions are as fluid as streams, where tokens flow effortlessly to their intended destinations without the need for manual intervention. With Flow8, we're turning this vision into reality by providing a secure and user-friendly platform for continuous, real-time token streaming.</p>
                    <h3 className="text-xl text-color4 font-belanosima mt-4">Our Mission</h3>
                    <p className="text-gray-500 font-barlow">Our mission at Flow8 is simple: to create user-friendly solutions that streamline financial transactions in the decentralized ecosystem. We're committed to innovating DeFi with cutting-edge technology while ensuring the security and privacy of our users' assets and data. By doing so, we aim to make DeFi accessible to all, regardless of geographical or socioeconomic barriers.</p>
                </div>
            </div>
        </main>
    )
}

export default About
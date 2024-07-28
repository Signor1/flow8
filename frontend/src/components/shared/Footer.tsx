import { RxDiscordLogo } from "react-icons/rx"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { LegalLinks, NavLinks, OtherLinks } from "../../cms/Navlinks"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link as Spy } from 'react-scroll';

const Footer = () => {
    // state for year
    const [year, setYear] = useState<string | number>("");

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, [year]);

    return (
        <footer className="w-full lg:h-[560px] md:h-[740px] h-[960px] display flex justify-center items-end relative">
            <div className="w-full ">

            </div>
            <main className="flex flex-col w-full h-full absolute top-0 bg-color3 rounded-md">
                <div className="w-full h-auto md:py-16 md:px-10 py-10 px-6 flex md:flex-row flex-col gap-3 justify-between md:items-center items-start border-b border-color2">
                    <h1 className="lg:text-3xl md:text-2xl text-xl text-color5 font-light font-belanosima">Get Regular Updates</h1>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="email" className="bg-color3 border border-color5  font-barlow text-color5 outline-none" placeholder="Email" />
                        <Button type="button" className="text-gray-100 text-sm font-barlow px-4 py-2 bg-color5 hover:bg-color4 ">Subscribe</Button>
                    </div>
                </div>

                <section className="w-full md:py-16 py-10 px-8 h-auto grid lg:grid-cols-4 md:grid-cols-2 lg:gap-4 gap-8 border-b border-color2">
                    <div className="bg-gradient-to-r from-color4 to-color5 p-6 rounded-md flex flex-col justify-center gap-3 items-center">
                        <h1 className="md:text-xl text-gray-200 text-center font-belanosima">Join Our Blockchain Community</h1>
                        <Button type="button" className="text-gray-100 text-sm font-barlow px-4 py-2 bg-color5 hover:bg-color4 flex items-center gap-1 ">
                            <RxDiscordLogo />
                            Join
                        </Button>
                    </div>

                    <div className="flex flex-col justify-start gap-3 md:items-center items-start">
                        <h3 className="md:text-xl text-color5 text-center font-belanosima">Quick Links</h3>
                        {
                            NavLinks.map(({ name, path }, index) => (
                                <Spy to={path} smooth={true} spy={true} activeClass="" duration={500} key={index} className="text-color1 font-barlow text-sm transition-all duration-200 hover:mr-2">{name}</Spy>
                            ))
                        }
                    </div>

                    <div className="flex flex-col justify-start gap-3 md:items-center items-start">
                        <h3 className="md:text-xl text-color5 text-center font-belanosima">Other Links</h3>
                        {
                            OtherLinks.map(({ name, path }, index) => (
                                <Link to={path} key={index} className="text-color1 font-barlow text-sm transition-all duration-200 hover:mr-2">{name}</Link>
                            ))
                        }
                    </div>

                    <div className="flex flex-col justify-start gap-3 md:items-center items-start">
                        <h3 className="md:text-xl text-color5 text-center font-belanosima">Legal Links</h3>
                        {
                            LegalLinks.map(({ name, path }, index) => (
                                <Link to={path} key={index} className="text-c font-barlow text-sm transition-all duration-200 hover:mr-2">{name}</Link>
                            ))
                        }
                    </div>
                </section>

                <div className="w-full h-full flex px-8 justify-center items-center">
                    <p className="text-gray-400 font-barlow text-sm">Copyright © {year} StreamFlow. All rights reserved</p>
                </div>
            </main>
        </footer>
    )
}

export default Footer
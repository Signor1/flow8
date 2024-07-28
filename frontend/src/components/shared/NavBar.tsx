import { NavLinks } from "../../cms/Navlinks";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom"
import { Button } from "../ui/button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { LuLogIn } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { Link as Spy } from 'react-scroll';
import { useWalletInfo, useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { WalletConnected } from "@/utils/WalletConnected";
import { useNavigate } from "react-router-dom"
import { TbCircle8Filled } from "react-icons/tb";


const NavBar = () => {
    const { open } = useWeb3Modal()
    const { address, isConnected } = useWeb3ModalAccount()
    const { walletInfo } = useWalletInfo()

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleToggle = () => {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
        const toggleScroll = () => {
            document.body.style.overflow = openMenu ? 'hidden' : 'auto';
        };
        toggleScroll();

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openMenu]);


    const navigate = useNavigate();

    const change = useCallback(async () => {
        if (isConnected) {
            navigate("/signup");
        }
    }, [isConnected, navigate]);

    useEffect(() => {
        change();
    }, [change, isConnected]);

    return (
        <header className="w-full bg-color1 flex justify-between items-center py-6 md:px-8 px-3 overflow-hidden ">
            <Link to='/' className="flex items-center bg-gradient-to-r from-color4 to-color5 text-transparent bg-clip-text">
                <span className=" font-belanosima md:text-xl text-xl">Flow</span>
                <TbCircle8Filled className="md:text-2xl text-2xl text-color5" />
            </Link>

            <ul className="lg:flex hidden items-center gap-10">
                {
                    NavLinks.map(({ name, path }, index) => (
                        <li className="block list-none group" key={index}>
                            <Spy to={path} smooth={true} spy={true} activeClass="before:w-2 before:h-2" duration={500} className={`text-base relative font-barlow text-color5 before:absolute before:bottom-1 before:-left-2.5 before:bg-gradient-to-tr before:from-color2 before:to-color3 before:rounded-full before:transition-all before:duration-300 hover:before:w-2 hover:before:h-2`} >{name}</Spy>
                        </li>
                    ))
                }
            </ul>

            <aside className="flex items-center lg:gap-6 gap-2">
                <select className="border-none hidden md:inline-block text-sm outline-none bg-transparent text-color5 font-barlow">
                    <option value="EN" selected>EN</option>
                    <option value="ITA">ITA</option>
                    <option value="FRA">FRA</option>
                </select>

                <Button onClick={() => open()} className="text-white text-sm font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-color5 hover:bg-color4">
                    {
                        isConnected ? <WalletConnected address={address} icon={walletInfo?.icon} /> : <>
                            <span>Connect Wallet</span>
                            <LuLogIn className="text-lg hidden md:flex" />
                        </>
                    }
                </Button>

                <Button onClick={handleToggle} className="lg:hidden bg-color1 hover:bg-color2 flex text-2xl border border-color5 px-2 text-color5" type="button">
                    <HiOutlineMenuAlt3 />
                </Button>
            </aside>

            {/* Mobile */}
            <div className={`fixed top-0 z-[999] w-full h-screen bg-gray-950/70 transition-all duration-[500ms] ease-[cubic-bezier(0.86,0,0.07,1)] lg:hidden flex justify-end ${openMenu ? "left-0" : "left-[100%]"}`}>
                <div className={`w-[80%] h-full bg-color3 border-l-2 border-color4/80 flex flex-col gap-10 transition-all duration-[500ms] ease-[cubic-bezier(0.86,0,0.07,1)] px-6 py-8 delay-300 ${openMenu ? "translate-x-0" : "translate-x-full"}`}>
                    <header className="flex justify-between items-center w-full">
                        <Link to='/' className="flex items-center bg-gradient-to-r from-color2 to-color1 text-transparent bg-clip-text">
                            <span className=" font-belanosima md:text-xl text-xl">Flow</span>
                            <TbCircle8Filled className="md:text-2xl text-2xl text-color1" />
                        </Link>
                        <div className="flex gap-4 items-center">
                            <select className="border-none text-sm outline-none bg-transparent text-gray-200 font-barlow">
                                <option value="EN" selected>EN</option>
                                <option value="ITA">ITA</option>
                                <option value="FRA">FRA</option>
                            </select>
                            <Button type="button" onClick={handleToggle} className="lg:hidden flex text-2xl bg-color3 hover:bg-color3 border border-color1 px-2 text-color1">
                                <IoCloseOutline />
                            </Button>
                        </div>
                    </header>


                    <ul className="flex flex-col lg:hidden mt-6 items-start gap-6">
                        {
                            NavLinks.map(({ name, path }, index) => (
                                <li className="block relative list-none group" key={index}>
                                    <Spy to={path} smooth={true} spy={true} activeClass="before:w-2 before:h-2" duration={500} onClick={handleToggle} className={`text-base relative font-barlow text-white before:absolute before:bottom-1 before:-left-2.5 before:bg-gradient-to-tr before:from-color4 before:to-color5 before:rounded-full before:transition-all before:duration-300 hover:before:w-2 hover:before:h-2`}>{name}</Spy>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default NavBar
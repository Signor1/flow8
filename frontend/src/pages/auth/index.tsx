/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import coverImg from "../../assets/authImage.webp";
import { Button } from "@/components/ui/button";
import { TbLoaderQuarter } from "react-icons/tb";
import { PiSignInFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { WalletConnected } from "@/utils/WalletConnected";
import { useWalletInfo, useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import useRegisterUsers from "@/hooks/useRegisterUsers";
import { toast } from "sonner";
import { useCheckRegisteredUser } from "@/hooks/useCheckRegisteredUser";
import { ZeroAddress } from "ethers";
import useGetOwner from "@/hooks/useGetOwner";


const Signup = () => {
    const navigate = useNavigate();

    const { open } = useWeb3Modal()
    const { address, isConnected } = useWeb3ModalAccount()
    const { walletInfo } = useWalletInfo()

    const user: any = useCheckRegisteredUser(address);

    const owner = useGetOwner();


    const change = useCallback(async () => {
        if (isConnected) {
            navigate("/signup");
        } else {
            navigate("/");
        }
    }, [isConnected, navigate]);

    useEffect(() => {
        change();
    }, [change, isConnected]);

    return (
        <section className="w-full h-screen flex bg-color1">
            <main className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2">
                <aside className="lg:col-span-2 hidden overflow-hidden rounded-e-3xl md:flex w-full h-full">
                    <img src={coverImg} alt="image" className="w-full h-full object-cover" />
                </aside>
                <aside className="flex flex-col items-center relative px-10 justify-center">
                    {
                        owner === address ?
                            <section className="w-full flex flex-col gap-3 border border-color5 pt-24 pb-12 px-6 rounded-md relative">
                                <div className="w-full flex flex-col mb-2">
                                    <h1 className="text-4xl text-color5 font-belanosima">Welcome Back Admin</h1>
                                    <p className="text-color3 font-barlow">Login to access your dashboard</p>
                                </div>

                                <div className="absolute -top-12 left-8 w-28 h-28 overflow-hidden rounded-full border-2 border-color4">
                                    <img src={`https://github.com/shadcn.png`} alt="avatar" className="w-full h-full object-cover" />
                                </div>

                                <Button
                                    type="submit"
                                    className={`text-gray-100 text-sm mt-4 font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-color5 hover:bg-color4 `}
                                    onClick={() => navigate('/admin')}
                                >
                                    <span className="flex items-center">Login
                                        <PiSignInFill className="text-xl ml-1" />
                                    </span>
                                </Button>
                            </section>
                            : user?.address && user?.address !== ZeroAddress ?
                                <section className="w-full flex flex-col gap-3 border border-color5 pt-24 pb-12 px-6 rounded-md relative">
                                    <div className="w-full flex flex-col mb-2">
                                        <h1 className="text-4xl text-color5 font-belanosima">Welcome Back</h1>
                                        <p className="text-color3 font-barlow">Login to access your dashboard</p>
                                    </div>

                                    <div className="absolute -top-12 left-8 w-28 h-28 overflow-hidden rounded-full border-2 border-color4">
                                        <img src={`https://github.com/shadcn.png`} alt="avatar" className="w-full h-full object-cover" />
                                    </div>

                                    <Button
                                        type="submit"
                                        className={`text-gray-100 text-sm mt-4 font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-color5 hover:bg-color4 `}
                                        onClick={() => navigate('/user')}
                                    >
                                        <span className="flex items-center">Login
                                            <PiSignInFill className="text-xl ml-1" />
                                        </span>
                                    </Button>
                                </section>
                                : <SignupForm />
                    }


                    <Button onClick={() => navigate('/')} className="bg-color5 text-white rounded-md p-3 hover:bg-color4 transition duration-300 focus:outline-none absolute top-8 left-8">
                        <IoIosArrowRoundBack className="text-2xl" />
                    </Button>

                    <Button onClick={() => open()} className="text-gray-200 text-sm font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-color5 hover:bg-color4 absolute top-8 right-8">
                        {
                            isConnected && <WalletConnected address={address} icon={walletInfo?.icon} />
                        }
                    </Button>
                </aside>
            </main>
        </section>
    )
}

export default Signup


export const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [isSending, setIsSending] = useState(false);

    const { address } = useWeb3ModalAccount()

    const handleSubmit = useRegisterUsers(address, username);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username) return toast.error("Please enter a username", { position: "top-right" });

        setIsSending(true);
        await handleSubmit();
        setIsSending(false);
        setUsername("");
    };


    return (
        <form className="w-full flex flex-col gap-3 border border-color5 pt-24 pb-12 px-6 rounded-md relative" onSubmit={handleFormSubmit}>
            <div className="w-full flex flex-col mb-2">
                <h1 className="text-4xl text-color5 font-belanosima">Signup</h1>
                <p className="text-color3 font-barlow">Enter your name to get started</p>
            </div>


            <div className="absolute -top-12 left-8 w-28 h-28 overflow-hidden rounded-full border-2 border-color5">
                <img src={`https://github.com/shadcn.png`} alt="avatar" className="w-full h-full object-cover" />
            </div>

            <div className="relative w-full font-barlow">
                <input
                    type={"text"}
                    id={"name"}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-color4 focus-visible:ring-color3 font-barlow text-color5 h-10`}
                    name='name'
                    placeholder={`Enter your name`}
                />

            </div>

            <Button
                type="submit"
                className={`text-gray-100 text-sm mt-4 font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-color5 hover:bg-color4 ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isSending}
            >
                {
                    isSending ? <span className="flex items-center">
                        <TbLoaderQuarter className="animate-spin text-2xl mr-1" />
                        Submitting...</span> :
                        <span className="flex items-center">Submit
                            <PiSignInFill className="text-xl ml-1" />
                        </span>
                }

            </Button>
        </form>
    )
}
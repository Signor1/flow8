import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"
import heroImg from "../../assets/hero.png"


const HeroSection = () => {
    const navigate = useNavigate()
    return (
        <main className="w-full overflow-hidden lg:h-[80vh] md:h-[50vh] h-screen flex items-center md:flex-row flex-col">
            <div className="flex-1 h-1/2 md:h-full flex order-2 md:order-1 flex-col gap-5 items-start justify-center lg:px-12 md:px-6 px-4">
                <h1 className="lg:text-6xl text-4xl font-belanosima font-medium text-color5">Experience Effortless Token Flow with<br /> <span className="bg-gradient-to-r from-color5 to-color4 text-transparent bg-clip-text">Flow8</span></h1>
                <p className="text-lg font-barlow text-gray-500">Experience seamless token streaming that revolutionizes finance. Automate salaries, rewards, subscriptions, and more with TRiver. Take control of your financial journey today.</p>
                <Button onClick={() => navigate('/signup')} className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-color5 hover:bg-color4" type="button">Start Streaming Now</Button>
            </div>
            <div className="flex-1  h-1/2 md:h-full order-1 md:order-2 relative flex items-end justify-end flex-col ">
                <img src={heroImg} alt="hero" className="" />
            </div>
        </main>
    )
}

export default HeroSection
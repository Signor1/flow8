import { InfiniteMovingCards } from "../ui/InfiniteMovingCards"


const Testimonial = () => {
    return (
        <main className='w-full flex flex-col items-center md:my-24 my-20 lg:px-20 md:px-16 px-4'>
            <h1 className="text-4xl text-color4 font-belanosima">Testimonials</h1>
            <p className="text-gray-400 font-barlow text-center md:w-[50%]">Discover what our users are saying about Flow8:</p>

            <div className="my-7 w-full rounded-md flex flex-col font-barlow  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="slow"
                />
            </div>
        </main>
    )
}

export default Testimonial

type TestimonialTypes = {
    message: string
    name: string
    title: string
}

const testimonials: TestimonialTypes[] = [
    {
        message:
            "Flow8 has completely transformed how we manage subscriptions. It's easy to use and has saved us valuable time and resources.",
        name: "John Doe",
        title: "CEO, Tech Innovations Inc."
    },
    {
        message:
            "The rewards distribution feature of Flow8 has significantly improved user engagement on our platform. It's a game-changer!",
        name: "Emily Smith",
        title: "Marketing Director, Digital Solutions Ltd."
    },
    {
        message: "Managing salary distributions has never been easier thanks to Flow8. It's reliable, efficient, and has streamlined our payroll processes.",
        name: "Michael Johnson",
        title: "HR Manager, Global Enterprises Corp."
    },
    {
        message:
            "Flow8's subscription management service is top-notch. It's helped us automate our billing processes and provided a seamless experience for our customers.",
        name: "Sarah Williams",
        title: "Operations Manager, E-commerce Solutions LLC"
    },
    {
        message:
            "The rewards distribution feature of Flow8 has significantly improved user engagement on our platform. It's a game-changer!",
        name: "Emily Smith",
        title: "Marketing Director, Digital Solutions Ltd."
    },
    {
        message:
            "Flow8 has completely transformed how we manage subscriptions. It's easy to use and has saved us valuable time and resources.",
        name: "John Doe",
        title: "CEO, Tech Innovations Inc."
    }
];

import { ArrowDown } from "lucide-react"


export const NotFoundSection = () => {
    return (
        <section 
            id="hero" 
            className="relatice min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container mex-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Oops... Looks like you're lost!
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto">
                        Use the navigation bar or button below to find your way back home.
                    </p>
                    <div className="pt-4">
                        <a href="/" className="cosmic-button">
                            Go Back Home
                        </a>
                    </div>
                </div>
            </div>
            <div className=" absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary"/>

            </div>
        </section>
    )
}
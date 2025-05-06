import { NavBar } from "../components/NavBar"
import { NotFoundSection } from "../components/NotFoundSection"
import { StarBackground } from "../components/StarBackground"

export const NotFound = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <StarBackground/>
            <NavBar/>
            <NotFoundSection/>
        </div>
        
    )
}
import { ArrowUp } from "lucide-react";


export const Footer = () => {
    return(
        <footer className="py-12 px-4 bg-card relative bprder-t border-border mt-12 flex flex-auto justify-between items-center">
            <p className="text-muted-foreground text-sm"> 
                &copy; {new Date().getFullYear()} Ramil Jiwani, All rights reserved.
            </p>
            
            <a 
                href="#hero"
                className="p-2 rounded-full bg-primary/20 hover:bg-primary/20 text-primary transition-colors"
            >
                <ArrowUp size={20}/>
            </a>
        </footer>
    );
};


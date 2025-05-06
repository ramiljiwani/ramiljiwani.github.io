import { Instagram, LinkedinIcon, Mail, Phone } from "lucide-react"


export const ContactSection = () => {
    return (
        <section 
            id="contact" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Contact</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w2xl mx-auto">
                    Have an idea or just want to say hi? Get in touch with me!
                </p>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="space-y-6 justify-center text-start">
                        <div className="bg-card rounded-lg overflow-hidden shadow-xs card-hover text-left">
                            <div className="p-4 flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/20">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a 
                                        href="mailto:ramiljiwani@gmail.com" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        ramiljiwani@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-card rounded-lg overflow-hidden shadow-xs card-hover text-left">
                            <div className="p-4 flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/20">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a 
                                        href="tel:+16473234329" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +1 (647) 323-4329
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 justify-center text-start">
                        <div className="bg-card rounded-lg overflow-hidden shadow-xs card-hover text-left">
                                <div className="p-4 flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/20">
                                        <Instagram className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Instagram</h4>
                                        <a 
                                            href="https://www.instagram.com/ramil.builds/" 
                                            target="_blank"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            @ramil.builds
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card rounded-lg overflow-hidden shadow-xs card-hover text-left">
                                <div className="p-4 flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/20">
                                        <LinkedinIcon className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">LinkedIn</h4>
                                        <a 
                                            href="https://www.linkedin.com/in/ramil-jiwani/"
                                            target="_blank" 
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            in/ramil-jiwani
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
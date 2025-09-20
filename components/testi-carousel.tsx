import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import {Quote} from "lucide-react";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {useState} from "react";
interface Testimonial {
    _id: string;
    firstname: string;
    lastname: string;
    role: string;
    company: string;
    date: string; // ISO string from backend
    testimonial: string;
}
type TestiCarouselProps = {
    testimonials: Testimonial[];
};

export default function TestiCarousel({testimonials}:TestiCarouselProps){
    const [expanded, setExpanded] = useState(false);


    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}>
            <CarouselContent>
                {testimonials.map((testimonial) => {
                    const dateObj = new Date(testimonial.date);
                    const readableDate = dateObj.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    });
                    const initials = `${testimonial.firstname?.[0] || ""}${testimonial.lastname?.[0] || ""}`.toUpperCase()

                    const shouldClamp = testimonial.testimonial.length > 250; // threshold
                    const displayText = expanded ? testimonial.testimonial : testimonial.testimonial.slice(0, 250) + (shouldClamp ? "..." : "");

                    return (
                        <CarouselItem key={testimonial._id} className="pl-2 md:pl-4">
                            <Card
                                className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-border bg-card">
                                <CardContent className="p-8 flex flex-col">
                                    {/* Quote Icon */}
                                    <div className="mb-6">
                                        <Quote className="h-8 w-8 text-primary opacity-60"/>
                                    </div>

                                    {/* Testimonial Text */}
                                    <blockquote
                                        className="text-card-foreground leading-relaxed mb-8 flex-grow italic whitespace-pre-line text-lg">
                                        "{displayText}"
                                        {shouldClamp && (
                                            <button
                                                className="text-blue-600 ml-2 hover:underline text-sm"
                                                onClick={() => setExpanded(!expanded)}
                                            >
                                                {expanded ? "Show less" : "Read more"}
                                            </button>
                                        )}
                                    </blockquote>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4 mt-auto">
                                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                                            <AvatarFallback
                                                className="bg-primary/10 text-primary font-semibold">
                                                {initials}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div className="flex-1">
                                            <div className="font-semibold text-card-foreground text-lg">
                                                {testimonial.firstname} {testimonial.lastname}
                                            </div>
                                            <div
                                                className="text-muted-foreground font-medium">{testimonial.role}</div>
                                            <div
                                                className="text-primary font-semibold">{testimonial.company}</div>
                                        </div>
                                    </div>

                                    {/* Date */}
                                    <div
                                        className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                                        {readableDate}
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    )
}
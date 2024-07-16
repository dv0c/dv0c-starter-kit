'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'

import cross from '../../public/Cards/cross.png'
import cross2 from '../../public/Cards/cross2.png'
import business from '../../public/Cards/business.png'
import { Button } from "./ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCallback, useEffect, useState } from "react"
import { type CarouselApi } from "@/components/ui/carousel"

const WhatWeOffer = () => {
    const [api, setApi] = useState<CarouselApi>()
    const scrollPrev = useCallback(() => {
        if (!api) {
            return
        }
        api.scrollPrev()
    }, [api])

    const scrollNext = useCallback(() => {
        if (!api) {
            return
        }
        api.scrollNext()
    }, [api])

    return <div className="container mt-20 mb-20">
        <div className="flex items-center w-full justify-center mb-10 flex-col">
            <h1 className="text-[#024430] text-[48px] leading-[56px] font-bold mb-[20px]">What We Offer</h1>
            <p className="text-center text-[18px] font-[500] max-w-[35rem]">What makes us different from others? We give holistic solutions
                with strategy, design & technology.</p>
        </div>
        <div>
            <Carousel setApi={setApi}>
                <CarouselContent className="gap-5">
                    <CarouselCard color="bg-whatWeOffer-Root_Cross_Platform" title="Cross Platform" icon={cross} paragraph="Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe." href="/" />
                    <CarouselCard color="bg-whatWeOffer-Root_Social_Media" title="Business strategy" icon={cross2} paragraph="Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe." href="/" />
                    <CarouselCard color="bg-whatWeOffer-Root_Business_Strategy" title="Social Media" icon={cross} paragraph="Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe." href="/" />
                    <CarouselCard color="bg-whatWeOffer-Root_Local_Marketing" title="Local Marketing" icon={business} paragraph="Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe." href="/" />
                    <CarouselCard color="bg-whatWeOffer-Root_Local_Marketing" title="Local Marketing" icon={business} paragraph="Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe." href="/" />
                </CarouselContent>
            </Carousel>
            <div className="w-full items-center flex justify-center gap-3">
                <Button variant={'outline'} size={'icon'} className="rounded-full border-[#024430] text-[#024430]" onClick={scrollPrev}>
                    <ArrowLeft size={20} />
                </Button>
                <Button variant={'outline'} size={'icon'} className="rounded-full border-[#024430] text-[#024430]" onClick={scrollNext}>
                    <ArrowRight size={20} />
                </Button>
            </div>
        </div>
    </div>
}

export default WhatWeOffer

export const CarouselCard = ({ icon, paragraph, title, href, color, className }: {
    icon: any,
    paragraph: string,
    title: string,
    href: string,
    color: string
    className?: string;
}) => {


    return (
        <CarouselItem className={cn("rounded-[8px] select-none overflow-hidden ml-4 pl-0 border mb-[30px] max-w-[304px] w-full", className)
        }>
            <div className={cn('flex p-[30px] items-end', color)}>
                <div className="max-w-[104px] flex items-center justify-center w-full min-w-[104px] h-[115px] leading-[85px] mr-[15px] py-[15px] px-[20px] text-center rounded-[8] bg-white">
                    <Image placeholder="blur" src={icon} alt={title} width={64} height={64} />
                </div>
                <div>
                    <h4 className="text-[#024430] text-[26px] leading-[34px] font-bold">{title}</h4>
                </div>
            </div>
            <div className="p-5 flex flex-col items-start gap-2">
                <p className="text-muted-foreground text-[14px] font-[500] leading-[18px] mb-[15px]">
                    {paragraph}
                </p>
                <Button variant={'link'}>Learn more
                    <ArrowRight size={16} className="ml-2" />
                </Button>
            </div>
        </CarouselItem >
    )
}
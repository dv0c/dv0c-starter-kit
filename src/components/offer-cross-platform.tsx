import { ArrowRight } from "lucide-react"
import { Button, buttonVariants } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import Human1 from '../../public/h/human1.png'
import Human2 from '../../public/h/human2.png'
import Human3 from '../../public/h/human3.png'

const OCP = () => {
    return <div className="container py-5">
        <div className="flex items-center py-10 gap-5 justify-between max-md:flex-wrap">
            <div className="md:max-w-[50%] w-full">
                <h1 className="text-[#024430] font-bold text-[35px] leading-[48px] md:text-[48px] md:leading-[56px]">Crafting human connection through digital experience</h1>
            </div>
            <div className="md:max-w-[50%] w-full">
                <p>Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                <Link href={'/contact-us'} className={buttonVariants({ variant: "link", className: "font-semibold mt-5 !px-0 !py-0" })}>
                    Contact us <ArrowRight size={18} className="ml-2" />
                </Link>
            </div>
        </div>
        <div className="flex gap-5 justify-between max-md:justify-center w-full max-md:flex-wrap">
            <section className="w-full">
                <Image src={Human1} placeholder="blur" className="max-md:w-full" alt="hm" width={450} height={500} />
                <div>
                    <h2 className="mb-[10px] mt-[15px] text-[#024430] text-[26px] leading-[34px] font-bold">Cross Platform</h2>
                    <p className="text-[14px] font-[500] text-muted-foreground">
                        Discover powerful features to boost your productivit. You are always welcome to visit our little den.
                    </p>
                </div>
            </section>
            <section className="w-full">
                <div className="mb-[20px] max-md:hidden block mt-[10px]">
                    <h2 className="mb-[10px] text-[#024430] text-[26px] leading-[34px] font-bold">Cross Platform</h2>
                    <p className="text-[14px] font-[500] text-muted-foreground">
                        Discover powerful features to boost your productivit. You are always welcome to visit our little den.
                    </p>
                </div>
                <Image src={Human2} className="max-md:w-full" placeholder="blur" alt="hm" width={450} height={500} />
                <div className="md:hidden">
                    <h2 className="mb-[10px] mt-[15px] text-[#024430] text-[26px] leading-[34px] font-bold">Cross Platform</h2>
                    <p className="text-[14px] font-[500] text-muted-foreground">
                        Discover powerful features to boost your productivit. You are always welcome to visit our little den.
                    </p>
                </div>
            </section>
            <section className="w-full">
                <Image src={Human3} placeholder="blur" className="max-md:w-full" alt="hm" width={450} height={500} />
                <div>
                    <h2 className="mb-[10px] mt-[15px] text-[#024430] text-[26px] leading-[34px] font-bold">Cross Platform</h2>
                    <p className="text-[14px] font-[500] text-muted-foreground">
                        Discover powerful features to boost your productivit. You are always welcome to visit our little den.
                    </p>
                </div>
            </section>
        </div>
    </div>
}

export default OCP
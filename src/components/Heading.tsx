import Image from "next/image"
import Banner from '../../public/banner.png'
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
const Heading = () => {
    return <div className="bg-[#e0f1f4]">
        <div className="container">
            <div className="flex justify-between">
                <div className="max-w-[50%] w-full lg:block hidden">
                    <Image src={Banner} alt={'me'} width={600} className="disable-blur" height={670} draggable={false} placeholder="blur" />
                </div>
                <div className="lg:max-w-[50%] max-w-full w-full">
                    <div className="py-24 lg:pt-10 xl:py-24">
                        <span className="text-[18px] leading-[18px] text-[#4e6770] relative pl-[60px] title-line font-[500]">Think. Creative. Solve</span>
                        <h1 className="text-[45px] sm:text-[64px] max-[1243px]:!text-[53px] mt-3 leading-[64px] sm:leading-[74px] font-semibold text-[#024430]">Innovative Solution to Move Your Business Forward</h1>
                        <p className="text-[16px] mt-5 max-w-xl leading-[24px] font-[500]">Collaborate, plan projects and manage resources with powerful features that your whole team can use. The latest news, tips and advice to help you run your business with less fuss.</p>
                    
                        <div className="mt-10">
                            <Button variant={'primary'}>
                                Get started
                            </Button>
                            <Button variant={'link'} className="text-black dark:text-white font-semibold">
                                Learn more <ArrowRight className="ml-2" size={16} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Heading
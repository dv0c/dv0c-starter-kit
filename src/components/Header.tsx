import { header_navigation } from "@/lib/config";
import { ExternalLink, Menu, Search } from "lucide-react";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import Image from "next/image";
import PaymentGateWays from '../../public/payment-method.png'

const Header = () => {
    return <header className="bg-background sticky top-0 w-full border-b-2">
        <div className="flex container p-5 items-center justify-between">
            <div className="flex items-center gap-10">
                <Link href={'/'}>
                    <Logo />
                </Link>
                <DesktopNavigation />
            </div>
            <div className="flex items-center gap-3">
                <Search size={18} />
                <span className="flex items-center">
                    EN
                    <MdOutlineKeyboardArrowDown size={18} />
                </span>
                <Button variant={'primary'} className="">Get Started</Button>
                <MobileNavigation />
            </div>
        </div>
    </header>
}

export default Header

const DesktopNavigation = () => {
    return (
        <div className="hidden lg:flex">
            <ul className="flex items-center gap-8">
                {header_navigation.map((nav, index) => (
                    <li key={index}>
                        <Link className="flex relative w-full hover:underline group transition-all hover:text-green-600 items-center gap-2" href={nav.href}>
                            {nav.name}
                            {nav.href.startsWith('/') &&
                                <span className="absolute -top-3 -right-3 flex justify-end text-[11px] leading-[.50] w-full text-end group-hover:translate-y-0 translate-y-3 opacity-0 group-hover:opacity-100 delay-75 transition-all"><ExternalLink size={15} /></span>
                            }
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const MobileNavigation = () => {
    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="" variant={'ghost'}>
                        <Menu size={30} />
                    </Button>
                </SheetTrigger>
                <SheetContent className="flex flex-col h-screen">
                    <SheetHeader className="space-y-4">
                        <Logo />
                        <Separator />
                    </SheetHeader>
                    <div className="flex-1 space-y-3">
                        {header_navigation.map((nav, index) => (
                            <div key={index} className="text-3xl p-3 active:scale-[.98] transition-all active:underline font-semibold">
                                <Link href={nav.href}>
                                    {nav.name}
                                </Link>
                            </div>
                        ))}
                            <Button variant={'primary'} className="w-full !mt-5">Get started</Button>
                    </div>
                    <Separator />
                    <SheetFooter >
                        <div className="flex flex-col">
                            <p className="text-xs text-muted-foreground">Our services offer great value with competitive pricing and top-notch security. We ensure your website is protected with the latest measures. Contact us to learn more about our affordable rates and secure website solutions.
                            </p>
                            <div className="flex flex-col mt-10">
                                <p className="text-sm text-muted-foreground mb-2">Secured Payment Gateways</p>
                                <div>
                                    <Image alt="payment-gateways" src={PaymentGateWays} placeholder="blur" width={200} height={50} />
                                </div>
                            </div>
                            <div className="mt-5">
                                <Separator />
                                <p className="text-xs mt-5 text-muted-foreground">Copyright {new Date().getFullYear()} © MEINDESK - Website Development & Design.                                .</p>
                            </div>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}
import { header_navigation } from "@/lib/config"
import Link from "next/link"
import Logo from "./Logo"
import { ExternalLink } from "lucide-react"

const Header = () => {
    return <header className="bg-background sticky top-0 w-full border-b-2">
        <div className="flex container p-5 items-center justify-between">
            <div className="flex items-center gap-10">
                <Link href={'/'}>
                    <Logo />
                </Link>
                <div>
                    <ul className="flex items-center gap-8">
                        {header_navigation.map((nav, index) => (
                            <li>
                                <Link className="flex relative w-full hover:underline group transition-all hover:text-green-600 items-center gap-2" href={nav.href}>{nav.name}
                                    <span className="absolute -top-3 -right-3 flex justify-end text-[11px] leading-[.50] w-full text-end group-hover:translate-y-0 translate-y-3 opacity-0 group-hover:opacity-100 delay-75 transition-all"><ExternalLink size={15} /></span>

                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </header>
}

export default Header
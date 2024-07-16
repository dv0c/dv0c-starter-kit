import { ExternalLink } from "lucide-react"

const Logo = () => {
    return <h1 className="select-none flex relative flex-col group w-full">
        <span className="absolute -top-2 flex justify-end text-[11px] leading-[.50] w-full text-end group-hover:translate-y-0 translate-y-3 opacity-0 group-hover:opacity-100 delay-75 transition-all"><ExternalLink size={15} /></span>
        <span className="text-3xl font-[800]">MeinDesk.</span>
        <span className="text-[11px] leading-[.50]">Productivity</span>
    </h1>
}

export default Logo
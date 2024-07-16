import Image from "next/image"
import Bs1 from '../../public/Business/placed.png'
import Bs2 from '../../public/Business/airmeet.png'
import Bs3 from '../../public/Business/cuebiq.png'
import Bs4 from '../../public/Business/factual.png'
import Bs5 from '../../public/Business/placeiq.png'
import Bs6 from '../../public/Business/spen.png'
const Choices = () => {
    return <div className="container">
        <div className="flex justify-between p-5 sm:p-10 md:p-16 flex-wrap gap-5">
            <Image src={Bs1} placeholder="blur" className="object-cover" alt="image" width={105} height={200} />
            <Image src={Bs2} placeholder="blur" alt="image" width={105} className="object-cover" height={200} />
            <Image src={Bs3} placeholder="blur" alt="image" width={105} height={200} className="object-cover" />
            <Image src={Bs4} placeholder="blur" alt="image" width={105} height={200} className="object-cover" />
            <Image src={Bs5} placeholder="blur" alt="image" width={105} height={200} className="object-cover" />
            <Image src={Bs6} placeholder="blur" alt="image" width={105} height={200} className="object-cover" />
        </div>
    </div>
}

export default Choices

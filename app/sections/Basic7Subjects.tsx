import Image from "next/image";
import {Computing} from "../../public/images"
import Link from "next/link";


export default function Basic7Subjects () {
    return (



        <div>


            <Link  className="cus_Link" href="#">


                    <div className='flex items-center space-x-2'>
                        <Image
                            src={Computing}
                            alt="Computing"
                            width={120}
                            height={120}
                            // sizes="(max-width: 640px) 50px, (max-width: 1200px) 150px, 150px"
                        />
                        <p className="text-xl font-semibold">English Language</p>
                    </div>


            </Link>



        </div>

    )
};

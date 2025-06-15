// components/SubjectCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {Subject} from "@/app/constant/types";


// interface SubjectCardProps {
//     subURL: string;
//     subImg: string;
//     subLabel: string;
// }

const SubjectCard: React.FC<Subject> = ({ subURL, subImg, subLabel }) => {
    return (
        <div>
            <Link href={subURL} className="cus_Link">
                <div className="flex items-center space-x-2">
                    <div>
                        <Image
                            src={subImg}
                            alt={subLabel}
                            width={250}
                            // height={150}
                            className="object-contain"
                            // sizes could be adjusted if responsive behavior is needed
                        />
                    </div>
                    <div>
                        <p className="text-xl font-semibold">{subLabel}</p>
                    </div>


                </div>
            </Link>
        </div>
    );
};

export default SubjectCard;

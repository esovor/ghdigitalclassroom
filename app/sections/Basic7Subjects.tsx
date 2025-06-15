// components/Basic7Subjects.tsx

import React from 'react';
import { jhSubjects } from '@/app/constant';
import SubjectCard from '@/app/cus-components/SubjectCard';
import {Subject} from "@/app/constant/types";



export default function Basic7Subjects() {
    return (
        <section className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {jhSubjects.map((subject: Subject) => (
                <SubjectCard
                    key={subject.subLabel} {...subject} />
            ))}
        </section>
    );
}

import Link from "next/link";

import {LearnLevels} from "@/app/sections"


export default function Primary () {
    return (
        <>
            <div>
                <h1>Learn and Revise</h1>
                <p>Learn and revise with Ghana Digital School for primary, secondary and post-16 students.</p>
            </div>


            <section>
                <LearnLevels/>
            </section>


            <section>
                <h1>Common Core Subjects</h1>

                <div>
                    <Link href="#"><h2>Mathematics</h2></Link>
                </div>
                <div>
                    <Link href="#"><h2>Science</h2></Link>
                </div>
                <div>
                    <Link href="#"><h2>Computing</h2></Link>
                </div>
                <div>
                    <Link href="#"><h2>Creative Arts and Design</h2></Link>
                </div>

            </section>

            <section>
                <h1>GH revision practice quizzes</h1>
                <p>Free quizzes based on past papers. Practise maths, science, English and
                    many more subjects.</p>
            </section>




        </>
    );
}
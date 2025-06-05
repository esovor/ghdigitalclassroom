import Link from "next/link";

export default function Subjects () {
    return (

        <div>

        <section>
            <h1>All Subjects </h1>
            <p>A-Z Subjects</p>
        </section>

            <section>

                <div>
                    <Link href="/"><h2>Mathematics</h2></Link>
                </div>

                <div>
                    <Link href="/"><h2>Elective Mathematics</h2></Link>
                </div>

                <div>
                    <Link href="/"><h2>Computing</h2></Link>
                </div>

                <div>
                    <Link href="/"><h2>Science</h2></Link>
                </div>

                <div>
                    <Link href="/"><h2>Robotics</h2></Link>
                </div>

            </section>



        </div>
    );
}
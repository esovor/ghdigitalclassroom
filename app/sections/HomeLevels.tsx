import Link from "next/link";

export default function HomeLevels () {
    return (


        <div>

            <div>
                <Link href="/primary"><h2>Primary</h2></Link>
                <p>Basic 4 to Basic 6</p>
            </div>

            <div>
                <Link href="/jhs"><h2>Junior High</h2></Link>
                <p>Basic 7 to Basic 9</p>
            </div>

            <div>
                <Link href="/shs"><h2>Senior High</h2></Link>
                <p>SHS 1 to SHS 3</p>
            </div>

            <div>
                <Link href=""><h2>Post +</h2></Link>
                <p>High School + </p>
            </div>

            <div>
                <Link href=""><h2>Teachers</h2></Link>
                <p>Facilitators & Trainers</p>

            </div>


        </div>
    );
}
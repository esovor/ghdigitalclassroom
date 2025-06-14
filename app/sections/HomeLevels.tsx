import Link from "next/link";

export default function HomeLevels () {
    return (


        <div>

            <div>
                <Link className="cus_Link" href="/primary"><h3>Primary</h3></Link>
                <p>Basic 4 to Basic 6</p>
            </div>

            <div>
                <Link className="cus_Link" href="/jhs"><h3>Junior High</h3></Link>
                <p>Basic 7 to Basic 9</p>
            </div>

            <div>
                <Link className="cus_Link" href="/shs"><h3>Senior High</h3></Link>
                <p>SHS 1 to SHS 3</p>
            </div>

            <div>
                <Link className="cus_Link" href=""><h3>Post +</h3></Link>
                <p>High School + </p>
            </div>

            <div>
                <Link className="cus_Link" href=""><h3>Teachers</h3></Link>
                <p>Facilitators & Trainers</p>

            </div>


        </div>
    );
}
import Link from "next/link";

export default function LearnLevels () {
    return (


        <div>
                <div>
                    <Link className="cus_Link" href="/primary"><h2>Primary</h2></Link>
                    <p>Basic 4 to Basic 6</p>
                </div>


                <div>
                    <Link className="cus_Link" href="/jhs"><h2>Junior High</h2></Link>
                    <p>Basic 7 to Basic 9</p>
                </div>

                <div>
                    <Link className="cus_Link" href="/shs"><h2>Senior High</h2></Link>
                    <p>SHS 1 to SHS 3</p>
                </div>

                <div>
                    <Link className="cus_Link" href=""><h2>Post High</h2></Link>
                    <p>High + </p>
                </div>

                <div>
                    <Link className="cus_Link" href="/subjects"><h2>Subjects</h2></Link>
                    <p>A-Z Subjects</p>

                </div>







        </div>
    );
}
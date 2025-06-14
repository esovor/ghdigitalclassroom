import Link from "next/link";
import {HomeLevels} from "../sections"


export default function Home() {
  return (
    <div className="container">

       {/*navbar*/}
        <div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/learn">Learn</Link>
                <Link href="/resources">Resources</Link>
                <Link href="/about">Who we are</Link>
            </nav>
        </div>



    <div>

        <section>
            <HomeLevels/>
        </section>

        <section>
            <h3>Latest Tends</h3>
        </section>

        <section>
            <h3>Latest Tends</h3>
        </section>


    </div>






    </div>
  );
}

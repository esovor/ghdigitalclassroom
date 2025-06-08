import Link from "next/link";
import {HomeLevels} from "../sections"


export default function Home() {
  return (
    <div>

       {/*navbar*/}
        <div className="container">
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
            <h1>Latest Tends</h1>
        </section>

        <section>
            <h1>Latest Tends</h1>
        </section>


    </div>






    </div>
  );
}

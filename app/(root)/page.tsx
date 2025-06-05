import Link from "next/link";


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


      <h1>Home</h1>


        <section>
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
        </section>

        <section>
            <h1>Latest Tends</h1>
        </section>

        <section>
            <h1>Latest Tends</h1>
        </section>




    </div>
  );
}

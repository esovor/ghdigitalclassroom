import Link from "next/link";



export default function JuniorHigh () {
    return (
        <div className="container">


            <div>
                <h1>Junior High Levels </h1>
                <p>Basic 7 to Basic 9 </p>
            </div>

            <section>
                <div><Link href="/levels/basic-7">Basic 7</Link></div>
                <div><Link href="/levels/basic-8">Basic 8</Link></div>
                <div><Link href="/levels/basic-9">Basic 9</Link></div>
            </section>

            <div>


            </div>


        </div>
    );
}
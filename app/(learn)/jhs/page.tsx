import Link from "next/link";



export default function JuniorHigh () {
    return (
        <div>


            <div className="sectionHeaderRed">
                <div className="container">
                    <h1 className="font-bold">Junior High Levels </h1>
                    <p>Basic 7 to Basic 9 </p>
                </div>
            </div>

            <section className="container pt-4 pb-4">

                <h2 className="font-semibold">I am in ...</h2>

                <div><Link className="cus_LinkRED" href="/levels/basic-7"><h3>Basic 7</h3></Link></div>
                <div><Link className="cus_LinkRED" href="/levels/basic-8"><h3>Basic 8</h3></Link></div>
                <div><Link className="cus_LinkRED" href="/levels/basic-9"><h3>Basic 9</h3></Link></div>
            </section>

            <div>


            </div>


        </div>
    );
}
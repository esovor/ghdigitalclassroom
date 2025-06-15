import Link from "next/link";



export default function JuniorHigh () {
    return (
        <div>


            <section className="sectionHeader-primary">
                <div className="container">
                    <h1 className="font-bold">Junior High Levels </h1>
                    <p>Basic 7 to Basic 9 </p>
                </div>
            </section>

            <section className="bg-gray-100 my-5 py-5">
                <div className="container">
                    <h2 className="font-semibold">I am in ...</h2>

                    <div className="sm:flex sm:justify-around">
                        <Link className="btn-primary" href="/levels/basic-7">Basic 7</Link>
                        <Link className="btn-primary" href="/levels/basic-8">Basic 8</Link>
                        <Link className="btn-primary" href="/levels/basic-9">Basic 9</Link>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100">
                <div className="container">
                    <h2 className="font-semibold">More topics and activities</h2>
                </div>



            </section>


        </div>
    );
}
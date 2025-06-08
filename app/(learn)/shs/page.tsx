import Link from "next/link";


export default function Secondary() {
    return (


        <div>
            <section>
                <h1>Secondary Level</h1>
                <p>SHS 1 to SHS 3</p>
            </section>

        <section>
            <div>
                <h2>STEM Education</h2>
                <div><Link href="#">Form 1</Link></div>
                <div><Link href="#">Form 1</Link></div>
                <div><Link href="#">Form 1</Link></div>
            </div>


            <div>
                <h2>Non-STEM Education</h2>
                <div><Link href="#">Form 1</Link></div>
                <div><Link href="#">Form 1</Link></div>
                <div><Link href="#">Form 1</Link></div>
            </div>


        </section>


        </div>

    );
}

import Link from "next/link";

import styles from "../learn.module.css"


export default function Secondary() {
    return (


        <div>

            <section>
                <div className="container">
                    <h1>Senior High Levels</h1>
                    <p>SHS 1 to SHS 3</p>
                </div>
            </section>


            <section className="container section-box">

                <div className="grid grid-cols-2 gap-4">

                        <Link href="#" className={styles.cusLink}>
                            Senior High
                        </Link>

                        <Link  href="#" className={styles.cusLink}>
                            STEM
                        </Link>





                </div>

            </section>




        </div>

    );
}

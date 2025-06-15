import {Basic7Subjects} from "../../sections"

export default function Basic7 () {
    return (
        <div>

            <section className="sectionHeader bg-sky-950">
                <div className="container">
                    <h1>Basic Seven </h1>
                    <p>The first stage of the three-year Junior High School in Ghana</p>
                </div>

            </section>


            <section className="container">



                <div>
                    <h3>All Basic 7 Subjects</h3>
                    <p>These subjects may contain both guides and videos.</p>
                </div>


                <div className="pt-4 pb-4">
                    <Basic7Subjects/>
                </div>

            </section>








        </div>
    );
}
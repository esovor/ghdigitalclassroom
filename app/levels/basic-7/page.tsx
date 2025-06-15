import {Basic7Subjects} from "../../sections"

export default function Basic7 () {
    return (
        <div>



            <section className="sectionHeader-primary">
                <div className="container">
                    <h1 className="font-bold">Basic Seven </h1>
                    <p>The first stage of the three-year Junior High School in Ghana</p>
                </div>
            </section>


            <section className=" py-5">

                <div className="container">
                    <div>
                        <h2>All Basic 7 Subjects</h2>
                        <p>These subjects may include a combination of comprehensive guides and engaging videos.</p>
                    </div>


                    <div className="pt-8 pb-4">
                        <Basic7Subjects/>
                    </div>

                </div>

            </section>








        </div>
    );
}
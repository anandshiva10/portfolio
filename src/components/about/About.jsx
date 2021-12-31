import "./about.css";

import Album from "../../img/album.jpg"

import Award from "../../img/award.png"

const About = () => {

    return (

        <div className="a">

            <div className="a-left">

                <div className="a-card bg"></div>

                <div className="a-card">

                    <img src={Album} alt="" className="a-img" />

                </div>

            </div>

            <div className="a-right">

                <h1 className="a-title">About me</h1>

                <p className="a-sub">

                   From Controversies to the Billboard.

                </p>

                <p className="a-desc">

                    This is <b>'The Weeknd'</b>, a.k.a Abel Makkonen Tesfaye, a Canadian singer. My discography has received widespread critical praise for its musical versatility and dark lyricism, mainly inspired by personal experiences, that explores themes such as escapism, romance and melancholia.

                </p>

                <div className="a-award">

                    <img src={Award} alt="" className="a-award-img" />

                    <div className="a-award-texts">

                        <h4 className="a-award-title">The Grammy Awards</h4>

                        <p className="a-award-desc">Earned my first Grammy in the year of 2015, won for 3 times.</p>

                    </div>

                </div>

            </div>

        </div>

    )

}

 

export default About
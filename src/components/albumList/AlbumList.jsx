import "./albumList.css";
import {albums} from "../../data"
import Album from "../album/Album";

const AlbumList =() =>{

        return (

            <div className="al">

                <div className="al-texts">

                    <h1 className="al-title">My Albums</h1>


                </div>

                <div className="al-list">
                    {albums.map((item)=>(
                        <Album key={item.id} img={item.img} link={item.link}/>
                    ))}
                   

                </div>

            </div>

        )

    }

 

export default AlbumList
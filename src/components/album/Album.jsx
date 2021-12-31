import "./album.css"

 

const Album = ({img,link}) => {

    return (

        <div className="p">

            <div className="p-browser">

                <div className="p-circle"></div>

                <div className="p-circle"></div>

                <div className="p-circle"></div>

            </div>
            <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="Hyyy" className="p-img" />
            </a>

        </div>

    )

}

 

export default Album
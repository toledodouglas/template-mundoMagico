import "./LogoImg.scss"
import LogoImg from "../../../assets/img/LogoImg.svg"

export default function Logo() {
    return(
        <>
            <picture>
                <img className="portifolio__Logo" src={LogoImg} alt="logo do site"/>
            </picture>
        </>
    );
}
import "./NavItem.scss"

const list = [
    {
        text: "About",
    },
    {
        text: "Services",
    },
    {
        text: "Pricing",
    },
    {
        text: "Blog",
    },
]
export default function NavItem(props) {
    return(
        <>
            <div className="portifolio">
                {list.map((props) =>(
                <li className="portifolio__navItem">
                    <a className="portifolio__navLink" href="#">{props.text}</a>
                </li>
                ))}
            </div>
        </>
    );
}
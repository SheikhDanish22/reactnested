import { Link, Outlet } from "react-router-dom";

const About=()=>{
    return(
        <>
        
        <h1>About Page</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sunt!
        <br/> <br/>
        <table>
            <tr>
                <td>
                    <Link to="aboutcompany">About Company</Link>
                </td>
            <td>
            <Outlet/>
            </td>
            </tr>
        </table>
        </>
    )
}
export default About;
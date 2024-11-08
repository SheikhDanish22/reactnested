import { Link, Outlet } from "react-router-dom";


const About=()=>{
    return(
        <>
        
        <h1>About Page</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sunt!
        <br/> <br/>
        <table width="100%" border="1">
            <tr>
                <td>
                    <Link to="AboutCompany">About Company</Link>
                    <br /> <br />
                    <Link to="AboutService">About Service</Link>
                    <br /><br />
                    <Link to="AboutProduct">About product</Link>
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
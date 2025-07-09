import { Metadata } from "next";
import css from "./page.module.css"



export const metadata:Metadata = {
    title: "Page Not Found",
    description: "There is no page to find",
}



const NotFound = () => {
    return (<>
    <h1 className={css.title}>404 - Page not found</h1>
<p className={css.description}>Sorry, the page you are looking for does not exist.</p>
</>)
}


export default NotFound;

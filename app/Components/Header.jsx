import Link from "next/link";
import "@/app/ui/dash.css";

export default function Header(className){
    return(
        <>
            <main className="navi">
                <div className="head">
                    <p className="text-3xl font-extrabold text-green-950"> Fredrick's Resume</p>
                    <ul className="Navigation text-amber-50">
                        {/*<ul> block for 768+, hidden for 768-*/}
                        <li className=""><Link href="/">dash</Link></li>
                        {/*<li className=""><a href={}</li>*/}
                        <li className=""><Link href="/Dashboard">About</Link></li>
                        <li className=""><a href="/Projects">Projects</a></li>
                        <li className=""><Link href="Education">Education</Link></li>
                        <li> Blog</li>

                    </ul>
                </div>

            </main>
        </>
    )
}
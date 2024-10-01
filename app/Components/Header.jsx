import Link from "next/link";
import "@/app/ui/dash.css";

export default function Header(className){
    return(
        <>
            <main className="navi">
                <div className="head">
                    <p className="text-3xl font-extrabold"> Fredrick's Resume</p>
                    <ul className="Navigation justify-space-between">
                        {/*<ul> block for 768+, hidden for 768-*/}
                        <li className=""><Link className='link' href="/">dash</Link></li>
                        {/*<li className=""><a href={}</li>*/}
                        <li className=""><Link className='link' href="/about">About</Link></li>
                        <li className=""><Link className='link' href="/Projects">Projects</Link></li>
                        <li className=""><Link className='link' href="/Education">Education</Link></li>
                         <li> Blog</li>

                    </ul>
                </div>

            </main>
        </>
    )
}
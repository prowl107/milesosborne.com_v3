import { getLastUpdatedDate } from "@/sanity-utils"

const ISO_lastUpdatedAt = await getLastUpdatedDate();
const lastUpdatedAt_date = new Date(ISO_lastUpdatedAt._updatedAt);
const lastUpdatedDateString = lastUpdatedAt_date.toISOString().substring(0,10)

export default function footer() {
    return (
        <div>
	    <footer id="footer">
            <h2> Footer </h2>
	    	<div className="inner">
	    		<ul className="icons">
	    			<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
	    			<li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
	    			<li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
	    			<li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
	    		</ul>
	    		<ul className="copyright">
	    			<li>&copy; Miles Osborne - {lastUpdatedDateString} </li><li>Design: <a href="http://html5up.net">Strata - HTML5 UP</a></li>
	    		</ul>
	    	</div>
	    </footer>
    </div>
    )
}
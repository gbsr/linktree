import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3Alt,
	faJsSquare,
	faReact,
	faPython,
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
	faDatabase,
	faMobileAlt,
	faSeedling,
	faVial,
	faCircle,
	faEnvelope,
	faPhone,
	faHome,
} from "@fortawesome/free-solid-svg-icons";

function App() {
	return (
		<>
			<header>
				<h1>Can I has LIA?</h1>
			</header>
			<main>
				<section className="description">
					<h2>What? Who?</h2>
					Hi. I am{" "}
					<a href="https://andershofsten.com" target="_blank">
						Anders Hofsten
					</a>
					, a former technical audio designer for games turned frontend developer currently studying frontend
					development at NBI Handelsakademin in Gothenburg. I am just about to start the second year, and am now
					searching for an internship during these two periods:
					<div className="lia-period">
						<div>yyyy-mm-dd to yyyy-mm-dd</div>
						<div>yyyy-mm-dd to yyyy-mm-dd.</div>
					</div>
					<section className="details">
						<div className="skills">
							<h2>Skills</h2>
							<ul>
								<li>
									<FontAwesomeIcon className="icon" icon={faHtml5} /> HTML5
								</li>
								<li>
									<FontAwesomeIcon className="icon" icon={faCss3Alt} /> CSS3
								</li>
								<li>
									<FontAwesomeIcon className="icon" icon={faJsSquare} /> JavaScript
								</li>
								<li>
									<FontAwesomeIcon className="icon" icon={faDatabase} /> Firebase
								</li>
								<li>
									<FontAwesomeIcon className="icon" icon={faReact} /> React
								</li>
								{/* <li>
									<FontAwesomeIcon className="icon" icon={faMobileAlt} /> React Native
								</li> */}
								<li>
									<FontAwesomeIcon className="icon" icon={faSeedling} /> Cypress
								</li>
								<li>
									<FontAwesomeIcon className="icon" icon={faVial} /> vitest
								</li>
								<li>
									<FontAwesomeIcon className="icon" icon={faPython} /> Python
								</li>
								<br></br>
								<li>
									<FontAwesomeIcon className="icon" icon={faCircle} />
									Unreal Engine
								</li>
								<li>
									<FontAwesomeIcon className="icon" icon={faCircle} />
									Unity
								</li>
								<li>
									<FontAwesomeIcon className="icon" icon={faCircle} />
									Figma
								</li>
								<li>
									<FontAwesomeIcon className="icon" icon={faCircle} />
									Photoshop
								</li>
								<li>
									<FontAwesomeIcon className="icon" icon={faCircle} />
									Reaper, ReaScript
								</li>
								<li>
									<FontAwesomeIcon className="icon" icon={faCircle} />
									Ableton Live, M4Live
								</li>
							</ul>
						</div>
						<div className="contact">
							<h2>Contact</h2>
							<p>
								<FontAwesomeIcon className="icon" icon={faEnvelope} />{" "}
								<a href="mailto: talk@andershofsten.com">talk@andershofsten.com</a>
							</p>
							<p>
								<FontAwesomeIcon className="icon" icon={faPhone} /> +(46) 700 29 66 62
							</p>

							<ul className="links">
								<li>
									<FontAwesomeIcon className="icon" icon={faHome} />{" "}
									<a href="https://andershofsten.com" target="_blank">
										Portfolio
									</a>
								</li>
								<li>
									<FontAwesomeIcon className="icon" icon={faLinkedin} />{" "}
									<a href="https://www.linkedin.com/in/ahofsten/" target="_blank">
										linkedin.com/in/ahofsten/
									</a>
								</li>
								<li>
									<FontAwesomeIcon className="icon" icon={faGithub} />{" "}
									<a href="https://github.com/gbsr" target="_blank">
										github.com/gbsr
									</a>
								</li>
							</ul>
						</div>
					</section>
				</section>
			</main>
			<footer></footer>
		</>
	);
}

export default App;

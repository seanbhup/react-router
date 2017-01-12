
// var { Router,
//       Route,
//       IndexRoute,
//       IndexLink,
//       Link } = ReactRouter;

function Home(props){

	return(
		<div>
			<h1>This is the Home Page of {props.route.name}</h1>
			<p>
				HELLOOOEEOOEEOEOEOEOEOEOEOEOEOEOEOEOEOEOEOEO
          	</p>
        </div>
	)
}

function Contact(props){
	return(
		<div>
			<h1>This is the Contact Page</h1>
			<p>
				HELLOOOEEOOEEOEOEOEOEOEOEOEOEOEOEOEOEOEOEOEO ONCE MORE
				<img src="https://www.base64-image.de/build/img/mr-base64-482fa1f767.png" />
          	</p>
        </div>
	)
}


function Stuff(props){
	return(
		<div>
			<h1>This is the Stuff Page</h1>
			<p>
				HELLOOOEEOOEEOEOEOEOEOEOEOEOEOEOEOEOEOEOEOEO AGAIN
				<img src="https://www.base64-image.de/build/img/mr-base64-mail-1fd522927a.png" />
          	</p>
        </div>
	)	
}

function Blah(props){
	return(
		<div>
			<h1>This is the Blah Page</h1>
			<p>
			HELLOOOEEOOEEOEOEOEOEOEOEOEOEOEOEOEOEOEOEOEO OL CHAP
			</p>
		</div>
	)
}

function EEEEEE(props){
	return(
		<div>
			<h1>This is the EEEEEE Page</h1>
			<p>
			HELLOOOEEOOEEOEOEOEOEOEOEOEOEOEOEOEOEOEOEOEO AS WELL AS EEEEEEE
			</p>
		</div>
	)
}


class App extends React.Component{
	constructor(props){
	super(props);
	}

	render(){
		return(
			<div>
				<h1>Simple SPA</h1>
				<ul className="header">
					<li><ReactRouter.IndexLink to="/" activeClassName="active">Home</ReactRouter.IndexLink></li>
					<li><ReactRouter.Link to="stuff" activeClassName="active">Stuff</ReactRouter.Link></li>
					<li><ReactRouter.Link to="contact" activeClassName="active">Contact</ReactRouter.Link></li>
					<li><ReactRouter.Link to="blah" activeClassName="active">Blah</ReactRouter.Link></li>
					<li><ReactRouter.Link to="eeeeee" activeClassName="active">EEEEEE</ReactRouter.Link></li>
				</ul>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<ReactRouter.Router>
		<ReactRouter.Route path="/" component={App}>
			<ReactRouter.IndexRoute component={Home} name="Sean Bhupathi" />
			<ReactRouter.Route path="stuff" component={Stuff} />
			<ReactRouter.Route path="blah" component={Blah} />
			<ReactRouter.Route path="contact" component={Contact} />
			<ReactRouter.Route path="eeeeee" component={EEEEEE} />
		</ReactRouter.Route>
	</ReactRouter.Router>,
	document.getElementById("container")
)
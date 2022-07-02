import "./App.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import ContentWrapper from "./components/content/ContentWrapper";
function App() {
	return (
		<div class="wrapper">
			<Nav />
			<Sidebar />
			<ContentWrapper />
			<aside class="control-sidebar control-sidebar-dark"></aside>
		</div>
	);
}

export default App;

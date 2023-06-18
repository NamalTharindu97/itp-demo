import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserAdminPanal from "./pages/UserPanel/UserAdminPanal";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<UserAdminPanal />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

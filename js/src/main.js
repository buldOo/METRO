/** @format */

import { utilsHandler } from "./components/utilsHandler";

document.addEventListener("readystatechange", () => {
	switch (document.readyState) {
		case "loading":
			break;
		case "interactive":
			loaderHandler.demoSvg();

			break;
		case "complete":
			let path = location.pathname.split("/")[2];
			// AXEPTIO
			axeptioHandler.loadCookie();
			switch (path) {
				case "fr":
				case "en":
					break;
				default:
					console.log("Route not found");
					break;
			}
			break;
	}
});

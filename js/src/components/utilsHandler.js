/** @format */

export class utilsHandler {
	static sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	static isPositive(num) {
		if (Math.sign(num) === 1) {
			return true;
		}

		return false;
	}

	static getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}

	static removeClasslist(contents, classname) {
		contents.forEach((content) => {
			content.classList.remove(classname);
			content.style.backgroundImage = "";
		});
	}

	static scrollTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	static hexToRgba(hex, opacity) {
		let r = parseInt(hex.slice(1, 3), 16),
			g = parseInt(hex.slice(3, 5), 16),
			b = parseInt(hex.slice(5, 7), 16);

		return "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
	}
}

module.exports = function (eleventyConfig) {
	// assets folder
	eleventyConfig.addPassthroughCopy("assets");

	eleventyConfig.addFilter("readableDate", (dateObj) => {
		try {
			return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(dateObj));
		} catch (e) {
			return dateObj;
		}
	});

	// Combine given and family name to create driver.fullName
	eleventyConfig.addFilter("fullName", (driver) => {
		if (!driver) return "";
		return `${driver.givenName || driver.givenname || ""} ${driver.familyName || driver.familyname || ""}`.trim();
	});

	return {
		dir: {
			input: ".",
			includes: "_includes",
			data: "_data",
			output: "_site",
		},
	};
};

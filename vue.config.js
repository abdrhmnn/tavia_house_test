const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,

	// actually, i dont know how vue execute this code below, i just follow the solutions
	// that i found on internet
	devServer: {
		proxy: {
			"/97fa50515b797d0ff245": {
				target: "https://www.getpostman.com/collections/",
				changeOrigin: true,
			},
		},
	},
});

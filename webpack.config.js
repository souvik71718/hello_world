module.export = {
	entry: './main.js',
	output: {
	  path: './'
	},
	devserver: {
	  inline: true,
	  port: 3333
	},
	module: {
	  loaders: [
	     {
	       test: /\.js$/,
	       exclude: /node_modules/,
	       loader: 'babel',
	       query: {
	         presets: ['es2015','react']
	     }
	  }
	]
  }
}
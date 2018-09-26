const path = require('path');

module.exports = {
	stats: {
		// Configure the console output
		errorDetails: true, //this does show errors
		colors: false,
		modules: true,
		reasons: true,
	},
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'development',
	watch: true,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
			},
		],
	},
};

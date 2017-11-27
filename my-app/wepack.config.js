var config = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'output.js'
    },
    devServer:
    {
        inline:true,
        port: 8080
    }, 
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:{
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}

module.exports = config;

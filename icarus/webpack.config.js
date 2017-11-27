var config = {
    entry: './entry.js',
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
                loader: 'babel-loader',
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

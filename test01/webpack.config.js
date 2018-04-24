module.exports = {
    entry: __dirname +'/app/main.js',
    output:{
        path:__dirname + '/public',
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            'env'
                    ]
                    }
                }
            }
        ]
    }
}
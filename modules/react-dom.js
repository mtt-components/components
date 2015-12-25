'use strict';
//update for sync
module.exports = (function() {
    return [
        {
            repos: 'https://github.com/facebook/react.git',
            version: 'v0.14.2',
            name: 'react-dom',
            main: 'react-dom.js',
            build: 'rm package.json && npm install --prefix . react-dom@0.14.2',
            dependencies: [
                "react@^0.14.2"
            ],
            mapping: [
                 {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/node_modules\/react\-dom\/dist\/(.*)$/,
                    release: '$1'
                },

                {
                    reg: /^\/README\.md$/i,
                    release: '$&'
                },
                {
                    reg: '*',
                    release: false
                }
            ]
        }
    ]
})();

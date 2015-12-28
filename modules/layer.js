'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/sentsin/layer.git',
        version: '2.x',
        description: 'web弹层组件',
        name: 'layer',
        main: 'layer.js',

        mapping: [
            {
                reg: /^\/src\/layer.js$/,
                release: 'layer.js'
            },
            {
                reg: /^\/src\/skin\/.*$/,
                release: '/skin'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();

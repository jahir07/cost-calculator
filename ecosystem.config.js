module.exports = {
    apps: [
        {
            name: 'your-app-name',
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start',
            port: 3000, // yoru app port 
            instances: 'max',
            exec_mode: 'cluster',
            cwd: './client'
        }
    ]
};
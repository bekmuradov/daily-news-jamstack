module.exports = function(config) {
    config.setBrowserSyncConfig({
        https: {
            key: './localhost-key.pem',
            cert: './localhost.pem'
        }
    })
    config.addPassthroughCopy("src/js")
    return {
        dir: {
            input: "src",
            output: "dist",
            data: "_data"
        }
    }
}
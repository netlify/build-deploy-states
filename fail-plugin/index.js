module.exports = {
    onPreBuild: ({ utils }) => utils.build.failPlugin('Failure message')
}
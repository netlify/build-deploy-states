module.exports = {
    onPreBuild: ({ utils }) => utils.build.failBuild('Failure message')
}
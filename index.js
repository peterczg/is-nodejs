
function isNodejs () {
    return typeof process !== 'undefined' && !!process.versions && !!process.versions.node
}


modules.exports = isNodejs

modules.exports.default = isNodejs

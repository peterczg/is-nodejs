export default function isNodejs () {
    return typeof process !== 'undefined' && !!process.versions && !!process.versions.node
}
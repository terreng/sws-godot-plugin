function onStart(server, options) {
    // Do nothing
}

function onRequest(req, res, options, preventDefault) {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
}

module.exports = { onStart, onRequest };
try {
    module.exports.SwaggerUIBundle = require("./swagger-ui-bundle.js")
    module.exports.SwaggerUIStandalonePreset = require("./swagger-ui-standalone-preset.js")
} catch (e) {
    console.log("SwaggerUIBundle e/ou SwaggerUIStandalonePreset devem se utilizados apenas em navegadores");
    // see https://github.com/swagger-api/swagger-ui/issues/3291#issuecomment-311195388
    // for more information.
}

module.exports.getAbsoluteFSPath = require("./absolute-path.js")

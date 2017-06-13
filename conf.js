require('dotenv').config();
exports.config = {
    framework: 'jasmine',
    onPrepare: function() {
        browser.ignoreSynchronization = false;
        browser.waitForAngularEnabled(false);
    },
    specs: ['src/login.js', 'src/employed.js']
}
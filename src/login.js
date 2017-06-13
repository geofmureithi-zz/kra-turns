const notifier = require('node-notifier');
describe('Logging In', function() {
    it('should load a the portal page', function() {
        browser.get('https://itax.kra.go.ke/KRA-Portal/');
        expect(browser.getTitle()).toEqual('Kenya Revenue Authority');
    });

    it('input the pin number', function (done) {
        element(by.css('#logid')).sendKeys(process.env.KRA_PIN_NUMBER);
        element(by.css('#normalDiv > table > tbody > tr:nth-child(3) > td:nth-child(2) > a')).click();
        browser.sleep(500);
        element(by.css('#xxZTT9p2wQ')).sendKeys(process.env.KRA_PASSWORD);
        notifier.notify({
          'title': 'KRAturns',
          'message': 'Please input the captchaText'
        });
        let captcha = element(by.id('captcahText'));
        setTimeout(function () {
          browser.executeScript('arguments[0].style.border = "thick solid #0000FF";', captcha.getWebElement());
        },2000)
        setTimeout(function () {
            if(captcha.getText()){
                element(by.css('#loginButton')).click();
            }
            done()
        }, 10000)

    })
});

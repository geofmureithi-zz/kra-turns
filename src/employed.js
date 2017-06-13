describe('Start the Employment returns', function() {
    it('have e-returns icon', function() {
        var eReturnsIcon = element(by.css('#tab_eRet > tbody > tr:nth-child(2) > td:nth-child(1) > a'));
        expect(eReturnsIcon.getText()).toEqual('e-Return');
        eReturnsIcon.click();
        browser.sleep(500);
        element(by.css('#regType')).sendKeys(process.env.TAX_OBLIGATION);
        element(by.id('btnSubmit')).click();
        browser.sleep(500);
        element(by.id('cmbReturnType')).sendKeys(process.env.TAX_RETURN_TYPE);
        browser.sleep(500);
        element(by.id('txtPeriodFrom')).sendKeys(process.env.TAX_RETURN_PERIOD_START)
    });
});
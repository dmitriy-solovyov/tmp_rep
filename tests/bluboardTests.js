'use strict';

module.exports = {

    // before : function (browser) {
    //     browser.resizeWindow(800, 600);
    // },


    // before: function (browser, done) {
    //     browser.resizeWindow(1280, 800, done);
    // },

    'demo test google': function (client) {

        var login = client.page.blueboardMain();
        login.navigate().selectItem();
        login.selectProduct().assert.containsText("div:nth-child(8) > div.sectiontitle > h2", 'For the manager');
        // login.selectUseCases().waitForElementVisible("a[class='navlink w-nav-link']:nth-of-type(6)");
        login.selectUseCases();
        login.selectSignIn();

        // client.waitForElementVisible('.srg', 10000);

        // client.end();
    },
    after : function (browser) {
        browser.end();
    }
};
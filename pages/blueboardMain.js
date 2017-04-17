'use strict';

module.exports = {
    url: function () {
        return 'https://www.blueboard.com/';
    },
    elements: {
        mainmenu: {
            selector: '.navmenu w-nav-menu'
        },
        experiences: {
            // selector: 'a[href="/experiences"]'
            // selector: '/html/body/div[3]/div[1]/nav/a[1]',
            selector: "a[class='navlink w-nav-link']:nth-of-type(1)"
        },
        product: {
            selector: "a[class='navlink w-nav-link']:nth-of-type(2)"
        },
        useCases: {
            selector: "a[class='navlink w-nav-link']:nth-of-type(3)"
        },
        about: {
            selector: "a[class='navlink w-nav-link']:nth-of-type(4)"
        },
        blog: {
            selector: "a[class='navlink w-nav-link']:nth-of-type(5)"
        },
        signIn: {
            selector: "a[class='navlink w-nav-link']:nth-of-type(6)"
        },
        customText: {
            selector: "//*[@class='titlemiddle']",
            locateStrategy: 'xpath'
        },
        emailInput: {
            selector: ".custom-input-row input[name='email']"
        }

    },
    commands: [{
        selectItem: function () {
            return this.waitForElementVisible('@experiences')
                .click('@experiences')
                .waitForElementVisible('@customText');
            // return this.waitForElementVisible('@experiences', 3000)
            //     .click('@signIn')
            //     .waitForElementVisible('@customText', 3000);
        },
        selectProduct: function () {
            return this.waitForElementVisible('@product')
                .click('@product')
                .waitForElementVisible('div:nth-child(8) > div.sectiontitle > h2');
                // .assert.containsText("div:nth-child(8) > div.sectiontitle > h2", 'For the manager');
        },
        selectUseCases: function () {
            return this.waitForElementVisible('@useCases')
                .click('@useCases')
                .waitForElementVisible('@signIn');
        },
        selectSignIn: function () {
            return this.waitForElementVisible('@signIn')
                .click('@signIn')
                .waitForElementVisible('@emailInput');
        }


    }]
};
module.exports = {
    "Hello World": function (browser) {
        browser
            .url("https://www.google.com/")
            .waitForElementVisible("body")
            .assert.titleContains("Google")
            .assert.visible("input[title='Search']")
            .setValue("input[title='Search']", "Hello, World")
            .assert.visible("input[name='btnK']")
            .click("input[name='btnK']")
            .end();
    }
};
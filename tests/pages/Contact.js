﻿class ContactPage{

    constructor (browser, options) {
        this.browser = browser;
        this.options = options;
        this.submitButtonLocator = 'form input[type="submit"]';
        var htmlPage = "/contact";
        this.pageUrl = options.appUrl + htmlPage;
    };

    async visit() {
        //console.log(this.pageUrl); 
        this.page = await this.browser.newPage(); 
        await this.page.goto(this.pageUrl); 
    }; 

    async awaitH1() {
        await this.page.waitForSelector('H1');
    };

    async getH1Content() {
        return await this.page.evaluate(() => {
            return document.querySelector("H1").innerText;
        });
    };  

    async submitTheForm () {
        await this.page.click(this.submitButtonLocator);
    }; 


    // Are you on the right page?
    async isPageRight(){
        casper.waitForSelector("#footer", function () {
            casper.test.assertUrlMatch('/contact', 'On the send mail page.');
            casper.test.assertExists('form', 'A form has been found on the page.');
        });
    };


    // // Send email
    // this.sendEmail = function (emailAddress) {
    //     this.startOnContactPage();
    //     this.checkPage();
    //     this.fillForm(emailAddress);
    //     this.submitForm();
    //     this.checkResponsePage(emailAddress);
    // };

    // // Fill in the email box
    // this.fillForm = function(emailAddress) {
    //     casper.waitForSelector("form input[name='From']", function() {
    //         casper.fillSelectors('form#Contact_Form', {
    //             "textarea[name = Message]": 'Test message, ignore.',
    //             "input[name = From]": emailAddress,
    //         }, false);
    //     });
    // };

    // // Click on the submit button
    // this.submitForm = function () {
    //     casper.then(function () {
    //         casper.click('form input[type="submit"]', 'Send button clicked.');
    //     });
    // };

    // this.checkResponsePage = function (emailAddress) {
    //     casper.waitForSelector("H1", function () {
    //         casper.test.assertTextExists('Thank you', 'Correct title on response page.');
    //     });
    // };
}
module.exports = ContactPage;
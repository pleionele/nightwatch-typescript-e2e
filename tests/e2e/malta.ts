import { NightwatchBrowser } from 'nightwatch';

export = {

    'RentalCars': function (client: NightwatchBrowser) {
        client
            .url('https://www.rentalcars.com/')
            .waitForElementVisible('body', 15000)
            .assert.visible('#title')
            .pause(1000)
            // .assert.containsText('#title','Car Hire – Search, Compare & Save')
            .assert.visible('#ftsAutocomplete')
            // .setValue('#puSearchInput', 'Manch')
            .setValue('#ftsAutocomplete', 'Manch')
            .waitForElementVisible('ul.ui-autocomplete')
            .pause(1000)
            .click('li.ui-menu-item:nth-child(1)')
            .pause(1000)
            .setValue('#ftsAutocomplete', client.Keys.ENTER) // press Enter to search
            .pause(1000)
            .waitForElementPresent('#FullInsuranceSearchResultsBanner')
            .assert.containsText('#FullInsuranceSearchResultsBanner h3', 'Protect yourself from the unexpected')
            .pause(1000)
            .setValue('a.carResultRow_OfferInfo-btn-primary:nth-of-type(1)', client.Keys.ENTER)
            .pause(3000)
            .window_handles((result) => {
                client.switchWindow(result.value[1])
                    .assert.urlContains('DriverExtras')
            })
            .assert.urlContains('DriverExtras')
            .waitForElementPresent('#Insurance_Information_Panel',15000)
            .assert.containsText('#Insurance_Information_Panel', 'Full Insurance')
        
            // .window_handles((result) => {
            //     client.switchWindow(result.value[1])
            //         .pause(3000)
            //         .waitForElementPresent('#Insurance_Information_Panel',15000)
            //         .assert.containsText('#Insurance_Information_Panel', 'Full Insurance')
            //         .assert.containsText('#Insurance_Information_Panel','Free Cancellation')           // .waitForElementPresent('.ig-banner--fukl-protection')
                
            // })
           // .waitForElementPresent('#Insurance_Information_Panel',15000)
        //     .assert.containsText('#Insurance_Information_Panel', 'Full Insurance')
        //     .assert.containsText('#Insurance_Information_Panel','Free Cancellation')           // .waitForElementPresent('.ig-banner--fukl-protection')
        //    // .assert.containsText('.ig-banner--fukl-protection','Full Insurance')
           // .click('#formsubmit')
            // ig-banner ig-banner--image ig-banner--full-protection
            // .setValue('li', client.Keys.ENTER) // press Enter to search
            // .assert.visible('#FullInsuranceSearchResultsBanner')     
            .end();
    }
};
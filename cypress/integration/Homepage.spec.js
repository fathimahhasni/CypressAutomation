const Homepage = require ('../support/pages/Homepage');
let homepage = new Homepage();
const HomepageData = require ('../support/datatest/HomepageData');

describe('BDD Atlas', () => {
    it('Visit DDAtlas Web', () => {
        homepage.visit('');
    })

    it('Type a Quote', () => {
        homepage.type_quote(HomepageData.datatest.quote);
    })

    it('Select Colour', () => {
        homepage.choose_colour(HomepageData.datatest.quote_colour);
    })

    it('Submit a Quote', () => {
        homepage.submit_quote(HomepageData.datatest.quote,HomepageData.datatest.quote_colour);
    })

    it('Clear Spesicif Quote', () => {
        homepage.clear_quote(HomepageData.datatest.quote);
    })
})
const CommonFeatures  = require('./CommonFeatures');

class HomePage {

    constructor (tab) {
        this.page = tab;
        this.common = new CommonFeatures(tab);
        this.pageH1Text = "Womerton Bunkhouse";
    };

}
module.exports = HomePage;
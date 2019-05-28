var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should update correctly", function() {
        var listItemsComponent = window.listItemsComponent;
        expect(
            listItemsComponent.getEl("root").querySelectorAll("li").length
        ).to.equal(4);
        expect(
            listItemsComponent.getEl("root").querySelectorAll("a").length
        ).to.equal(4);
        expect(
            listItemsComponent.getEl("root").querySelectorAll("a")[0].innerHTML
        ).to.equal("apples");
        expect(
            listItemsComponent.getEl("root").querySelectorAll("a")[1].innerHTML
        ).to.equal("bananas");
        expect(
            listItemsComponent.getEl("root").querySelectorAll("a")[2].innerHTML
        ).to.equal("cherries");
        expect(
            listItemsComponent.getEl("root").querySelectorAll("a")[3].innerHTML
        ).to.equal("dates");

        listItemsComponent.input = {
            options: ["apples", "bananas"]
        };
        listItemsComponent.update();

        expect(
            listItemsComponent.getEl("root").querySelectorAll("li").length
        ).to.equal(2);
        expect(
            listItemsComponent.getEl("root").querySelectorAll("a").length
        ).to.equal(2);
        expect(
            listItemsComponent.getEl("root").querySelectorAll("a")[0].innerHTML
        ).to.equal("apples");
        expect(
            listItemsComponent.getEl("root").querySelectorAll("a")[1].innerHTML
        ).to.equal("bananas");

        listItemsComponent.input = {
            options: []
        };
        listItemsComponent.update();

        expect(
            listItemsComponent.getEl("root").querySelectorAll("li").length
        ).to.equal(0);
        expect(
            listItemsComponent.getEl("root").querySelectorAll("a").length
        ).to.equal(0);

        listItemsComponent.input = {
            options: ["apples", "bananas"]
        };
        listItemsComponent.update();

        expect(
            listItemsComponent.getEl("root").querySelectorAll("li").length
        ).to.equal(2);
        expect(
            listItemsComponent.getEl("root").querySelectorAll("a").length
        ).to.equal(2);
        expect(
            listItemsComponent.getEl("root").querySelectorAll("a")[0].innerHTML
        ).to.equal("apples");
        expect(
            listItemsComponent.getEl("root").querySelectorAll("a")[1].innerHTML
        ).to.equal("bananas");
    });
});

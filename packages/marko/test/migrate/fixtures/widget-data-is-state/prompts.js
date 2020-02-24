module.exports = [
    {
        question:
            "A widget file was discovered, would you like to migrate that as well?\nNote: widget migrations are not 100% safe and should be tested after migration.",
        answer: true
    },
    {
        question:
            "Would you like to rename the component file?\nNote: Marko 4 automatically discovers these files based on the naming convention, you may be able to remove them from a browser.json file after this.",
        answer: false
    }
];

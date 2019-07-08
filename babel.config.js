module.exports = {
    presets: [
        [
            "@babel/env",
            {
                loose: true,
                targets: {
                    node: "8"
                }
            }
        ]
    ]
};

exports.tests = [
    {
        templateData: {
            userInfo: function(done) {
                done(new Error('Invalid user'));
            }
        },
        expectedFile: require.resolve('./expected.html')
    },
    {
        templateData: {
            userInfo: function(done) {
                setTimeout(function() {
                    done(new Error('Invalid user'));
                }, 200);
            }
        },
        expectedFile: require.resolve('./expected.html')
    }
];

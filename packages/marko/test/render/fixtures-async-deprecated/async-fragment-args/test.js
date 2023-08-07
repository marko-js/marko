const { callbackProviderWithArgs } = require("../../../__util__/async-helpers");
var users = {
  0: {
    name: "John B. Flowers",
    occupation: "Clock repairer",
    gender: "Male",
  },
  1: {
    name: "Pamela R. Rice",
    occupation: "Cartographer",
    gender: "Female",
  },
  2: {
    name: "Barbara C. Rigsby",
    occupation: "Enrollment specialist",
    gender: "Female",
  },
  3: {
    name: "Anthony J. Ward",
    occupation: "Clinical laboratory technologist",
    gender: "Male",
  },
};

exports.templateData = {
  userInfo: callbackProviderWithArgs(1, (arg) => users[arg.userId]),
};

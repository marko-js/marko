module.exports = {
  collectCoverageFrom: ["{common,dom,html}/**/*.ts"],
  projects: [
    project("dom"),
    project("html", { testEnvironment: "node" }),
    project("end-to-end", { testEnvironment: "node" })
  ]
};

function project(displayName, config = {}) {
  return {
    displayName,
    preset: "ts-jest",
    testMatch: [`<rootDir>/test/${displayName}/**/*.test.ts`],
    ...config
  };
}

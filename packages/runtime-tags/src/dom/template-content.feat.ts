import { withTemplateContent } from "./walker";

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program rendering dynamic content inside a `<template>`.
withTemplateContent();

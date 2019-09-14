import { JSDOM } from "jsdom";
const jsdom = new JSDOM("", { runScripts: "dangerously" });
export const window = jsdom.window;
export const document = window.document;

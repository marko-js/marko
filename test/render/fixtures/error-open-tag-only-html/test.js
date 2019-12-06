import { expect } from "chai";

export const templateData = {};

export function checkError(e) {
    const message = e.toString();
    expect(message).to.contain(
        'The closing "test-open-tag-only" tag was not expected'
    );
}

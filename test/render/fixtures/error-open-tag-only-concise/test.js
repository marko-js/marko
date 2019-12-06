import { expect } from "chai";

export const templateData = {};

export function checkError(e) {
    const message = e.toString();
    expect(message).to.contain(
        'The "test-open-tag-only" tag does not allow nested body content'
    );
}

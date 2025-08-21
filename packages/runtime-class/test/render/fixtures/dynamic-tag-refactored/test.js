// Mock template renderer for testing
function mockTemplateRenderer(input) {
  return `<div class="template-rendered">Hello ${input.name}, you are ${input.age} years old!</div>`;
}

// Mock function renderer for testing
function mockFunctionRenderer(input) {
  return `<p class="function-rendered">${input.message}</p>`;
}

exports.templateData = {
  tagName: "section",
  templateRenderer: mockTemplateRenderer,
  voidTag: "input",
  condition: true,
  textareaTag: "textarea",
  selectTag: "select",
  functionRenderer: mockFunctionRenderer,
  contentTag: "article",
  dynamicContent: "This is dynamic content!"
};

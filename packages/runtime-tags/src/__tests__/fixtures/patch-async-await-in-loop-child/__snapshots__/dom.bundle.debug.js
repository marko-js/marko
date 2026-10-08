// tags/row.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_item_promise = $await_promise;
const $input$1 = ($scope, input) => $input_item($scope, input.item);
const $input_item = ($scope, input_item) => $input_item_promise($scope, input_item?.promise);
var row_default = /*@__PURE__*/ _template("__tests__/tags/row.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<main><!><button>interactive</button></main>";
const $walks = "D%b l";
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $for_content__item = ($scope, item) => $input_item($scope["#childScope/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

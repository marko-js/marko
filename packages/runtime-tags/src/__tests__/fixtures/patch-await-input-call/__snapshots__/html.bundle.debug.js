// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<p> </p>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": /*@__PURE__*/ (() => `__tests__/template.marko_2*content >#childScope/0>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template)}`)(),
	"__tests__/template.marko_0_#text#0/await": /*@__PURE__*/ (() => `__tests__/template.marko_0_#text#0/await >#childScope/0>;${((_w0) => `b/${_w0}&b`)($Body_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Body_content__template)}`)(),
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_w = _client_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	const Body = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.w, 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_w ? "__tests__/template.marko_1_input_w#0:3/init" : "__tests__/template.marko_1_input_w#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_w__closures, _scope($scope1_id, { _: $wi__input_w && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), $cg__input_w && "__tests__/template.marko_1_input_w#0:3/subscribe");
	}, $scope0_id) };
	_await($scope0_id, "#text/0", Promise.resolve(input.v), (r) => {
		const $scope2_id = _scope_id();
		const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0, 0, $scope0_id);
		Body.content({});
		_patch_child_end();
		_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "2:2");
	}, 1, "__tests__/template.marko_2*content", _unfilled_if($scope0_reason, 1), 1);
	_scope($scope0_id, { "ClosureScopes:input_w/5": $wi__input_w && $input_w__closures }, "__tests__/template.marko", 0);
}, 1);

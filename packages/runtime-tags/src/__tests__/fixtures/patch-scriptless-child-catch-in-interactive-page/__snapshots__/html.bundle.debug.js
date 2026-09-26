// tags/card/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/card/index.marko_3*content": "__tests__/tags/card/index.marko_3*content;D ;<em> </em>",
	"__tests__/tags/card/index.marko_1_#text#0/await": "__tests__/tags/card/index.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/tags/card/index.marko_1*content": "__tests__/tags/card/index.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;b%;<!><!><!>"
});
var card_default = _template_patch("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_try($scope0_id, "#text/0", _content_resume("__tests__/tags/card/index.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "#text/0", value, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {}, "__tests__/tags/card/index.marko", "2:4");
		}, 1, "__tests__/tags/card/index.marko_3*content", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card/index.marko", "1:2"), _client_guard($scope0_reason, 0) && "__tests__/tags/card/index.marko_1_input_promise#3/subscribe", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/tags/card/index.marko_2*content", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _source_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "#text/0", err.message, $sg__err_message)}</b>`);
		_source_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/tags/card/index.marko", "5:4");
	}, $scope0_id) }) }, 1);
	$scope0_page && _scope($scope0_id, { "ClosureScopes:input_promise": $input_promise__closures }, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button id=inc> </button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => ` D l/${_w0}&b`)("b%c"), ((_w0) => `<button id=inc> </button>${_w0}<!>`)($template$1)) });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=inc>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/2", $childScope);
	card_default({ promise: input.promise });
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1, () => [card_default]);

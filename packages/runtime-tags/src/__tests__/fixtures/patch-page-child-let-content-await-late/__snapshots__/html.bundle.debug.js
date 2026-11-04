// tags/card.marko
const $template$1 = "<div><!></div><!><!>";
const $walks$1 = "D%l%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card.marko_1*content": "__tests__/tags/card.marko_1*content __tests__/tags/card.marko_1_c#0:5/subscribe;D%;<section><!></section>",
	"__tests__/tags/card.marko_0_#text#1/await": "__tests__/tags/card.marko_0_#text#1/await __tests__/tags/card.marko_1_c#0:5/subscribe;D%;<section><!></section>",
	"__tests__/tags/card.marko": "__tests__/tags/card.marko;D%l%;<div><!></div><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $c__closures = new Set();
	let c = input.content;
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</div>");
	_await($scope0_id, "#text/1", resolveAfter("v", 1), (v) => {
		const $scope1_id = _scope_id();
		_html("<section>");
		_dynamic_tag($scope1_id, "#text/0", c, {}, 8);
		_html("</section>");
		_subscribe($c__closures, _scope($scope1_id, {}, "__tests__/tags/card.marko", "5:2"));
	}, 1, "__tests__/tags/card.marko_1*content", void 0, 1);
	_scope($scope0_id, { "ClosureScopes:c/6": $c__closures }, "__tests__/tags/card.marko", 0) || _client_branch(input.content);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>static ${_text_mark($scope1_id, "#text/0", input.label, 2, $scope0_reason, 0)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_label#0:3/subscribe");
	}, $scope0_id, 1) });
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:input_label/4": $wi__input_label && $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);

// tags/plain.marko
const $template$2 = "<i>plain</i>";
const $walks$2 = "b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/plain.marko": "__tests__/tags/plain.marko,<i>plain</i>" });
var plain_default = _template("__tests__/tags/plain.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<i>plain</i>");
});

// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const registry = { p: plain_default };
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card.marko_2*content": "__tests__/tags/card.marko_2*content,<em>loading</em>",
	"__tests__/tags/card.marko_1*content": "__tests__/tags/card.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/card.marko": "__tests__/tags/card.marko;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_kind = _write_guard($scope0_reason, 0), $cg__input_kind = _client_guard($scope0_reason, 0), $wi__input_kind = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_kind__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", registry[input.kind], {}, 2, 0, 0, $wg__input_kind, $scope0_reason, 0);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_kind ? "__tests__/tags/card.marko_1_input_kind#0:3/init" : "__tests__/tags/card.marko_1_input_kind#0:3/subscribe");
		$wi__input_kind && _subscribe(_unfilled_if($scope0_reason, 0) && $input_kind__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "3:2"), $cg__input_kind && "__tests__/tags/card.marko_1_input_kind#0:3/subscribe", $wg__input_kind);
		$wg__input_kind || $wi__input_kind && _resume_branch($scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<em>loading</em>");
	}, void 0, "__tests__/tags/card.marko_2*content", void 0, "__tests__/tags/card.marko_1*content", 1, 0, 2);
	_scope($scope0_id, { "ClosureScopes:input_kind/4": $wi__input_kind && _unfilled_if($scope0_reason, 0) && $input_kind__closures }, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ kind: "p" });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

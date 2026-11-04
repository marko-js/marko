// tags/plain.marko
_shells({ c: "c,<i>plain</i>" });
var plain_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<i>plain</i>");
});

// tags/card.marko
const $template = "<!><!><!>";
const registry = { p: plain_default };
const $setup$1 = [[], []];
_shells({
	b1: "b1,<em>loading</em>",
	b2: "b2;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_kind = _write_guard($scope0_reason, 0), $cg__input_kind = _client_guard($scope0_reason, 0), $wi__input_kind = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_kind__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", registry[input.kind], {}, 2, 0, 0, $wg__input_kind, $scope0_reason, 0);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "b0", $cg__input_kind);
		$wi__input_kind && _subscribe(_unfilled_if($scope0_reason, 0) && $input_kind__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_kind && "b0", $wg__input_kind);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "b1", void 0, "b2", 1, 0, 2);
	_scope($scope0_id, { e: $wi__input_kind && _unfilled_if($scope0_reason, 0) && $input_kind__closures });
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ kind: "p" });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

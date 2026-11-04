// tags/card.marko
const $template = "<div><!></div><!><!>";
const $walks = "D%l%c";
const $setup$1 = [[], []];
_shells({
	b0: "b0 b3;D%;<section><!></section>",
	b1: "b1 b3;D%;<section><!></section>",
	b: "b;D%l%;<div><!></div><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $c__closures = /* @__PURE__ */ new Set();
	let c = input.content;
	_html("<div>");
	_dynamic_tag($scope0_id, "a", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</div>");
	_await($scope0_id, "b", resolveAfter("v", 1), (v) => {
		const $scope1_id = _scope_id();
		_html("<section>");
		_dynamic_tag($scope1_id, "a", c, {}, 8);
		_html("</section>");
		_subscribe($c__closures, _scope($scope1_id, {}));
	}, 1, "b0", void 0, 1);
	_scope($scope0_id, { g: $c__closures }) || _client_branch(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>static ${_text_mark($scope1_id, "a", input.label, 2, $scope0_reason, 0)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a0");
	}, $scope0_id, 1) });
	_patch_child_end();
	_scope($scope0_id, {
		e: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope)
	});
}, 1);

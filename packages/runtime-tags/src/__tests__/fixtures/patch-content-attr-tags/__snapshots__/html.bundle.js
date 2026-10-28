// tags/card/index.marko
const $template = "<section><header><!></header><footer><!></footer></section>";
const $walks = "E%lD%m";
const $setup$1 = [[], []];
_shells({ b: "b;E%lD%;<section><header><!></header><footer><!></footer></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_header = _write_guard($scope0_reason, 1), $wg__input_footer = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<section><header>");
	_dynamic_tag($scope0_id, "a", input.header, {}, 2, 0, 0, $wg__input_header, $scope0_reason, 1);
	_html("</header><footer>");
	_dynamic_tag($scope0_id, "b", input.footer, {}, 10, 0, 0, $wg__input_footer, $scope0_reason, 2);
	_html("</footer></section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($walks)};${((_w0) => `<main>${_w0}</main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_h = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_h__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		header: attrTag({ content: _content("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<b>${_text_resume($scope1_id, "a", input.h, 1, $scope0_reason, 0)}</b>`);
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_h__closures, _scope($scope1_id, { _: $wi__input_h && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a0");
		}, $scope0_id) }),
		footer: attrTag({ content: _content("a2", () => {
			_scope_reason();
			_scope_id();
			_html("static");
		}, $scope0_id) })
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		e: $wi__input_h && _unfilled_if($scope0_reason, 0) && $input_h__closures,
		a: _existing_scope($childScope)
	});
}, 1);

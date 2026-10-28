// tags/card/index.marko
const $template = "<section><h2> </h2><!></section>";
const $walks = "E l%l";
const $setup$1 = [[], []];
_shells({ b: "b;E l%;<section><h2> </h2><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h2>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a3: "a3;D ;<i> </i>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&%l`)($walks)};${((_w0) => `<main>${_w0}<!></main>`)($template)}`)(),
	a4: /*@__PURE__*/ ((_w0) => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		title: input.title,
		content: _content("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", $global$1.brand, 1, 4, 0)}</em>`);
			_fill_global_subscribe("a0", $scope1_id);
			_scope($scope1_id, {});
		}, $scope0_id)
	});
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
			card_default({
				title: "x",
				content: _content("a3", () => {
					_scope_reason();
					const $scope3_id = _scope_id();
					_html(`<i>${_text_resume($scope3_id, "a", $global$1.brand, 1, 4, 0)}</i>`);
					_fill_global_subscribe("a2", $scope3_id);
					_scope($scope3_id, {});
				}, $scope2_id, 1)
			});
			_patch_child_end();
			_scope($scope2_id, { a: _existing_scope($childScope2) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a4"], $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

// tags/outer.marko
const $template = "<button>plain</button><section></section><i></i><p>body</p>";
const $walks = " b b b b";
const $setup = [[], ["b1"]];
_shells({ b: "b !b1; b b b ;<button>plain</button><section></section><i></i><p>body</p>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_html(`<button>plain</button>${_el_resume($scope0_id, "a")}<section`);
	_attrs_content(f(input.label), "b", $scope0_id, "section", 0);
	_html(`</section>${_el_resume($scope0_id, "b")}<i`);
	_attrs_content({ title: f(input.label).title }, "c", $scope0_id, "i", 1);
	_html(`</i>${_el_resume($scope0_id, "c")}<p${_attrs({ title: f(input.label).title }, "d", $scope0_id, "p")}>body</p>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb3", f, 1);
	_scope($scope0_id, {
		h: input.label,
		i: _write_if($scope0_reason, 1) && f
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label), _content_withhold(input.fmt));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("<b>body</b>");
	}, $scope0_id) };
	const wrap = _resume((v) => ({
		title: "w-" + v,
		content: Body.content
	}), "a0", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({
				fmt: wrap,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a2");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		g: Body?.content,
		h: _unfilled_if($scope0_reason, 0) && wrap
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 1)), $cg__input_show && _content_withhold(input.label));
}, 1);

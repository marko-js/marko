// tags/wrapper.marko
const $template = "<!><!><!>";
function boom() {
	throw new Error("SHOWN_message");
}
const $setup = [[], []];
_shells({
	b6: "b6;D l%;<p> </p><!><!>",
	b: "b !;b%;<!><!><!>"
});
var wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 1), $cg__input_fail = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.fail ? boom() : "ok", void 0, $scope0_reason, 2)}</p>`);
		_dynamic_tag($scope2_id, "b", input.content, {}, 10, 0, 0, $wg__input_content, $scope0_reason, 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, _client_guard($scope0_reason, 1) ? "b1" : "b2");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_fail ? "b3" : "b4");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_content__closures, _scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			Cf: $wi__input_content && 1
		}), "b2"), $cg__input_fail && "b4");
	}, void 0, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
		_subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b0", $wg__input_content);
		$wg__input_content || _resume_branch($scope1_id);
	}, void 0, "b5", "b6", 1);
	_scope($scope0_id, {
		d: input.content,
		f: $wi__input_content && $input_content__closures,
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_fail__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb7", input.content, !_server_guard($scope0_reason, 1)), _content_withhold(input.content));
});

// template.marko
_shells({
	a3: "a3",
	a0: "a0",
	a: "a !a8; D l%;<button> </button><!><!>",
	a7: /*@__PURE__*/ (() => `a7${_shell_marker(_shell_setup([["a14"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	const A = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>A ${_patch_text($scope1_id, "a", input.label, 2, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_label ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	const B = { content: _content_resume("a3", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<i>B ${_patch_text($scope2_id, "a", input.label, 2, $scope0_reason, 1)}</i>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_label ? "a4" : "a5");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cl: $wi__input_label && 1
		}));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason(38 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _patch_child($scope3_id, "a", 0);
			wrapper_default({
				fail: false,
				content: input.alt ? A : B
			});
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_init($scope3_id, "a6");
			_scope($scope3_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a7"], $scope0_reason, 2);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		f: input.label,
		h: _unfilled_if($scope0_reason, 2) && input.alt,
		i: count,
		j: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && A,
		k: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && B,
		l: $wi__input_label && $input_label__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va9", input.label, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va10", input.alt, !_server_guard($scope0_reason, 3)), $cg__input_show && _content_withhold(input.alt));
}, 1);

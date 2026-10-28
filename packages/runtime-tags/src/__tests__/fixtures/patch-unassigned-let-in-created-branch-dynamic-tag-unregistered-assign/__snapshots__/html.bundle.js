// tags/label.marko
const $template = "<span> </span>";
const $setup = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", typeof input.onHide, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a4: /*@__PURE__*/ (() => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&%c`)("D l")};${/*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 1), $cg__input_v = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_v = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_v__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let y = input.v;
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			label_default({ onHide: function() {
				y = "z";
			} });
			_patch_child_end();
			_dynamic_tag($scope1_id, "b", y === "b" ? "b" : "i", {}, 8, _content("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(_text_resume($scope2_id, "a", input.v, $wg__input_v));
				_subscribe($wi__input_v && $input_v__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_v);
				$wg__input_v || _resume_branch($scope2_id);
			}, $scope1_id));
			$cg__input_v && _patch_init($scope1_id, "a2");
			!$cg__input_v && _patch_fill($scope1_id, "va3", y, 1);
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.v,
		f: $wi__input_v && $input_v__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va5", input.v, !_server_guard($scope0_reason, 1)), _content_withhold(input.v));
}, 1);

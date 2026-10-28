// template.marko
function check(fail) {
	if (fail) throw new Error("down");
}
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wg__input_fail = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 0), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	let open = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", input.label, $wg__input_label)}${_text_resume($scope2_id, "b", check(input.fail), $wg__input_fail * 2)}</p>`);
				_subscribe($wi__input_fail && $input_fail__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_label || $wg__input_fail), "a1", $wg__input_label || $wg__input_fail);
				$wg__input_label || $wg__input_fail || _resume_branch($scope2_id);
			}, void 0, () => {
				_scope_reason();
				_scope_id();
				_html("Unavailable");
			}, void 0, "a2");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: input.label,
		f: input.fail,
		g: open,
		h: $wi__input_label && $input_label__closures,
		i: $wi__input_fail && $input_fail__closures
	});
}, 1);

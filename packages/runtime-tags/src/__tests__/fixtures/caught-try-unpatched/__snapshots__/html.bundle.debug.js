// template.marko
function check(fail) {
	if (fail) throw new Error("down");
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wg__input_fail = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 0), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_fail__closures = new Set();
	let open = true;
	_html("<main>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label)}${_text_resume($scope2_id, "#text/1", check(input.fail), $wg__input_fail * 2)}</p>`);
				_subscribe($wi__input_fail && $input_fail__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:6"), "__tests__/template.marko_2_input_label#0:4/subscribe", $wg__input_label || $wg__input_fail), "__tests__/template.marko_2_input_fail#0:5/subscribe", $wg__input_label || $wg__input_fail);
				$wg__input_label || $wg__input_fail || _resume_branch($scope2_id);
			}, void 0, () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html("Unavailable");
			}, void 0, "__tests__/template.marko_3*content");
			_scope($scope1_id, {}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		input_fail: input.fail,
		open,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_fail/8": $wi__input_fail && $input_fail__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_fail: ["input.fail"],
		open: "4:6"
	});
}, 1);

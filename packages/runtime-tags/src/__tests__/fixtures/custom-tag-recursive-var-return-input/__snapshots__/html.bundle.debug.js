// tags/countdown.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wg__input_depth__OR__input_label = _write_guard($scope0_reason, 0), $wi__input_depth__OR__input_label = _write_if($scope0_reason, 0), $wg__input_depth = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth__OR__input_label << 1 | $wg__input_depth << 3 | $wg__input_label << 5);
			const $childScope = _peek_scope_id();
			let child = $content({
				depth: input.depth - 1,
				label: input.label
			});
			$wi__input_depth__OR__input_label && _var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/tags/countdown.marko_1_child#3/var");
			_html(`<span>${_text_resume($scope1_id, "#text/2", child, $wg__input_label)}</span>`);
			$wi__input_depth__OR__input_label && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/countdown.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_depth__OR__input_label, $wg__input_depth);
	const $return = input.label;
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_label: input.label }, "__tests__/tags/countdown.marko", 0, { input_label: ["input.label"] });
	return $return;
};
var countdown_default = _template("__tests__/tags/countdown.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let label = "a";
	countdown_default({
		depth: 1,
		label: "x"
	});
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	countdown_default({
		depth: 1,
		label
	});
	_html(`<button>${_text_resume($scope0_id, "#text/3", label)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		label,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { label: "1:6" });
}, 1);

// tags/rec.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let shown = false;
	_html(`<button>${_text_mark($scope0_id, "b", input.depth, $wg__input_depth)}</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.depth < 1) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope = _peek_scope_id();
			let v = $content({ depth: input.depth + 1 });
			_var($scope1_id, "b", $childScope, "b0");
			_if(() => {}, $scope1_id, "c", 1, 1, 0, 0, 1);
			_scope($scope1_id, {
				d: v,
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, $wg__input_depth);
	const $return = "off";
	_script($scope0_id, "b1");
	_scope($scope0_id, { g: shown });
	return $return;
};
var rec_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	rec_default({ depth: 0 });
}, 1);

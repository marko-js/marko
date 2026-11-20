// tags/rec.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let shown = false;
	_html(`<button>${_text_mark($scope0_id, "#text/1", input.depth, $wg__input_depth)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.depth < 1) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope = _peek_scope_id();
			let v = $content({ depth: input.depth + 1 });
			_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/tags/rec.marko_1_v#3/var");
			_if(() => {
				if (shown) {
					const $scope2_id = _scope_id();
					_html(`<em>${_text_mark($scope2_id, "#text/0", v)}</em>`);
					_scope($scope2_id, {}, "__tests__/tags/rec.marko", "5:4");
					return 0;
				}
			}, $scope1_id, "#text/2", 1, 1, 0, 0, 1);
			_scope($scope1_id, {
				v,
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/rec.marko", "3:2", { v: "4:8" });
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $wg__input_depth);
	const $return = shown ? "on" : "off";
	_script($scope0_id, "__tests__/tags/rec.marko_0");
	_scope($scope0_id, { shown }, "__tests__/tags/rec.marko", 0, { shown: "1:6" });
	return $return;
};
var rec_default = _template("__tests__/tags/rec.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	rec_default({ depth: 0 });
}, 1);

// tags/rec.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_depth = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_serialize_reason($sg__input_depth << 1);
			const $childScope = _peek_scope_id();
			let child = $content({ depth: input.depth - 1 });
			_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/tags/rec.marko_1_child#3/var");
			_html(`<span>${_text_resume($scope1_id, "#text/2", child)}</span>`);
			_scope($scope1_id, {
				_: _serialize_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/rec.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $sg__input_depth, $sg__input_depth, $sg__input_depth);
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}`);
	const $return = n;
	_script($scope0_id, "__tests__/tags/rec.marko_0");
	_scope($scope0_id, { n }, "__tests__/tags/rec.marko", 0, { n: "1:6" });
	return $return;
};
var rec_default = _template("__tests__/tags/rec.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	rec_default({ depth: 1 });
}, 1);

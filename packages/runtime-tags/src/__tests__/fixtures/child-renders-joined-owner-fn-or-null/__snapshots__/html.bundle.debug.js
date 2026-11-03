// tags/label-view.marko
var label_view_default = _template("__tests__/tags/label-view.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flag__OR__input_a = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const get = input.flag ? input.a : null;
	_html(`<p>${_text_resume($scope0_id, "#text/0", get && get(), $wg__input_flag__OR__input_a)}</p>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_flag: _write_if($scope0_reason, 2) && input.flag,
		input_a: _write_if($scope0_reason, 1) && input.a
	}, "__tests__/tags/label-view.marko", 0, {
		input_flag: ["input.flag"],
		input_a: ["input.a"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const up = () => "U" + input.title;
	_set_scope_reason($wg__input_title << 1 | $wg__input_title << 5);
	const $childScope = _peek_scope_id();
	label_view_default({
		a: up,
		flag: true
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

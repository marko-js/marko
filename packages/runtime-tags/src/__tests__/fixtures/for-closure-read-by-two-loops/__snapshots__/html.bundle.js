// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_first = _write_guard($scope0_reason, 1), $wg__input_second = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let label = "a";
	let suffix = "!";
	_html("<ul>");
	_for_of(input.first, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "a", label)}${_text_mark($scope1_id, "b", item, $wg__input_first * 2)}</li>`);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, $wg__input_first, $wg__input_first, "</ul>", 1);
	_html("<ol>");
	_for_of(input.second, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_text_mark($scope2_id, "a", label)}${_text_mark($scope2_id, "b", item, $wg__input_second * 2)}${_text_mark($scope2_id, "c", suffix, 2)}</li>`);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "b", 1, $wg__input_second, $wg__input_second, "</ol>", 1);
	_html(`<button>go</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: _write_if($scope0_reason, 0) && label,
		i: _write_if($scope0_reason, 2) && suffix
	});
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_first = _write_guard($scope0_reason, 1), $wg__input_second = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let label = "a";
	let suffix = "!";
	_html("<ul>");
	_for_of(input.first, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "#text/0", label)}${_text_mark($scope1_id, "#text/1", item, $wg__input_first * 2)}</li>`);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
	}, 0, $scope0_id, "#ul/0", 1, $wg__input_first, $wg__input_first, "</ul>", 1);
	_html("<ol>");
	_for_of(input.second, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_text_mark($scope2_id, "#text/0", label)}${_text_mark($scope2_id, "#text/1", item, $wg__input_second * 2)}${_text_mark($scope2_id, "#text/2", suffix, 2)}</li>`);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:4");
	}, 0, $scope0_id, "#ol/1", 1, $wg__input_second, $wg__input_second, "</ol>", 1);
	_html(`<button>go</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		label: _write_if($scope0_reason, 0) && label,
		suffix: _write_if($scope0_reason, 2) && suffix
	}, "__tests__/template.marko", 0, {
		label: "1:6",
		suffix: "2:6"
	});
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<div${_attr_class(`c${count}`)}>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<button>${_text_mark($scope1_id, "#text/1", count)}</button>${_el_mark($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	_html(`<section${_attr_class(`c${count}`)}>`);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_mark($scope2_id, "#text/0", count)}</b><i>${_text_mark($scope2_id, "#text/1", count)}</i>`);
			_scope($scope2_id, {}, "__tests__/template.marko", "8:4");
			return 0;
		}
	}, $scope0_id, "#section/1", 1, 1, 1, "</section>");
	_html(`<ul${_attr_class(`c${count}`)}>`);
	_for_of(input.items, (item) => {
		const $scope3_id = _scope_id();
		_html(`<li>${_text_mark($scope3_id, "#text/0", item, $wg__input_items)} ${_text_mark($scope3_id, "#text/1", count, 2)}</li>`);
		_scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "14:4");
	}, 0, $scope0_id, "#ul/2", 1, 1, $wg__input_items, "</ul>", 1);
	_for_until(count, 0, 1, (x) => {
		const $scope4_id = _scope_id();
		_html(_escape(x));
		_scope($scope4_id, {}, "__tests__/template.marko", "18:2");
	}, 0, $scope0_id, "#text/3");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);

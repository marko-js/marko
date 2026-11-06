// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<div${_attr_class(`c${count}`)}>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<button>${_text_mark($scope1_id, "b", count)}</button>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_html(`<section${_attr_class(`c${count}`)}>`);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_mark($scope2_id, "a", count)}</b><i>${_text_mark($scope2_id, "b", count)}</i>`);
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, "</section>");
	_html(`<ul${_attr_class(`c${count}`)}>`);
	_for_of(input.items, (item) => {
		const $scope3_id = _scope_id();
		_html(`<li>${_text_mark($scope3_id, "a", item, $wg__input_items)} ${_text_mark($scope3_id, "b", count, 2)}</li>`);
		_scope($scope3_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "c", 1, 1, $wg__input_items, "</ul>", 1);
	_for_until(count, 0, 1, (x) => {
		const $scope4_id = _scope_id();
		_html(_escape(x));
		_scope($scope4_id, {});
	}, 0, $scope0_id, "d");
	_scope($scope0_id, { i: count });
}, 1);

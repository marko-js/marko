// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const inc = () => count++;
	_html(`<div${_attr_class(`c${count}`)}>`);
	_if(() => {
		if (count) {
			const $scope1_id = _scope_id();
			_html(`<button id=own>${_text_resume($scope1_id, "b", count)}</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_html(`<section${_attr_class(`c${count}`)}>`);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_html(`<button id=param>${_text_resume($scope2_id, "b", count)}</button>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a1");
			_scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, 1, _write_guard($scope0_reason, 0), "</section>", 1);
	_for_until(count, 0, 1, (x) => {
		const $scope3_id = _scope_id();
		_html(_escape(x));
		_scope($scope3_id, {});
	}, 0, $scope0_id, "c");
	_html(`<span>${_text_resume($scope0_id, "d", typeof inc)}</span>`);
	_scope($scope0_id, { h: count });
}, 1);

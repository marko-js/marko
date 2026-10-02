// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const inc = () => count++;
	_html(`<div${_attr_class(`c${count}`)}>`);
	_if(() => {
		if (count) {
			const $scope1_id = _scope_id();
			_html(`<button id=own>${_text_resume($scope1_id, "#text/1", count)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	_html(`<section${_attr_class(`c${count}`)}>`);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_html(`<button id=param>${_text_resume($scope2_id, "#text/1", count)}</button>${_el_resume($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:4");
			return 0;
		}
	}, $scope0_id, "#section/1", 1, 1, _write_guard($scope0_reason, 0), "</section>", 1);
	_for_until(count, 0, 1, (x) => {
		const $scope3_id = _scope_id();
		_html(_escape(x));
		_scope($scope3_id, {}, "__tests__/template.marko", "13:2");
	}, 0, $scope0_id, "#text/2");
	_html(`<span>${_text_resume($scope0_id, "#text/3", typeof inc)}</span>`);
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);

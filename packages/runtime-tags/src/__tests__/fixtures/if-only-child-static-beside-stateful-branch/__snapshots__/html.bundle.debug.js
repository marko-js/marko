// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div${_attr_class(`c${count}`)}>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "#text/0", count)}</span>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	_for_until(count, 0, 1, (x) => {
		const $scope2_id = _scope_id();
		_html(_escape(x));
		_scope($scope2_id, {}, "__tests__/template.marko", "5:2");
	}, 0, $scope0_id, "#text/1");
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);

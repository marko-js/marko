// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 3;
	_html(`<button>more</button>${_el_mark($scope0_id, "#button/0")}<div class=defaults>`);
	_for_to(count, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(_escape(i));
		_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, 0, $scope0_id, "#div/1", 1, 1, 1, "</div>");
	_html("<div class=from>");
	_for_to(count, 1, 1, (i) => {
		const $scope2_id = _scope_id();
		_html(_escape(i));
		_scope($scope2_id, {}, "__tests__/template.marko", "7:4");
	}, 0, $scope0_id, "#div/2", 1, 1, 1, "</div>");
	_html("<div class=step>");
	_for_until(count, 0, 2, (i) => {
		const $scope3_id = _scope_id();
		_html(_escape(i));
		_scope($scope3_id, {}, "__tests__/template.marko", "10:4");
	}, 0, $scope0_id, "#div/3", 1, 1, 1, "</div>");
	_html("<div class=by>");
	_for_to(count, 0, 1, (i) => {
		const $scope4_id = _scope_id();
		_html(_escape(i));
		_scope($scope4_id, {}, "__tests__/template.marko", "13:4");
	}, (n) => n, $scope0_id, "#div/4", 1, 1, 1, "</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);

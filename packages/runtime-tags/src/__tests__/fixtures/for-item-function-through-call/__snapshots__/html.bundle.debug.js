// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<span>${_text_resume($scope0_id, "#text/0", n)}</span>`);
	_for_of([_resume(() => n++, "__tests__/template.marko_0/of", $scope0_id)].concat([]), (fn) => {
		const $scope1_id = _scope_id();
		_html(`<button id=concat></button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_fn#2");
		_scope($scope1_id, { fn }, "__tests__/template.marko", "3:2", { fn: "3:6" });
	}, 0, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_for_of(Object.values({ counted: _resume(function() {
		n++;
	}, "__tests__/template.marko_0/of2", $scope0_id) }), (fn) => {
		const $scope2_id = _scope_id();
		_html(`<button id=values></button>${_el_resume($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2_fn#2");
		_scope($scope2_id, { fn }, "__tests__/template.marko", "6:2", { fn: "6:6" });
	}, 0, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_for_of([_resume(() => n++, "__tests__/template.marko_0/of3", $scope0_id)], (fn) => {
		const $scope3_id = _scope_id();
		_html(`<button id=direct></button>${_el_resume($scope3_id, "#button/0")}`);
		_script($scope3_id, "__tests__/template.marko_3_fn#2");
		_scope($scope3_id, { fn }, "__tests__/template.marko", "13:2", { fn: "13:6" });
	}, 0, $scope0_id, "#text/3", 1, 1, 0, 0, 1);
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);

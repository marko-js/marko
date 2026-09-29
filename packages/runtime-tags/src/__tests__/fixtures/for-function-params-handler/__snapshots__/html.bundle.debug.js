// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of([_resume(() => count++, "__tests__/template.marko_0/of", $scope0_id)], (handler) => {
		const $scope1_id = _scope_id();
		_html(`<button id=of>of</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_handler#2");
		_scope($scope1_id, { handler }, "__tests__/template.marko", "2:2", { handler: "2:6" });
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_for_in({ add: _resume(function() {
		count += 10;
	}, "__tests__/template.marko_0/in", $scope0_id) }, (key, handler) => {
		const $scope2_id = _scope_id();
		_html(`<button id=in>${_escape(key)}</button>${_el_resume($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2_handler#4");
		_scope($scope2_id, { handler }, "__tests__/template.marko", "5:2", { handler: "5:11" });
	}, 0, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_html(`<span>${_text_resume($scope0_id, "#text/2", count)}</span>`);
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = undefined;
	_if(() => {
		if (obj) {
			const $scope1_id = _scope_id();
			_html(`<button class=read>${_text_resume($scope1_id, "#text/1", obj.a)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_a#0:3");
			_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button class=set></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { a: obj?.a }, "__tests__/template.marko", 0, { a: "2:18" });
}, 1);

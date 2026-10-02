// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [{
		id: 1,
		n: "a"
	}];
	_for_of(list, (item) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_resume($scope1_id, "#text/0", item.n)}</span>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, "id", $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);

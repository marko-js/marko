// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ id: 1 }];
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		if (item.id > 9) {
			const $scope2_id = _scope_id();
			_html("big");
		} else {
			const $scope3_id = _scope_id();
			_html("<section></section>");
		}
		_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, "id", $scope0_id, "#text/0");
	_html(`<button>add</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
}, 1);

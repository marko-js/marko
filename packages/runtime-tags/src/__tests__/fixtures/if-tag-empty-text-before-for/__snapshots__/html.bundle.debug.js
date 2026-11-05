// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			forOf([{ id: 1 }, { id: 2 }], (item) => {
				const $scope3_id = _scope_id();
				_html(`<b>${_escape(item.id)}</b>`);
			});
			_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("none");
			_scope($scope2_id, {}, "__tests__/template.marko", "6:2");
			return 1;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);

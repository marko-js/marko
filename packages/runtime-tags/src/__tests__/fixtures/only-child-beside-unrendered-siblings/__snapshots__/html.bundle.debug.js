// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const label = "shown";
	_html("<div>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<b>${_escape(label)}</b>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		open,
		label
	}, "__tests__/template.marko", 0, {
		open: "1:6",
		label: "3:10"
	});
}, 1);

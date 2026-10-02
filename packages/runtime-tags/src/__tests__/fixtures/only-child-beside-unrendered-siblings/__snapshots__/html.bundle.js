// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const label = "shown";
	_html("<div>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<b>${_escape(label)}</b>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: open,
		d: label
	});
}, 1);

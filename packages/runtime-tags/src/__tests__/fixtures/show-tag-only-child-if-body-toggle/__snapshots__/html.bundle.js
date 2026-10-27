// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<section>`);
	_show_start(show, 1, 1, "</section>");
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html("<i>no</i>");
			_scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_show_end($scope0_id, "b", show, 1, 1, "</section>");
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: show });
}, 1);

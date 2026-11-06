// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<div${_attr_class(`c${open}`)}>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<button>${_text_mark($scope1_id, "b", open)}</button>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_show_start(open, 0);
	_html("<p>shown</p>");
	_show_end($scope0_id, "b", open, 1, 0, 0, 1);
	_scope($scope0_id, { f: open });
}, 1);

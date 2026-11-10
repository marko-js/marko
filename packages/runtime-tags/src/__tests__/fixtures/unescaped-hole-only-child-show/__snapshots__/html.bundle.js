// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_html = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html("<main>");
	_if(() => {
		if (input.html) {
			const $scope1_id = _scope_id();
			_show_start(open);
			_html(_html_mark($scope1_id, "b", input.html, $wg__input_html));
			_show_end($scope1_id, "c", open);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_html);
	_html(`<button>t</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: open });
}, 1);

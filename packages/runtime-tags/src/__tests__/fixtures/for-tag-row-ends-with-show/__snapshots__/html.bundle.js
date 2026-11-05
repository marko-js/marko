// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<p>");
	_for_of([1, 2], (i) => {
		const $scope1_id = _scope_id();
		_html(_text_mark($scope1_id, "a", n, 2));
		const $show = input.show;
		_show_start($show, $wg__input_show);
		_html(_escape(i));
		_show_end($scope1_id, "d", $show, $wg__input_show);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, 0);
	_html(`</p><button>inc</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: n });
}, 1);

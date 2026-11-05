// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<p>");
	_for_of([1, 2], (i) => {
		const $scope1_id = _scope_id();
		_html(_text_mark($scope1_id, "#text/0", n, 2));
		const $show = input.show;
		_show_start($show, $wg__input_show);
		_html(_escape(i));
		_show_end($scope1_id, "#text/3", $show, $wg__input_show);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:5");
	}, 0, $scope0_id, "#p/0", 1, 0);
	_html(`</p><button>inc</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);

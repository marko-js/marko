// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>next</button>${_el_mark($scope0_id, "#button/0")}<p>`);
	const $show = n !== 2;
	_show_start($show, 1, 1, "</p>");
	_if(() => {
		if (n === 0) {
			const $scope1_id = _scope_id();
			_html("zero");
			_scope($scope1_id, {}, "__tests__/template.marko", "5:6");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_scope($scope2_id, {}, "__tests__/template.marko", "6:6");
			return 1;
		}
	}, $scope0_id, "#text/2");
	_show_end($scope0_id, "#p/1", $show, 1, 1, "</p>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);

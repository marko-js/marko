// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>next</button>${_el_mark($scope0_id, "a")}<p>`);
	const $show = true;
	_show_start($show, 1, 1, "</p>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("zero");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c");
	_show_end($scope0_id, "b", $show, 1, 1, "</p>");
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: n });
}, 1);

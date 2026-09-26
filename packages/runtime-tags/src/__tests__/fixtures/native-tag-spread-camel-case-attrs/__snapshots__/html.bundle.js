// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rest = input.rest;
	_html(`<button>update</button>${_el_resume($scope0_id, "a")}<div tabIndex=0 readOnly${_attrs_partial(rest, {
		tabIndex: 1,
		tabindex: 1,
		readOnly: 1,
		readonly: 1
	}, "b", $scope0_id, "div")}>hi</div>${_el_resume($scope0_id, "b")}<svg tabIndex=0 viewBox="0 0 10 10"`);
	_attrs_partial_content(rest, {
		tabIndex: 1,
		tabindex: 1,
		viewBox: 1,
		viewbox: 1
	}, "c", $scope0_id, "svg");
	_html(`</svg>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rest = input.rest;
	_html(`<button>update</button>${_el_resume($scope0_id, "#button/0")}<div tabIndex=0 readOnly${_attrs_partial(rest, {
		tabIndex: 1,
		tabindex: 1,
		readOnly: 1,
		readonly: 1
	}, "#div/1", $scope0_id, "div")}>hi</div>${_el_resume($scope0_id, "#div/1")}<svg tabIndex=0 viewBox="0 0 10 10"`);
	_attrs_partial_content(rest, {
		tabIndex: 1,
		tabindex: 1,
		viewBox: 1,
		viewbox: 1
	}, "#svg/2", $scope0_id, "svg");
	_html(`</svg>${_el_resume($scope0_id, "#svg/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_rest#6");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, {
		"EventAttributes:#div/1": ["...rest", "3:9"],
		"EventAttributes:#svg/2": ["...rest", "4:9"]
	});
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<svg${_attrs(input.svg, "#svg/0", $scope0_id, "svg")}><use`);
	_attrs_content(input.use, "#use/1", $scope0_id, "use");
	_html(`</use>${_el_resume($scope0_id, "#use/1")}</svg>${_el_resume($scope0_id, "#svg/0")}<div`);
	_attrs_content(input.div, "#div/2", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_div#7");
	_script($scope0_id, "__tests__/template.marko_0_input_use#6");
	_script($scope0_id, "__tests__/template.marko_0_input_svg#5");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, {
		"EventAttributes:#svg/0": ["...input.svg", "1:9"],
		"EventAttributes:#use/1": ["...input.use", "2:11"],
		"EventAttributes:#div/2": ["...input.div", "4:9"]
	});
}, 1);

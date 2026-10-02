// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = {
		rest: 1,
		a: 2
	};
	const { rest: x, ...rest } = o;
	_html(`<span${_attrs(rest, "#span/0", $scope0_id, "span")}>${_text_resume($scope0_id, "#text/1", x)}</span>${_el_resume($scope0_id, "#span/0")}<button></button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_rest#5");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, { "EventAttributes:#span/0": ["...rest", "3:10"] });
}, 1);

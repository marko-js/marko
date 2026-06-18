// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { onClick, ...rest } = input;
	_html("<button");
	_attrs_content({
		onClick: _resume(function(_, el) {
			el.textContent = "clicked";
		}, "__tests__/template.marko_0/onClick"),
		...rest
	}, "#button/0", $scope0_id, "button");
	_html(`</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_rest");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);

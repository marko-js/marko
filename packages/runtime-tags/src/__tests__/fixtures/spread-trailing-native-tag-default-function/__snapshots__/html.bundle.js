// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { onClick, ...rest } = input;
	_html("<button");
	_attrs_content({
		onClick: _resume(function(_, el) {
			el.textContent = "clicked";
		}, "a0"),
		...rest
	}, "a", $scope0_id, "button");
	_html(`</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
}, 1);

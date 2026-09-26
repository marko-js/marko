// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let linked = true;
	_html(`<svg><use${_attr_and("xlink:href", linked, " xlink:href=#a")}${_attr_and("xml:lang", linked, " xml:lang=en")}></use>${_el_resume($scope0_id, "a")}</svg><div xml:lang=en></div>${_el_resume($scope0_id, "b")}<button>Toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: linked });
}, 1);

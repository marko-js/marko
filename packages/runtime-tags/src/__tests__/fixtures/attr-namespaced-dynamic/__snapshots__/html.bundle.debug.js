// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let linked = true;
	_html(`<svg><use${_attr_and("xlink:href", linked, " xlink:href=#a")}${_attr_and("xml:lang", linked, " xml:lang=en")}></use>${_el_resume($scope0_id, "#use/0")}</svg><div xml:lang=${linked ? "en" : "fr"}></div>${_el_resume($scope0_id, "#div/1")}<button>Toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { linked }, "__tests__/template.marko", 0, { linked: "1:6" });
}, 1);

// tags/getter.marko
var getter_default = _template("__tests__/tags/getter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const getter = _resume(() => {
		return "hello";
	}, "__tests__/tags/getter.marko_0/getter");
	const $return = getter;
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let get = getter_default({});
	_html(`<div></div>${_el_resume($scope0_id, "#div/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_get");
	writeScope($scope0_id, { get }, "__tests__/template.marko", 0, { get: "1:9" });
}, 1);

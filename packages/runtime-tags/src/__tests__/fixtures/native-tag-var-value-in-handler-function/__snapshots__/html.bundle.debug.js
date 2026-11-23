// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const mark = _resume(() => {
		const get = _el_read_error;
		get().textContent = "clicked";
	}, "__tests__/template.marko_0/mark", $scope0_id);
	_html(`<div></div>${_el_mark($scope0_id, "#div/0")}<button></button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_mark#2");
	_scope($scope0_id, { mark }, "__tests__/template.marko", 0, { mark: "2:8" });
}, 1);

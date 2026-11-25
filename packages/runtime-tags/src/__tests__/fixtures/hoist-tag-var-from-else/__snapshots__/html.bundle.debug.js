// template.marko
function $getLabel() {
	return "b";
}
_resume("__tests__/template.marko_2/getLabel", $getLabel);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = false;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (a) {
			const $scope1_id = _scope_id();
			_html("<span>a</span>");
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			const getLabel = $getLabel;
			_scope($scope2_id, { getLabel }, "__tests__/template.marko", "6:2", { getLabel: "7:10" });
			_assert_hoist(getLabel);
			return 1;
		}
	}, $scope0_id, "#text/1");
	let label = "none";
	_html(`<button class=read>${_text_mark($scope0_id, "#text/3", label)}</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { a }, "__tests__/template.marko", 0, { a: "1:6" });
}, 1);

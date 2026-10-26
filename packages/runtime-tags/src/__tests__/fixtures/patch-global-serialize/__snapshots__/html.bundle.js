// template.marko
_shells({ a: "a !a0 a2; D l ;<button> </button><pre></pre>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count + $global$1.brand)}</button>${_el_resume($scope0_id, "a")}<pre></pre>${_el_resume($scope0_id, "c")}`);
	_fill_global_subscribe("a1", $scope0_id, 1);
	_script($scope0_id, "a0");
	_script($scope0_id, "a2");
	$scope0_page && _scope($scope0_id, { d: count });
}, 1);

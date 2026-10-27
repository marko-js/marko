// template.marko
_shells({ a: "a !a3; D lD l%;<button> </button><p> </p><!><!>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count + $global$1.suffix)}</button>${_el_resume($scope0_id, "a")}<p>${_text_resume($scope0_id, "c", count + $global$1.suffix)}</p>`);
	if ($scope0_page) _if(() => {}, $scope0_id, "d", 1, 1, 0, 0, 1);
	_fill_global_subscribe("a1", $scope0_id, 1);
	_fill_global_subscribe("a2", $scope0_id, 1);
	_script($scope0_id, "a3");
	$scope0_page && _scope($scope0_id, { e: count });
}, 1);

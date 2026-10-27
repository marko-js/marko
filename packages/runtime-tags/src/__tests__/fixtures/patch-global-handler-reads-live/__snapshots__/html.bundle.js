// template.marko
_shells({ a: "a !a0; bD ;<button>read</button><output> </output>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	$global();
	_html(`<button>read</button>${_el_resume($scope0_id, "a")}<output>${_text_resume($scope0_id, "b", "-")}</output>`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {});
}, 1);

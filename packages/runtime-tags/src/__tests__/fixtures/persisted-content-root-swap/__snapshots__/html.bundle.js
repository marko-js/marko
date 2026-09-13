// template.marko
_shells({ a: "a !a0;D%b D ;<main><!><button> </button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, _source_guard($scope0_reason, 0), _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, { g: count });
}, 1, 0);

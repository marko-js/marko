// card.marko
_shells({ a: "a;D ;<em> </em>" });
var card_default = _template_persisted("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", $global().brand)}</em>`);
	_global_subscribe("a0", $scope0_id);
	$scope0_page && _scope($scope0_id, {});
}, 0, 1);

// template.marko
_shells({ b: "b;D%;<main><!></main>" });
var template_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_on = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.on ? card_default : null;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_on, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</main>");
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);

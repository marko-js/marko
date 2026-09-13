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
_shells({ b: "b !b0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let on = true;
	_html("<main>");
	_dynamic_tag($scope0_id, "a", card_default, {});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "b0");
	$scope0_page && _scope($scope0_id, { c: on });
}, 1, 1);

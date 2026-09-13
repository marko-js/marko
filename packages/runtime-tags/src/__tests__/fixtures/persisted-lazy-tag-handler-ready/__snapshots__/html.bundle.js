// child.marko
_shells({ a: "a !a1; ;<button>go</button>" });
var child_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const handler = _resume((event) => event.target.dataset.seen = input.title, "a0", $scope0_id);
	_html(`<button${_patch_attrs({
		title: input.title,
		onClick: handler
	}, "a", $scope0_id, "button", void 0, $scope0_reason, 0)}>go</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		d: input.title,
		e: handler
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "d", input.title);
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", [{
	type: "on-click",
	selector: "body"
}], 1);
_shells({ b: "b b1;D%/&;<main><!></main>" });
var template_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	$Child_withLoadAssets({ title: input.title });
	_html("</main>");
	$scope0_page && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1, () => [$Child_withLoadAssets]);

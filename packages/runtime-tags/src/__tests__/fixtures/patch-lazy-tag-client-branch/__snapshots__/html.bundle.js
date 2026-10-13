// child.marko
_shells({ a: "a !a0; D%c%;<button><!>:<!></button>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", count, 1);
	$scope0_page && _scope($scope0_id, { g: count });
});

// template.marko
withLoadAssets(child_default, flush, "_a");
_shells({ b: "b !b1; b ;<button class=toggle>toggle</button><main></main>" });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1);
	_write_guard($scope0_reason, 0);
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}<main>`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b", 1, 1, 1, "</main>");
	_script($scope0_id, "b1");
	_patch_value($scope0_id, "vb4", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.show,
		f: input.label,
		g: open,
		i: $wi__input_label && $input_label__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb2", input.show), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb3", input.label));
}, 1);

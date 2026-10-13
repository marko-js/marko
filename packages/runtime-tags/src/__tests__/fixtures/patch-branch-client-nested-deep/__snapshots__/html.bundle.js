// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 1);
	const $scope0_page = _page_render(), $wi__input_b = _write_if($scope0_reason, 1);
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	let open = false;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "va4", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.a,
		f: input.b,
		g: open,
		i: $wi__input_b && $input_b__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va2", input.a), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va3", input.b));
}, 1);

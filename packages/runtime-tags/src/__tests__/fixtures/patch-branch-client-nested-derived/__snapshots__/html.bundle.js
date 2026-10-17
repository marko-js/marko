// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_page = _page_render(), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const label = "t:" + input.title;
	const show = input.title !== "hide";
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "va4", open, 1);
	$scope0_page ? _scope($scope0_id, {
		f: open,
		g: label,
		h: show,
		i: $wi__input_title && $label__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va2", label, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va3", show, !_server_guard($scope0_reason, 0)));
}, 1);

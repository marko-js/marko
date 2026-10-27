// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 1);
	const $scope0_page = _page_render(), $wi__input_inner = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	let count = 0;
	let on = false;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		e: input.outer,
		f: input.inner,
		g: count,
		h: on,
		j: $wi__input_inner && $input_inner__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.outer, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.inner, !_server_guard($scope0_reason, 1)));
}, 1);

// tags/gm/index.marko
_shells({
	b: "b !; b%;<p></p><!><!>",
	b2: "b2; ;<i></i>"
});
var gm_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_v = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const z = input.v + $global$1.flag;
	_html(`<p${_attr("data-w", input.w, $scope0_id, "a", $scope0_reason, 1)}></p>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 1))}`);
	_if(() => {
		if (input.v) {
			const $scope1_id = _scope_id();
			_html(`<i${_attr("data-z", z + $global$1.mark, $scope1_id, "a", (2 | _mask_group($scope0_reason, 0)) << 1, 0)}></i>${_el_resume($scope1_id, "a")}`);
			_fill_global_subscribe("b0", $scope1_id);
			_client_guard((2 | _mask_group($scope0_reason, 0)) << 1, 0) && _patch_init($scope1_id, "b1");
			_scope($scope1_id, { _: ($scope0_page || _write_if($scope0_reason, 0)) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["b2"], $scope0_reason, 0);
	_fill_global_subscribe("b3", $scope0_id, $cg__input_v);
	$cg__input_v && _patch_write($scope0_id, "we", input.v, 1);
	_scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 0) && input.v,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && z
	}) || _filled_guard((2 | _mask_group($scope0_reason, 0)) << 1, 0) && $cg__input_v && _patch_fill($scope0_id, "vb4", z, !_server_guard((2 | _mask_group($scope0_reason, 0)) << 1, 0));
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
			const $childScope = _patch_child($scope1_id, "a", 0);
			gm_default({
				v: "a",
				w: input.w
			});
			_patch_child_end();
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.w,
		f: open
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.w, !_server_guard($scope0_reason, 0));
}, 1);

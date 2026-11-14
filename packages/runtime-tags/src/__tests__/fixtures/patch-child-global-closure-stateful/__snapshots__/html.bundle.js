// tags/gm/index.marko
_shells({
	b: "b; b%;<p></p><!><!>",
	b2: "b2; ;<i></i>"
});
var gm_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_v = _updates_from($scope0_reason, 0), $scope0_page = _page_render(), $ui__input_v = _unfilled_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const z = input.v + $global$1.flag;
	_html(`<p${_attr("data-w", input.w, $scope0_id, "a", $scope0_reason, 1)}></p>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 1))}`);
	_if(() => {
		if (input.v) {
			const $scope1_id = _scope_id();
			_html(`<i${_attr("data-z", z + $global$1.mark, $scope1_id, "a", (2 | $uf__input_v) << 1, 0)}></i>${_el_mark($scope1_id, "a")}`);
			_fill_global_subscribe("b0", $scope1_id, _client_guard((2 | $uf__input_v) << 1, 0));
			_client_guard((2 | $uf__input_v) << 1, 0) && _patch_render($scope1_id, "b1");
			_scope($scope1_id, { _: ($scope0_page || _write_if($scope0_reason, 0)) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["b2"], $scope0_reason, 0);
	_fill_global_subscribe("b3", $scope0_id, _client_guard($scope0_reason, 0));
	$ui__input_v && _patch_write($scope0_id, "we", input.v, 1);
	_unfilled_if((2 | $uf__input_v) << 1, 0) && _patch_write($scope0_id, "wg", z, 1);
	_scope($scope0_id, {
		e: $ui__input_v && input.v,
		g: ($ui__input_v || _unfilled_if()) && z
	});
});

// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_w = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			gm_default({
				v: "a",
				w: input.w
			});
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$fg__input_w && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.w,
		f: open
	}) || $fg__input_w && _patch_write($scope0_id, "xe", input.w, !_server_guard($scope0_reason, 0));
}, 1);

// tags/gm/index.marko
_shells({ b: "b;D ;<p> </p>" });
var gm_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const z = input.v + $global$1.flag;
	_html(`<p>${_text_resume($scope0_id, "a", z + $global$1.mark, void 0, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}</p>`);
	_fill_global_subscribe("b0", $scope0_id, $cg__input_v);
	_fill_global_subscribe("b1", $scope0_id);
	$cg__input_v && _patch_write($scope0_id, "wd", input.v, 1);
	_client_guard((2 | _mask_group($scope0_reason, 0)) << 1, 0) && _patch_write($scope0_id, "we", z, 1);
	_scope($scope0_id, {
		d: _unfilled_if($scope0_reason, 0) && input.v,
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && z
	});
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			_peek_scope_id($scope1_id, "a", 0);
			gm_default({ v: "a" });
			_patch_child_end();
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: open });
}, 1);

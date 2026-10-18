// tags/panel.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
_shells({
	b: "b;b%bD ;<!><!><p> </p>",
	b0: "b0; ;<div></div>",
	b1: "b1;D ;<em> </em>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show__OR__input_b = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<em>${_patch_text($scope2_id, "a", input.b, void 0, $scope0_reason, 4)}</em>`);
					_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, _client_guard($scope0_reason, 4) ? "b2" : "b3");
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_b__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_b && _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 4) && "b3");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b1"], $scope0_reason, 3);
			_html(`</div>${_el_resume($scope1_id, "a", $wg__input_show)}`);
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "b4");
			$wi__input_show__OR__input_b && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 3);
	_html(`<p>${_patch_text($scope0_id, "b", input.a + ":" + input.b, void 0, $scope0_reason, 2)}</p>`);
	_patch_write($scope0_id, "wg", input.a, !(_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4)));
	_patch_join_init($scope0_id, "b6", $scope0_reason, 2);
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.b,
		g: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.a,
		j: _write_if($scope0_reason, 4) && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 2)) && $input_b__closures
	}) : _filled_guard($scope0_reason, 4) && (_client_guard($scope0_reason, 3) || _client_guard($scope0_reason, 5)) && _patch_value($scope0_id, "vb5", input.b, !_server_guard($scope0_reason, 4));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0) => `b/${_w0}& b`)($walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(2168 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 7 | _mask_group($scope0_reason, 1) << 9));
	const $childScope = _patch_child($scope0_id, "a");
	panel_default({
		a: count,
		b: input.x,
		show: input.show
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", count, 1);
	$scope0_page && _scope($scope0_id, {
		g: count,
		a: _existing_scope($childScope)
	});
}, 1);

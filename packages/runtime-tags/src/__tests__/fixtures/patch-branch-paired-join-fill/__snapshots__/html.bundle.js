// tags/panel.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
_shells({
	b: "b !b6;b%b ;<!><!><button>+</button>",
	b0: "b0 b11;D lD lD ;<p> </p><p> </p><em> </em>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const a = input.x + "a";
			_filled_guard($scope0_reason, 2) ? _patch_value($scope1_id, "vb1", a) : _patch_init($scope1_id, "b2");
			const b = input.y + "b";
			_filled_guard($scope0_reason, 3) ? _patch_value($scope1_id, "vb3", b) : _patch_init($scope1_id, "b4");
			_html(`<p>${_text_resume($scope1_id, "a", a + count)}</p><p>${_text_resume($scope1_id, "b", b + count)}</p><em>${_patch_text($scope1_id, "c", a + b, void 0, $scope0_reason, 0)}</em>`);
			_patch_join_init($scope1_id, "b5", $scope0_reason, 0);
			_scope($scope1_id, {
				d: a,
				f: b,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["b0"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b6");
	_patch_value($scope0_id, "vb9", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: $wi__input_show && input.x,
		g: $wi__input_show && input.y,
		h: count
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb7", input.x, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb8", input.y, !_server_guard($scope0_reason, 3)));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button>y</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let y = "y0";
	_set_scope_reason(134 | (_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 5));
	const $childScope = _patch_child($scope0_id, "a");
	panel_default({
		x: input.x,
		y,
		show: input.show
	});
	_set_scope_reason(38 | (_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 7));
	const $childScope2 = _patch_child($scope0_id, "b");
	panel_default({
		x: y,
		y: input.x,
		show: input.show
	});
	_html(`<button>y</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", y, 1);
	$scope0_page && _scope($scope0_id, {
		h: y,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);

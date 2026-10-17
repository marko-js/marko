// tags/panel.marko
_shells({
	c: "c; ;<ul></ul>",
	c0: "c0;D ;<li> </li>"
});
var panel_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", row.name, void 0, $scope0_reason, 0)}</li>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "c0", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/gate.marko
const $template$1 = "<!><!><!>";
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var gate_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_admin = _write_guard($scope0_reason, 3), $wg__input_guest = _write_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.admin, {}, 0, 0, $wg__input_admin, void 0, 2, $scope0_reason, 3);
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "b2");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", input.guest, {}, 0, 0, $wg__input_guest, void 0, 2, $scope0_reason, 4);
			_client_guard($scope0_reason, 4) && _patch_init($scope2_id, "b3");
			_write_if($scope0_reason, 1) && _scope($scope2_id, { _: _write_if($scope0_reason, 4) && _scope_with_id($scope0_id) });
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b0", "b1"], $scope0_reason, 2);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.admin,
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.guest
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "vb4", input.admin, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "vb5", input.guest, !_server_guard($scope0_reason, 4)));
});

// tags/wrapper.marko
const $template = "<div></div>";
_shells({
	d: "d !; ;<div></div>",
	d0: "d0;b%;<!><!><!>"
});
var wrapper_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "d1");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["d0"], $scope0_reason, 1);
	_html(`</div>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vd2", input.content, !_server_guard($scope0_reason, 2));
});

// template.marko
_shells({
	a0: "a0,",
	a1: "a1,",
	a2: "a2,",
	a: /*@__PURE__*/ (() => `a !a6;${((_w0, _w1) => ` D l/${_w0}&/${_w1}&`)("b%c", " b")};${((_w0, _w1) => `<button class=inc> </button>${_w0}${_w1}`)($template$1, $template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_rows__closures = /* @__PURE__ */ new Set();
	const $input_guestText__closures = /* @__PURE__ */ new Set();
	const $input_bodyText__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 3) << 3 | _mask_group($scope0_reason, 3) << 5);
	const $childScope2 = _patch_child($scope0_id, "c");
	gate_default({
		show: input.admin,
		admin: attrTag({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 4) << 1);
			const $childScope = _patch_child($scope1_id, "a");
			panel_default({ rows: input.rows });
			_unfilled_if($scope0_reason, 4) && _patch_init($scope1_id, "a3");
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_rows__closures, _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			}));
		}, $scope0_id) }),
		guest: attrTag({ content: _content_resume("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_patch_text($scope2_id, "a", input.guestText, void 0, $scope0_reason, 5)}</p>`);
			_unfilled_if($scope0_reason, 5) && _patch_init($scope2_id, "a4");
			_subscribe(_unfilled_if($scope0_reason, 5) && $input_guestText__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }));
		}, $scope0_id) })
	});
	_set_scope_reason(_mask_group($scope0_reason, 6) << 1 | _mask_group($scope0_reason, 6) << 3);
	const $childScope3 = _patch_child($scope0_id, "d");
	wrapper_default({
		show: input.showBody,
		content: _content_resume("a0", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>${_patch_text($scope3_id, "a", input.bodyText, void 0, $scope0_reason, 7)}</p>`);
			_unfilled_if($scope0_reason, 7) && _patch_init($scope3_id, "a5");
			_subscribe(_unfilled_if($scope0_reason, 7) && $input_bodyText__closures, _scope($scope3_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }));
		}, $scope0_id)
	});
	_script($scope0_id, "a6");
	_patch_write($scope0_id, "wh", input.rows, 1);
	_patch_write($scope0_id, "wi", input.guestText, 1);
	_patch_write($scope0_id, "wk", input.bodyText, 1);
	_patch_value($scope0_id, "va7", n, 1);
	$scope0_page && _scope($scope0_id, {
		h: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.rows,
		i: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.guestText,
		k: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.bodyText,
		l: n,
		m: _write_if($scope0_reason, 4) && $input_rows__closures,
		n: _write_if($scope0_reason, 5) && $input_guestText__closures,
		c: _existing_scope($childScope2),
		o: _write_if($scope0_reason, 7) && $input_bodyText__closures,
		d: _existing_scope($childScope3)
	});
}, 1);

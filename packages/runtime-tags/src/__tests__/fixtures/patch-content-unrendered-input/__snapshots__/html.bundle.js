// tags/panel.marko
const $setup$3 = [[], []];
_shells({
	c: "c; ;<ul></ul>",
	c0: "c0;D ;<li> </li>"
});
var panel_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "a", row.name, 1, $scope0_reason, 0)}</li>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "c0", $scope0_reason, 0);
	_html(`</ul>${_el_mark($scope0_id, "a")}`);
	_scope($scope0_id, {});
});

// tags/gate.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2;b%;<!><!><!>",
	b3: "b3;b%;<!><!><!>"
});
var gate_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_admin = _write_guard($scope0_reason, 3), $wg__input_guest = _write_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 2), $fg__input_admin = _filled_guard($scope0_reason, 3), $fg__input_guest = _filled_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.admin, {}, 2, 0, 0, $wg__input_admin, $scope0_reason, 3);
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "b0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", input.guest, {}, 2, 0, 0, $wg__input_guest, $scope0_reason, 4);
			_client_guard($scope0_reason, 4) && _patch_render($scope2_id, "b1");
			_write_if($scope0_reason, 1) && _scope($scope2_id, { _: _write_if($scope0_reason, 4) && _scope_with_id($scope0_id) });
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2", "b3"], $scope0_reason, 2);
	$fg__input_admin && $cg__input_show && _patch_render($scope0_id, "b0", "e");
	$fg__input_guest && $cg__input_show && _patch_render($scope0_id, "b1", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.admin,
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.guest
	}) || ($fg__input_admin && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.admin, !_server_guard($scope0_reason, 3)), $fg__input_guest && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.guest, !_server_guard($scope0_reason, 4)));
});

// tags/wrapper.marko
const $template = "<div></div>";
const $setup$1 = [[], []];
_shells({
	d: "d; ;<div></div>",
	d1: "d1;b%;<!><!><!>"
});
var wrapper_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "d0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["d1"], $scope0_reason, 1);
	_html(`</div>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "d0", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) || $fg__input_content && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a6"]], ["c>", $setup$2], ["d>", $setup$1]);
_shells({
	a5: "a5",
	a3: "a3",
	a2: `a2${_shell_marker([[], []], ["a>", $setup$3])}`,
	a: `a${_shell_marker($setup)};${((_w0, _w1) => ` D l/${_w0}&/${_w1}&`)("b%c", " b")};${((_w0, _w1) => `<button class=inc> </button>${_w0}${_w1}`)($template$1, $template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_rows = _client_guard($scope0_reason, 4), $cg__input_guestText = _client_guard($scope0_reason, 5), $cg__input_bodyText = _client_guard($scope0_reason, 7), $fg__input_rows = _filled_guard($scope0_reason, 4), $fg__input_guestText = _filled_guard($scope0_reason, 5), $fg__input_bodyText = _filled_guard($scope0_reason, 7);
	const $scope0_id = _scope_id();
	const $input_rows__closures = /* @__PURE__ */ new Set();
	const $input_guestText__closures = /* @__PURE__ */ new Set();
	const $input_bodyText__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(_updates_from($scope0_reason, 3) << 1 | _updates_from($scope0_reason, 3) << 3 | _updates_from($scope0_reason, 3) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "c", 1);
	gate_default({
		show: input.admin,
		admin: attrTag({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 4) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			panel_default({ rows: input.rows });
			_patch_child_end();
			_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "a0", $cg__input_rows);
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_rows__closures, _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			}), $cg__input_rows && "a0", 0);
			_resume_branch($scope1_id);
		}, $scope0_id) }),
		guest: attrTag({ content: _content_resume("a3", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", input.guestText, 1, $scope0_reason, 5)}</p>`);
			_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "a1", $cg__input_guestText);
			_subscribe(_unfilled_if($scope0_reason, 5) && $input_guestText__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }), $cg__input_guestText && "a1");
		}, $scope0_id) })
	});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 6) << 1 | _updates_from($scope0_reason, 6) << 3);
	const $childScope3 = _peek_scope_id($scope0_id, "d", 2);
	wrapper_default({
		show: input.showBody,
		content: _content_resume("a5", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>${_text_mark($scope3_id, "a", input.bodyText, 1, $scope0_reason, 7)}</p>`);
			_unfilled_if($scope0_reason, 7) && _patch_subscribe($scope3_id, "a4", $cg__input_bodyText);
			_subscribe(_unfilled_if($scope0_reason, 7) && $input_bodyText__closures, _scope($scope3_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }), $cg__input_bodyText && "a4");
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "a6");
	$fg__input_rows && _patch_subscribers($scope0_id, "a7", "h");
	$fg__input_guestText && _patch_subscribers($scope0_id, "a8", "i");
	$fg__input_bodyText && _patch_subscribers($scope0_id, "a9", "k");
	_scope($scope0_id, {
		h: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.rows,
		i: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.guestText,
		k: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.bodyText,
		l: n,
		m: _write_if($scope0_reason, 4) && $input_rows__closures,
		n: _write_if($scope0_reason, 5) && $input_guestText__closures,
		c: _existing_scope($childScope2),
		o: _write_if($scope0_reason, 7) && $input_bodyText__closures,
		d: _existing_scope($childScope3)
	}) || ($fg__input_rows && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "xh", input.rows, !_server_guard($scope0_reason, 4)), $fg__input_guestText && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "xi", input.guestText, !_server_guard($scope0_reason, 5)), $fg__input_bodyText && _unfilled_if($scope0_reason, 6) && _patch_write($scope0_id, "xk", input.bodyText, !_server_guard($scope0_reason, 7)));
}, 1);

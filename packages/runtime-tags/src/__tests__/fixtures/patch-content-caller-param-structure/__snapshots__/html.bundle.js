// tags/toggle-if.marko
const $template$4 = "<!><!><!>";
const $setup$5 = [[], []];
_shells({
	e: "e !;b%;<!><!><!>",
	e1: "e1;b%;<!><!><!>"
});
var toggle_if_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1), $cg__input_open = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "e0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_open, void 0, void 0, void 0, ["e1"], $scope0_reason, 1);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) || (_filled_guard($scope0_reason, 2) && $cg__input_open && _patch_fill($scope0_id, "ve2", input.content, !_server_guard($scope0_reason, 2)), $cg__input_open && _content_withhold(input.content));
});

// tags/toggle-for.marko
const $template$3 = "<!><!><!>";
const $setup$4 = [[], []];
_shells({
	d: "d !;b%;<!><!><!>",
	d1: "d1;b%;<!><!><!>"
});
var toggle_for_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $cg__input_open = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_until(input.open ? 1 : 0, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "d0");
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "d1", $scope0_reason, 1);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) || (_filled_guard($scope0_reason, 2) && $cg__input_open && _patch_fill($scope0_id, "vd2", input.content, !_server_guard($scope0_reason, 2)), $cg__input_open && _content_withhold(input.content));
});

// tags/toggle-tag.marko
const $template$2 = "<!><!><!>";
const $setup$3 = [[], []];
_shells({
	f0: "f0;b%;<!><!><!>",
	f: "f !;b%;<!><!><!>"
});
var toggle_tag_default = _template("f", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wi__input_open__OR__input_content = _write_if($scope0_reason, 0), $wg__input_open = _write_guard($scope0_reason, 1), $cg__input_open = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.open ? "div" : "section", {}, 10, _content_elide("f0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "f1" : "f2");
		$wi__input_open__OR__input_content && _subscribe(_unfilled_if($scope0_reason, 2) && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$wg__input_content || $wi__input_open__OR__input_content && _resume_branch($scope1_id);
	}, $scope0_id), 0, $wg__input_open, $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content,
		f: _write_if($scope0_reason, 2) && $input_content__closures
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_open && _patch_fill($scope0_id, "vf3", input.content, !_server_guard($scope0_reason, 2)), $cg__input_open && _content_withhold(input.content));
});

// tags/param-host.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!><!>`)($template$4, $template$3, $template$2);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&%c`)("b%c", "b%c", "b%c");
const $setup$2 = _shell_setup([[], []], ["a>", $setup$5], ["b>", $setup$4], ["c>", $setup$3]);
_shells({
	c9: "c9;Db%;<p>own <!></p>",
	c8: "c8;Db%;<p>tag <!></p>",
	c5: "c5;Db%;<p>for <!></p>",
	c2: "c2;Db%;<p>if <!></p>",
	c: /*@__PURE__*/ (() => `c${_shell_marker($setup$2)};${((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&%c`)("b%c", "b%c", "b%c")};${((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!><!>`)($template$4, $template$3, $template$2)}`)()
});
var param_host_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wi__input_open__OR__input_label = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0);
	toggle_if_default({
		open: input.open,
		content: _content_resume("c2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<p>if ${_patch_text($scope1_id, "a", input.label, 2, $scope0_reason, 2)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_label ? "c0" : "c1");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, { _: $wi__input_open__OR__input_label && _scope_with_id($scope0_id) }));
		}, $scope0_id)
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope2 = _patch_child($scope0_id, "b", 1);
	toggle_for_default({
		open: input.open,
		content: _content_resume("c5", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>for ${_patch_text($scope2_id, "a", input.label, 2, $scope0_reason, 2)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_label ? "c3" : "c4");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {
				_: $wi__input_open__OR__input_label && _scope_with_id($scope0_id),
				Ci: $wi__input_label && 1
			}));
		}, $scope0_id)
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope3 = _patch_child($scope0_id, "c", 2);
	toggle_tag_default({
		open: input.open,
		content: _content_resume("c8", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>tag ${_patch_text($scope3_id, "a", input.label, 2, $scope0_reason, 2)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope3_id, $cg__input_label ? "c6" : "c7");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope3_id, {
				_: $wi__input_open__OR__input_label && _scope_with_id($scope0_id),
				Ci: $wi__input_label && 2
			}));
		}, $scope0_id)
	});
	_patch_child_end();
	_dynamic_tag($scope0_id, "d", input.open ? "div" : "section", {}, 26, _content_elide("c9", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html(`<p>own ${_patch_text($scope4_id, "a", input.label, 2, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope4_id, $cg__input_label ? "c10" : "c11");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope4_id, {
			_: $wi__input_open__OR__input_label && _scope_with_id($scope0_id),
			Ci: $wi__input_label && 3
		}));
	}, $scope0_id), 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_scope($scope0_id, {
		h: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		i: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2),
		c: _existing_scope($childScope3)
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc12", input.label, !_server_guard($scope0_reason, 2));
});

// tags/const-host.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!><!>`)($template$4, $template$3, $template$2);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&%c`)("b%c", "b%c", "b%c");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$5], ["b>", $setup$4], ["c>", $setup$3]);
_shells({
	b9: "b9;Db%;<p>own <!></p>",
	b8: "b8;Db%;<p>tag <!></p>",
	b5: "b5;Db%;<p>for <!></p>",
	b2: "b2;Db%;<p>if <!></p>",
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup$1)};${((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&%c`)("b%c", "b%c", "b%c")};${((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!><!>`)($template$4, $template$3, $template$2)}`)()
});
var const_host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wi__input_open__OR__input_label = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const show = input.open;
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0);
	toggle_if_default({
		open: show,
		content: _content_resume("b2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<p>if ${_patch_text($scope1_id, "a", input.label, 2, $scope0_reason, 2)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_label ? "b0" : "b1");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, { _: $wi__input_open__OR__input_label && _scope_with_id($scope0_id) }));
		}, $scope0_id)
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope2 = _patch_child($scope0_id, "b", 1);
	toggle_for_default({
		open: show,
		content: _content_resume("b5", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>for ${_patch_text($scope2_id, "a", input.label, 2, $scope0_reason, 2)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_label ? "b3" : "b4");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {
				_: $wi__input_open__OR__input_label && _scope_with_id($scope0_id),
				Cj: $wi__input_label && 1
			}));
		}, $scope0_id)
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope3 = _patch_child($scope0_id, "c", 2);
	toggle_tag_default({
		open: show,
		content: _content_resume("b8", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>tag ${_patch_text($scope3_id, "a", input.label, 2, $scope0_reason, 2)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope3_id, $cg__input_label ? "b6" : "b7");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope3_id, {
				_: $wi__input_open__OR__input_label && _scope_with_id($scope0_id),
				Cj: $wi__input_label && 2
			}));
		}, $scope0_id)
	});
	_patch_child_end();
	_dynamic_tag($scope0_id, "d", show ? "div" : "section", {}, 26, _content_elide("b9", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html(`<p>own ${_patch_text($scope4_id, "a", input.label, 2, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope4_id, $cg__input_label ? "b10" : "b11");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope4_id, {
			_: $wi__input_open__OR__input_label && _scope_with_id($scope0_id),
			Cj: $wi__input_label && 3
		}));
	}, $scope0_id), 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_scope($scope0_id, {
		h: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		j: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2),
		c: _existing_scope($childScope3)
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb12", input.label, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$2], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button>+</button>`)($template$1, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "a", 0);
	param_host_default({
		open,
		label: input.label
	});
	_patch_child_end();
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope2 = _patch_child($scope0_id, "b", 1);
	const_host_default({
		open,
		label: input.label
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: open,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);

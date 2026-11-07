// tags/panel.marko
const $template = "<div class=panel></div>";
const $setup = [[], []];
_shells({
	b: "b; ;<div class=panel></div>",
	b1: "b1;b%;<!><!><!>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<div class=panel>");
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_open, 1, 0, 0, ["b1"], $scope0_reason, 1);
	_html(`</div>${_el_mark($scope0_id, "a", $wg__input_open)}`);
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "b0", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) || $fg__input_content && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 2));
});

// template.marko
_shells({
	a1: "a1",
	a: "a !a4; b%;<button>toggle</button><!><!>",
	a3: `a3${_shell_marker([["a7"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_panels = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_for_of(input.panels, (p) => {
		const $scope1_id = _scope_id();
		const $for_content__p_text__closures = /* @__PURE__ */ new Set();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "xd", p?.text, !_server_guard($scope0_reason, 0));
		_set_scope_reason(10);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		panel_default({
			open,
			content: _content_resume("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "a", p.text, 1, $scope0_reason, 0)}</p>`);
				_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a0", $cg__input_panels);
				_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__p_text__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_panels && "a0");
			}, $scope1_id)
		});
		_patch_child_end();
		_filled_guard($scope0_reason, 0) && _patch_subscribers($scope1_id, "a2", "d");
		_scope($scope1_id, {
			d: p?.text,
			_: _scope_with_id($scope0_id),
			h: _write_if($scope0_reason, 0) && $for_content__p_text__closures,
			a: _existing_scope($childScope)
		});
	}, "id", $scope0_id, "b", 1, 1, 1, 0, 0, "a3", $scope0_reason, 0);
	_script($scope0_id, "a4");
	_scope($scope0_id, { f: open });
}, 1);

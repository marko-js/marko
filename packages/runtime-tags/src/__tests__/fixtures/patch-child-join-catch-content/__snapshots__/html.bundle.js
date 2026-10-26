// tags/wrapper.marko
const $template$1 = "<!><!><!>";
function boom() {
	throw new Error("SHOWN_message");
}
const $setup$2 = [[], []];
_shells({
	c4: "c4;D ;<p> </p>",
	c: "c !;b%;<!><!><!>"
});
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_fallback = _write_guard($scope0_reason, 0), $cg__input_fail = _client_guard($scope0_reason, 1), $scope0_page = _page_render(), $wi__input_fallback = _write_if($scope0_reason, 0), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_fallback__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.fail ? boom() : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_fail ? "c1" : "c2");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }), $cg__input_fail && "c2");
	}, void 0, () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.fallback, {}, 0, 0, $wg__input_fallback);
		$scope1_page && _subscribe($wi__input_fallback && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "c0", $wg__input_fallback);
		$wg__input_fallback || _resume_branch($scope1_id);
	}, void 0, "c3", "c4", 1);
	$scope0_page ? _scope($scope0_id, {
		d: input.fallback,
		f: $wi__input_fallback && $input_fallback__closures,
		g: $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc5", input.fallback, !_server_guard($scope0_reason, 0)), _content_withhold(input.fallback));
});

// tags/panel.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({
	b3: "b3",
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("b3", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.a + input.b, void 0, $scope0_reason, 0)}</em>`);
			(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "b0");
			(_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "b1");
			_patch_join_init($scope1_id, "b2", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">e", _filled_guard($scope0_reason, 3) && ">f");
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 3) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
		}, $scope0_id) })
	});
	_filled_guard($scope0_reason, 2) ? _patch_fill($scope0_id, "vb4", input.a) : _patch_write($scope0_id, "xe", input.a, !(_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 3)));
	_filled_guard($scope0_reason, 3) ? _patch_fill($scope0_id, "vb5", input.b) : _patch_write($scope0_id, "xf", input.b, !(_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2)));
	$scope0_page && _scope($scope0_id, {
		e: input.a,
		f: input.b,
		g: _write_if($scope0_reason, 2) && $input_a__closures,
		h: _write_if($scope0_reason, 3) && $input_b__closures,
		a: _existing_scope($childScope)
	});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = "k";
	_set_scope_reason(134 | (_mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5));
	const $childScope = _patch_child($scope0_id, "a");
	panel_default({
		a: input.a,
		b: n,
		fail: input.fail
	});
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 3) << 7);
	const $childScope2 = _patch_child($scope0_id, "b");
	panel_default({
		a: input.a,
		b: input.b,
		fail: input.fail
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		i: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);

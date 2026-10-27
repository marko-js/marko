// tags/wrapper.marko
const $template$1 = "<!><!><!>";
function boom$1() {
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
		_html(`<p>${_patch_text($scope2_id, "a", input.fail ? boom$1() : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_fail ? "c1" : "c2");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }), $cg__input_fail && "c2");
	}, void 0, () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.fallback, {}, 0, 0, 0, $wg__input_fallback);
		$scope1_page && _subscribe($wi__input_fallback && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "c0", $wg__input_fallback);
		$wg__input_fallback || _resume_branch($scope1_id);
	}, void 0, "c3", "c4", 1);
	$scope0_page ? _scope($scope0_id, {
		d: input.fallback,
		f: $wi__input_fallback && $input_fallback__closures,
		g: $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc5", input.fallback, !_server_guard($scope0_reason, 0)), _content_withhold(input.fallback));
});

// tags/error-wrapper.marko
const $template = "<!><!><!>";
function boom() {
	throw new Error("SHOWN_message");
}
const $setup$1 = [[], []];
_shells({
	b5: "b5;D ;<p> </p>",
	b4: "b4",
	b: "b !;b%;<!><!><!>"
});
var error_wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_fail = _client_guard($scope0_reason, 1), $scope0_page = _page_render(), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_fallback__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.fail ? boom() : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_fail ? "b2" : "b3");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }), $cg__input_fail && "b3");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<b>${_patch_text($scope1_id, "a", err.message)}</b>`);
		_dynamic_tag($scope1_id, "b", input.fallback, {}, 2, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "b0" : "b1");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b1");
	}, void 0, "b4", "b5", 1, 1, 1);
	$scope0_page ? _scope($scope0_id, {
		d: input.fallback,
		f: _write_if($scope0_reason, 0) && $input_fallback__closures,
		g: $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb6", input.fallback, !_server_guard($scope0_reason, 0)), _content_withhold(input.fallback));
});

// template.marko
const $setup = _shell_setup([[], ["a6"]], ["c>", $setup$2], ["d>", $setup$1]);
_shells({
	a5: "a5 a9",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)("b%c", "b%c")};${((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template$1, $template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "c", 0);
	wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "b", count, 2)}</em>`);
			$scope1_page && _subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0"), "a1");
		}, $scope0_id) })
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope2 = _patch_child($scope0_id, "d", 1);
	error_wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("a5", () => {
			_scope_reason();
			const $scope2_page = _page_render();
			const $scope2_id = _scope_id();
			_html(`<i>${_patch_text($scope2_id, "a", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope2_id, "b", count, 2)}</i>`);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, _client_guard($scope0_reason, 1) ? "a3" : "a4");
			$scope2_page && _subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				Cj: $wi__input_label && 1,
				Ck: 1
			})));
		}, $scope0_id) })
	});
	_patch_child_end();
	_script($scope0_id, "a6");
	$scope0_page ? _scope($scope0_id, {
		h: input.label,
		i: count,
		j: $wi__input_label && $input_label__closures,
		k: $count__closures,
		c: _existing_scope($childScope),
		d: _existing_scope($childScope2)
	}) : _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 1));
}, 1);

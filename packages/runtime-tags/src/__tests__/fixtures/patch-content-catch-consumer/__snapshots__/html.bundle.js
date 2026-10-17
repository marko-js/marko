// tags/wrapper.marko
const $template$1 = "<!><!><!>";
function boom$1() {
	throw new Error("SHOWN_message");
}
_shells({
	c0: "c0;D ;<p> </p>",
	c: "c !;b%;<!><!><!>"
});
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_fallback = _write_guard($scope0_reason, 0), $wi__input_fallback = _write_if($scope0_reason, 0), $wi__input_fail = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_fallback__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.fail ? boom$1() : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "c2");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "c2");
	}, void 0, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.fallback, {}, 0, 0, $wg__input_fallback);
		_subscribe($wi__input_fallback && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "c1", $wg__input_fallback);
		$wg__input_fallback || _resume_branch($scope1_id);
	}, void 0, "c3", "c0", 1);
	$scope0_page ? _scope($scope0_id, {
		d: input.fallback,
		f: $wi__input_fallback && $input_fallback__closures,
		g: $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vc4", input.fallback, !_server_guard($scope0_reason, 0));
});

// tags/error-wrapper.marko
const $template = "<!><!><!>";
function boom() {
	throw new Error("SHOWN_message");
}
_shells({
	b0: "b0;D ;<p> </p>",
	b: "b !;b%;<!><!><!>"
});
var error_wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_fail = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_fallback__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.fail ? boom() : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "b2");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "b2");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_patch_text($scope1_id, "a", err.message)}</b>`);
		_dynamic_tag($scope1_id, "b", input.fallback, {}, 0, 0, _write_guard($scope0_reason, 0));
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b1");
	}, void 0, "b3", "b0", 1, "");
	$scope0_page ? _scope($scope0_id, {
		d: input.fallback,
		f: _write_if($scope0_reason, 0) && $input_fallback__closures,
		g: $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb4", input.fallback, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a6;${((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)("b%c", "b%c")};${((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template$1, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "c");
	wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "b", count, 2)}</em>`);
			_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0"), "a1");
		}, $scope0_id) })
	});
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope2 = _patch_child($scope0_id, "d");
	error_wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("a5", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<i>${_patch_text($scope2_id, "a", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope2_id, "b", count, 2)}</i>`);
			_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				Cj: $wi__input_label && 1,
				Ck: 1
			}), "a3"), "a4");
		}, $scope0_id) })
	});
	_script($scope0_id, "a6");
	_patch_value($scope0_id, "va8", count, 1);
	$scope0_page ? _scope($scope0_id, {
		h: input.label,
		i: count,
		j: $wi__input_label && $input_label__closures,
		k: $count__closures,
		c: _existing_scope($childScope),
		d: _existing_scope($childScope2)
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 1));
}, 1);

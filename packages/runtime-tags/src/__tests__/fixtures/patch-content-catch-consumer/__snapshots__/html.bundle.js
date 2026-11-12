// tags/wrapper.marko
const $template$1 = "<!><!><!>";
function boom$1() {
	throw new Error("SHOWN_message");
}
const $setup$2 = [[], []];
_shells({
	c3: "c3;D ;<p> </p>",
	c: "c;b%;<!><!><!>"
});
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_fallback = _write_guard($scope0_reason, 0), $cg__input_fallback = _client_guard($scope0_reason, 0), $cg__input_fail = _client_guard($scope0_reason, 1), $wi__input_fallback = _write_if($scope0_reason, 0), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_fallback__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.fail ? boom$1() : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "c1", $cg__input_fail);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }), $cg__input_fail && "c1");
	}, void 0, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.fallback, {}, 0, 0, 0, $wg__input_fallback);
		$cg__input_fallback && _patch_render($scope1_id, "c0");
		_subscribe($wi__input_fallback && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_fallback && "c0", $wg__input_fallback);
	}, 0, "c2", "c3", 1);
	_scope($scope0_id, {
		d: input.fallback,
		f: $wi__input_fallback && $input_fallback__closures,
		g: $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.fallback, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "c4", "d");
});

// tags/error-wrapper.marko
const $template = "<!><!><!>";
function boom() {
	throw new Error("SHOWN_message");
}
const $setup$1 = [[], []];
_shells({
	b3: "b3;D ;<p> </p>",
	b2: "b2;D l%;<b> </b><!><!>",
	b: "b;b%;<!><!><!>"
});
var error_wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_client = _any_client_guard($scope0_reason), $cg__input_fallback = _client_guard($scope0_reason, 0), $cg__input_fail = _client_guard($scope0_reason, 1), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_fallback__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.fail ? boom() : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "b1", $cg__input_fail);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }), $cg__input_fail && "b1");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_mark($scope1_id, "a", err.message, 1, 4, 0)}</b>`);
		_dynamic_tag($scope1_id, "b", input.fallback, {}, 2, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
		$scope0_client && _unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "b0", $cg__input_fallback);
		_subscribe($scope0_client && _unfilled_if($scope0_reason, 0) && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $scope0_client && $cg__input_fallback && "b0");
	}, 0, "b2", "b3", 1, 1, 1);
	_scope($scope0_id, {
		d: input.fallback,
		f: _write_if($scope0_reason, 0) && $input_fallback__closures,
		g: $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.fallback, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "b4", "d");
});

// template.marko
const $setup = _shell_setup([[], ["a6"]], ["c>", $setup$2], ["d>", $setup$1]);
_shells({
	a5: "a5 a4",
	a: `a${_shell_marker($setup)};${((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)("b%c", "b%c")};${((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template$1, $template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $uf__input_fail = _updates_from($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason($uf__input_fail << 3);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", input.label, 1, $scope0_reason, 1)} ${_text_mark($scope1_id, "b", count, 2)}</em>`);
			$cg__input_label && _patch_render($scope1_id, "a0");
			_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a0"), "a1");
		}, $scope0_id) })
	});
	_patch_child_end();
	_set_scope_reason($uf__input_fail << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "d", 1);
	error_wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("a5", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<i>${_text_mark($scope2_id, "a", input.label, 1, $scope0_reason, 1)} ${_text_mark($scope2_id, "b", count, 2)}</i>`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a3", $cg__input_label);
			_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				Cj: $wi__input_label && 1,
				Ck: 1
			}), $cg__input_label && "a3"), "a4");
		}, $scope0_id) })
	});
	_patch_child_end();
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		h: input.label,
		i: count,
		j: $wi__input_label && $input_label__closures,
		k: $count__closures,
		c: _existing_scope($childScope),
		d: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xh", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a7", "h");
}, 1);

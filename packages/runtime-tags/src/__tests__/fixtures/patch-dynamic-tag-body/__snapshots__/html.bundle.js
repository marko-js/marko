// tags/wrap.marko
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0,hi",
	a1: "a1; ; ",
	a: "a;b%b%;<!><!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 6), $wg__input_tag__OR__input_cls = _write_guard($scope0_reason, 0), $wg__input_wrap = _write_guard($scope0_reason, 5), $ui__input_tag__OR__input_cls = _unfilled_if($scope0_reason, 0), $ui__input_wrap = _unfilled_if($scope0_reason, 5), $fg__input_tag = _filled_guard($scope0_reason, 3), $fg__input_cls = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.tag, { class: input.cls }, 1, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("hi");
	}, $scope0_id), 0, $wg__input_tag__OR__input_cls, $scope0_reason, 0, 0, 3);
	_dynamic_tag($scope0_id, "b", input.wrap ? wrap_default : null, {}, 10, _content("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_mark($scope1_id, "a", input.note, 2, $scope0_reason, 6));
		$cg__input_note && _patch_render($scope1_id, "a2");
		_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }), $cg__input_note && "a2");
	}, $scope0_id, 0), 0, $wg__input_wrap, $scope0_reason, 5);
	_patch_render($scope0_id, "a4", (($fg__input_tag ? " e" : "") + ($fg__input_cls ? " f" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 4) && $ui__input_tag__OR__input_cls && input.tag,
		f: _write_if($scope0_reason, 3) && $ui__input_tag__OR__input_cls && input.cls,
		i: _write_if($scope0_reason, 5) && ($ui__input_wrap || _unfilled_if($scope0_reason, 6)) && input.note,
		j: _write_if($scope0_reason, 6) && $input_note__closures
	}) || ($fg__input_tag && _unfilled_if($scope0_reason, 4) && _patch_write($scope0_id, "xe", input.tag, !_server_guard($scope0_reason, 3)), $fg__input_cls && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "xf", input.cls, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 6) && $ui__input_wrap && _patch_write($scope0_id, "xi", input.note, !_server_guard($scope0_reason, 6)) && _client_guard($scope0_reason, 5) && _patch_subscribers($scope0_id, "a3", "i"));
}, 1);

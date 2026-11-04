// tags/host.marko
_shells({
	b0: "b0 !b1",
	b: "b !b3; ;<div></div>"
});
var host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const extra = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
		_script($scope1_id, "b1");
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "b2", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "b2");
	}, $scope0_id) };
	_html("<div>");
	_attr_content("a", $scope0_id, extra, 0, 1, 0, 0);
	_html(`</div>${_el_mark($scope0_id, "a", 0)}`);
	_script($scope0_id, "b3");
	_patch_write($scope0_id, "we", extra, 1);
	_scope($scope0_id, {
		d: input.label,
		e: extra,
		f: _write_if($scope0_reason, 0) && $input_label__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "b4", "d");
});

// template.marko
_shells({ a: "a !a1; b%;<button>toggle</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a1");
	$fg__input_label && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.label,
		f: show
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0));
}, 1);

// tags/one.marko
const $Wrap_content__walks = "b%c";
const $Wrap_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content__walks);
const $setup$1 = [["a>"], []];
_shells({
	b0: `b0;${$Wrap_content__walks};${$Wrap_content__template}`,
	b: `b a>;${((_w0) => `b/${_w0}&b`)($Wrap_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Wrap_content__template)}`
});
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $uf__input_content = _updates_from($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0), $ui__input_t = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const Wrap = { content: _content("b0", ({ t }) => {
		const $scope1_id = _scope_id(), $ui__input_content = _unfilled_if($scope0_reason, 0);
		const $scope1_reason = _scope_reason(), $wg__t = _write_guard($scope1_reason, 0), $uf__t = _updates_from($scope1_reason, 0), $fg__t = _filled_guard($scope1_reason, 0);
		_dynamic_tag($scope1_id, "a", input.content, { title: t }, 1, 0, 0, $wg__input_content || $wg__t, ($uf__input_content | $uf__t) << 1, 0, 0, 0, $scope0_reason);
		_unfilled_if(($uf__input_content | $uf__t) << 1, 0) && _patch_subscribe($scope1_id, "b1");
		_patch_render($scope1_id, "b2", ((_filled_guard($scope0_reason, 0) ? " >d" : "") + ($fg__t ? " d" : "")).slice(1), ($uf__input_content | $uf__t) << 1, 0);
		($wi__input_content || _write_if($scope1_reason, 0)) && _subscribe(_unfilled_if(($uf__input_content | $uf__t) << 1, 0) && $wi__input_content && $input_content__closures, _scope($scope1_id, {
			d: $wi__input_content && ($ui__input_content || _unfilled_if($scope1_reason, 0)) && t,
			_: _scope_with_id($scope0_id)
		}), _client_guard(($uf__input_content | $uf__t) << 1, 0) && "b1", $wg__input_content || $wg__t) || $fg__t && $ui__input_content && _patch_write($scope1_id, "xd", t, !_server_guard($scope1_reason, 0));
	}, $scope0_id, 0) };
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	Wrap.content({ t: input.t });
	_patch_child_end();
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 1) && ($ui__input_t || _unfilled_if($scope0_reason, 0)) && input.content,
		f: $wi__input_content && $input_content__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && $ui__input_t && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)($walks)};${((_w0) => `<button class=z>z</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let z = 0;
	_html(`<button class=z>z</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	one_default({
		t: input.y,
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("A");
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: z,
		b: _existing_scope($childScope)
	});
}, 1);

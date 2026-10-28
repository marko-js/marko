// tags/wrap.marko
const $template = "<section><!></section>";
const $setup$1 = [[], []];
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
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrap_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let n = 0;
		_html(`<div><button class=n>n</button>${_el_resume($scope1_id, "a")}<p class=j>${_text_resume($scope1_id, "b", input.a + n)}</p><div class=e></div>${_el_resume($scope1_id, "c")}</div>`);
		_script($scope1_id, "a0", 1, _filled_guard($scope0_reason, 0), ">d");
		_script($scope1_id, "a1");
		_subscribe($wi__input_a && $input_a__closures, _scope($scope1_id, {
			d: n,
			_: _scope_with_id($scope0_id)
		}), "a2");
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		d: input.a,
		e: $wi__input_a && $input_a__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.a, !_server_guard($scope0_reason, 0));
}, 1);

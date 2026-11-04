// tags/outer.marko
const $template = "<button>clear</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["b1"]];
_shells({
	b: "b !b1; b%;<button>clear</button><!><!>",
	b0: "b0 b3;D%;<section><!></section>"
});
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	_html(`<button>clear</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.label !== "x") {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "a", value.content, {});
			_html("</section>");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["b0"], $scope0_reason, 1);
	_script($scope0_id, "b1");
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wh", value?.content, 1);
	_scope($scope0_id, { h: _write_if($scope0_reason, 1) && value?.content }) || _client_branch(input.data);
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.label, $wg__input_label)}</em>`);
		$cg__input_label && _patch_render($scope1_id, "a1");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a1", $wg__input_label);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			outer_default({ data: _patch_live($childScope, { content: Body.content }, $scope2_id, "") });
			_patch_child_end();
			!_client_guard($scope0_reason, 1) && _unfilled_if() && _patch_write($scope0_id, "wg", Body?.content);
			_scope($scope2_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	$fg__input_label && _patch_subscribers($scope0_id, "a3", "d");
	_scope($scope0_id, {
		d: input.label,
		g: _unfilled_if($scope0_reason, 1) && Body?.content,
		h: $wi__input_label && $input_label__closures
	}) || $fg__input_label && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0));
}, 1);

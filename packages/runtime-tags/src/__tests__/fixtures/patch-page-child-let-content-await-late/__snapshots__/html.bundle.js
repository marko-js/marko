// tags/card.marko
const $template = "<div><!></div><!><!>";
const $walks = "D%l%c";
const $setup$1 = [[], []];
_shells({
	b1: "b1 b0;D%;<section><!></section>",
	b2: "b2 b0;D%;<section><!></section>",
	b: "b !;D%l%;<div><!></div><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $c__closures = /* @__PURE__ */ new Set();
	let c = input.content;
	_html("<div>");
	_dynamic_tag($scope0_id, "a", c, {});
	_html("</div>");
	_await($scope0_id, "b", resolveAfter("v", 1), (v) => {
		const $scope1_id = _scope_id();
		_html("<section>");
		_dynamic_tag($scope1_id, "a", c, {}, 8);
		_html("</section>");
		_subscribe($c__closures, _scope($scope1_id, {}), "b0");
	}, 1, "b1", void 0, 1);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb3", c, 1);
	_scope($scope0_id, { g: $c__closures });
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>static ${_text_mark($scope1_id, "a", input.label, $wg__input_label * 2)}</em>`);
		$cg__input_label && _patch_render($scope1_id, "a0");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a0", $wg__input_label);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		d: input.label,
		e: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a2", "d");
}, 1);

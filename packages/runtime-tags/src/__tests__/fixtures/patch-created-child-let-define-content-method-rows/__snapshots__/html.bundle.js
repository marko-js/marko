// tags/outer.marko
const $template = "<button>clear</button><section><!></section>";
const $walks = " bD%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; bD%;<button>clear</button><section><!></section>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}<section>`);
	_dynamic_tag($scope0_id, "b", value.content, {}, 2, 0, 0, 1, $scope0_reason, 0, "f");
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _content_withhold(input.data);
});

// template.marko
_shells({
	a1: "a1",
	a: "a !a6; b%;<button>make</button><!><!>",
	a5: /*@__PURE__*/ ((_w0) => `a5${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "a2" : "a3");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	const api = { make: _resume(function(i) {
		return {
			content: Body.content,
			i
		};
	}, "a0", $scope0_id) };
	_html(`<button>make</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.show ? [1, 2] : [1], (i) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
		const $childScope = _peek_scope_id($scope2_id, "a", 0);
		outer_default({ data: api.make(i) });
		_patch_child_end();
		_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "a4");
		_scope($scope2_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 0, "a5", $scope0_reason, 1);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		e: input.label,
		h: Body?.content,
		i: api,
		j: _write_if($scope0_reason, 0) && $input_label__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 0));
}, 1);

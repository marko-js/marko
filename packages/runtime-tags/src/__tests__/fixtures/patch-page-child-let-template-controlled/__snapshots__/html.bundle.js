// tags/card.marko
_shells({ c: "c;D ;<em> </em>" });
var card_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/big.marko
_shells({ b: "b;D ;<strong> </strong>" });
var big_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<strong>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</strong>`);
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = "<button>clear</button><section><!></section>";
const $walks = " bD%l";
const $setup$1 = [[], ["d0"]];
_shells({ d: "d !d0; bD%;<button>clear</button><section><!></section>" });
var outer_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.tag;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}<section>`);
	_dynamic_tag($scope0_id, "b", T, { label: input.label });
	_html("</section>");
	_script($scope0_id, "d0");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "d4");
	const $TChange = input.tagChange || void 0;
	_patch_let_change($scope0_id, "vd5", T, "wj", $TChange, $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.tag,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.tagChange,
		h: input.label,
		i: _write_if($scope0_reason, 3) && T,
		j: $TChange
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vd1", input.tag, !_server_guard($scope0_reason, 1)), _content_withhold(input.tag), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vd2", input.tagChange, !_server_guard($scope0_reason, 2)), _content_withhold(input.tagChange), _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "vd3", input.label, !_server_guard($scope0_reason, 3)), _content_withhold(input.label));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		tag: input.big ? big_default : card_default,
		tagChange: _resume(function() {}, "a0"),
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

// tags/card.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = "<!><!><section><!></section>";
const $walks = "b%bD%l";
const $setup$1 = [[], []];
_shells({
	c: "c !;b%bD%;<!><!><section><!></section>",
	c0: "c0 c4;D ;<p> </p>"
});
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.tag;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", T ? "has" : "none")}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["c0"], $scope0_reason, 2);
	_html("<section>");
	_dynamic_tag($scope0_id, "b", T, { label: input.label });
	_html("</section>");
	!_client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc2", T, 1);
	_scope($scope0_id, {
		g: input.label,
		h: _write_if($scope0_reason, 0) && T
	}) || (_filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "vc1", input.label, !_server_guard($scope0_reason, 3)), _content_withhold(input.label), _content_withhold(input.tag));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<!>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		tag: card_default,
		more: input.more,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

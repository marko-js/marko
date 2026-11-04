// tags/wrap.marko
const $template = "<div><!></div>";
const $setup$1 = [[], []];
_shells({ c: "c;D%;<div><!></div>" });
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// tags/card.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	b1: "b1;D ;<b> </b>",
	b: `b${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D%l")};${$template}`
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = input.n;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrap_default({ content: _content("b1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_mark($scope1_id, "a", n, 1, $cg__input_n << 1, 0, 1)}</b>`);
		$cg__input_n && _patch_render($scope1_id, "b0");
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b0");
	}, $scope0_id, 0) });
	_patch_child_end();
	_scope($scope0_id, {
		f: $n__closures,
		a: _existing_scope($childScope)
	});
});

// template.marko
_shells({ a: "a;D%;<main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_n = _write_guard($scope0_reason, 0), $ui__input_on__OR__input_n = _unfilled_if($scope0_reason, 0), $ui__input_n = _unfilled_if($scope0_reason, 2), $ui__input_on = _unfilled_if($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", { n: input.n }, 1, 0, 0, $wg__input_on__OR__input_n, $scope0_reason, 0);
	_html("</main>");
	_patch_render($scope0_id, "a0", [$fg__input_on && "d", $fg__input_n && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_n || $ui__input_on__OR__input_n) && input.on,
		e: ($ui__input_on || $ui__input_on__OR__input_n) && input.n
	}) || ($fg__input_on && $ui__input_n && _patch_write($scope0_id, "xd", input.on, !_server_guard($scope0_reason, 1)), $fg__input_n && $ui__input_on && _patch_write($scope0_id, "xe", input.n, !_server_guard($scope0_reason, 2)));
}, 1);

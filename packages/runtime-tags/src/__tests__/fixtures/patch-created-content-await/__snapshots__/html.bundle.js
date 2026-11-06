// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _client_branch(input.content);
});

// template.marko
_shells({
	a1: "a1;D%b%;<b><!><!></b>",
	a2: "a2;D%b%;<b><!><!></b>",
	a3: "a3",
	a: "a;b%;<!><!><!>",
	a4: `a4${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_p__OR__input_label__OR__input_show = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 5), $fg__input_p = _filled_guard($scope0_reason, 3), $fg__input_label = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_p__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.p, (v) => {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_mark($scope2_id, "a", v, 1, $scope0_reason, 3)}${_text_mark($scope2_id, "b", input.label, 2, $scope0_reason, 4)}</b>`);
			_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "a0", _client_guard($scope0_reason, 4));
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, {}));
		}, 1, "a1", _unfilled_if($scope0_reason, 3));
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "a5", 1);
		$wi__input_p__OR__input_label__OR__input_show && _subscribe(_unfilled_if($scope0_reason, 3) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$wi__input_p__OR__input_label__OR__input_show && _resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope3_id, "a", 0);
			card_default({ content: Body.content });
			_patch_child_end();
			_scope($scope3_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 5);
	$fg__input_p && _patch_subscribers($scope0_id, "a6", "d");
	$fg__input_label && _patch_subscribers($scope0_id, "a7", "e");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 3)) && input.p,
		e: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 4)) && input.label,
		h: _unfilled_if($scope0_reason, 5) && Body?.content,
		j: _write_if($scope0_reason, 4) && $input_label__closures,
		i: _write_if($scope0_reason, 3) && $input_p__closures
	}) || ($fg__input_p && _patch_write($scope0_id, "xd", input.p, !_server_guard($scope0_reason, 3)), $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 4)));
}, 1);

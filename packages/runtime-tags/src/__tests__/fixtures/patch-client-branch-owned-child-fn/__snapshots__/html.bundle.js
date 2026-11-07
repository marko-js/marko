// tags/fnchild.marko
const $setup$1 = [[], []];
_shells({
	c1: "c1",
	c: "c;b%;<!><!><!>"
});
var fnchild_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag__OR__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 2), $fg__input_tag = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	$fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2));
	_dynamic_tag($scope0_id, "a", input.tag, { onClick: _bind_resume(function() {
		console.log("x", input.label);
	}, "c0", $scope0_id) }, 1, _content_resume("c1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_mark($scope1_id, "a", input.label, 2, $scope0_reason, 2));
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "c2", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id), 0, $wg__input_tag__OR__input_label, $scope0_reason, 0, 0, 1);
	$fg__input_label && _patch_subscribers($scope0_id, "c3", "e");
	_patch_render($scope0_id, "c4", [$fg__input_tag && "d", $fg__input_label && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.tag,
		e: input.label,
		g: _write_if($scope0_reason, 2) && $input_label__closures
	}) || $fg__input_tag && $cg__input_label && _patch_write($scope0_id, "xd", input.tag, !_server_guard($scope0_reason, 1));
});

// tags/card.marko
const $template = "<section><button>clear</button><!><!></section>";
const $walks = "D b%b%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D b%b%;<section><button>clear</button><!><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "c", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _client_branch(input.content);
});

// template.marko
_shells({
	a2: `a2${_shell_marker([[], []], ["a>", $setup$1])}`,
	a: "a;b%;<!><!><!>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2), $fg__input_tag = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content_resume("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 3) << 3 | _updates_from($scope0_reason, 2) << 5);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				fnchild_default({
					label: input.label,
					tag: input.tag
				});
				_patch_child_end();
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a0", _client_guard($scope0_reason, 2));
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a1", _client_guard($scope0_reason, 3));
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_tag__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				})));
				_resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 1);
	$fg__input_label && _patch_subscribers($scope0_id, "a4", "e");
	$fg__input_tag && _patch_subscribers($scope0_id, "a5", "f");
	_scope($scope0_id, {
		e: input.label,
		f: input.tag,
		g: _write_if($scope0_reason, 2) && $input_label__closures,
		h: _write_if($scope0_reason, 3) && $input_tag__closures
	}) || ($fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)), $fg__input_tag && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 3)));
}, 1);

// tags/fnchild.marko
const $template$1 = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c1: "c1",
	c: "c;b%;<!><!><!>"
});
var fnchild_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_tag__OR__input_label = _write_guard($scope0_reason, 0), $fg__input_tag = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	$fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "c3", "e");
	_dynamic_tag($scope0_id, "a", input.tag, { onClick: _bind_resume(function() {
		console.log("x", input.label);
	}, "c0", $scope0_id, 1) }, 1, _content_resume("c1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_mark($scope1_id, "a", input.label, 2, $scope0_reason, 2));
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "c2", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_label && "c2");
	}, $scope0_id), 0, $wg__input_tag__OR__input_label, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "c4", (($fg__input_tag ? " d" : "") + ($fg__input_label ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: $wi__input_label && _unfilled_if($scope0_reason, 0) && input.tag,
		e: input.label,
		g: $wi__input_label && $input_label__closures
	}) || $fg__input_tag && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.tag, !_server_guard($scope0_reason, 1));
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
	a2: `a2|2${_shell_marker([[], []], ["a>", $setup$1])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`,
	a: "a;b%;<!><!><!>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 2), $cg__input_label = _client_guard($scope0_reason, 3), $cg__input_tag = _client_guard($scope0_reason, 4), $wi__input_show__OR__input_label__OR__input_tag = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_label = _unfilled_if($scope0_reason, 3), $ui__input_tag = _unfilled_if($scope0_reason, 4), $wi__input_show = _write_if($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 3), $wi__input_tag = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 4) << 3 | _updates_from($scope0_reason, 3) << 5);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				fnchild_default({
					label: input.label,
					tag: input.tag
				});
				_patch_child_end();
				$cg__input_label && _patch_render($scope2_id, "a0");
				$cg__input_tag && _patch_render($scope2_id, "a1");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_tag__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_label__closures, _scope($scope2_id, {
					_: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				}), $cg__input_label && "a0", 0), $cg__input_tag && "a1", 0);
				_resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 2);
	_scope($scope0_id, {
		e: $wi__input_show && ($ui__input_show || $ui__input_label) && input.label,
		f: $wi__input_show && ($ui__input_show || $ui__input_tag) && input.tag,
		g: $wi__input_label && $wi__input_label && ($ui__input_label || $ui__input_show) && $input_label__closures,
		h: $wi__input_tag && $wi__input_tag && ($ui__input_tag || $ui__input_show) && $input_tag__closures
	}) || (_filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 3)) && $cg__input_show && _patch_subscribers($scope0_id, "a4", "e"), _filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 4)) && $cg__input_show && _patch_subscribers($scope0_id, "a5", "f"));
}, 1);

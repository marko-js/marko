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
	a1: "a1",
	a6: "a6|2;b%;<!><!><!>",
	a: "a;b%;<!><!><!>",
	a7: `a7${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag__OR__input_label = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 3), $fg__input_tag = _filled_guard($scope0_reason, 4), $fg__input_label = _filled_guard($scope0_reason, 5), $wi__input_label = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	$fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 5));
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content("a6", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", input.tag, { onClick: _bind_resume(function() {
					console.log("clicked", input.label);
				}, "a0", $scope2_id) }, 1, _content_resume("a1", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					_html(_text_mark($scope3_id, "a", input.label, 2, $scope0_reason, 5));
					_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope3_id, "a2", _client_guard($scope0_reason, 5));
					_subscribe(_unfilled_if($scope0_reason, 5) && $input_label__closures, _scope($scope3_id, {
						_: _write_if($scope0_reason, 2) && _scope_with_id($scope2_id),
						Ch: $wi__input_label && 1
					}));
				}, $scope2_id), 0, $wg__input_tag__OR__input_label, $scope0_reason, 1, 0, 4);
				_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "a3");
				_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "a4");
				_patch_render($scope2_id, "a5", [_filled_guard($scope0_reason, 4) && ">>e", _filled_guard($scope0_reason, 5) && ">>f"], $scope0_reason, 1);
				_subscribe(_unfilled_if($scope0_reason, 5) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_tag__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) })));
				$wg__input_tag__OR__input_label || _resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a7"], $scope0_reason, 3);
	$fg__input_tag && _client_guard($scope0_reason, 3) && _patch_subscribers($scope0_id, "a8", "e");
	$fg__input_label && _patch_subscribers($scope0_id, "a9", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.tag,
		f: input.label,
		h: $wi__input_label && $input_label__closures,
		g: _write_if($scope0_reason, 4) && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && $input_tag__closures
	}) || $fg__input_tag && _patch_write($scope0_id, "xe", input.tag, !_server_guard($scope0_reason, 4));
}, 1);

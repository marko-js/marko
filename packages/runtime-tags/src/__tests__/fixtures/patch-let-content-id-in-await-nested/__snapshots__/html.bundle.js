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
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_p = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_p = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_p = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_p__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content_resume("a4", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_set_scope_reason(0);
				_patch_child(0);
				card_default({ content: _content_resume("a3", () => {
					_scope_reason();
					const $scope3_id = _scope_id();
					const $scope4_id = _await($scope3_id, "a", input.p, (v) => {
						const $scope4_id = _scope_id();
						const uid = _id("A");
						_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_mark($scope4_id, "c", v, $wg__input_p)}${_text_mark($scope4_id, "d", input.label, $wg__input_label * 2)}</label>`);
						$cg__input_label && _patch_render($scope4_id, "a0");
						_subscribe($wi__input_label && $input_label__closures, _scope($scope4_id, {}), $cg__input_label && "a0", $wg__input_p || $wg__input_label);
					}, void 0, void 0, 3);
					if ($scope4_id) $cg__input_label && _patch_render($scope4_id, "a0");
					$cg__input_p && _patch_render($scope3_id, "a2");
					_subscribe($wi__input_p && $input_p__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), $cg__input_p && "a2", 0);
					$wg__input_p && _resume_branch($scope3_id);
				}, $scope2_id) });
				_patch_child_end();
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.p,
		f: input.label,
		h: $wi__input_label && $input_label__closures,
		g: $wi__input_p && $input_p__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.p, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a5", "e"), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a6", "f"));
}, 1);

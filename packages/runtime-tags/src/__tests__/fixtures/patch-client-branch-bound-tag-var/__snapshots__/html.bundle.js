// tags/getter.marko
_shells({ c: "c," });
var getter_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xc", input.label, !_server_guard($scope0_reason, 0));
	const $return = _bind_resume(() => console.log("get", input.label), "c0", $scope0_id);
	_scope($scope0_id, { c: input.label });
	return $return;
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
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a6: `a6${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label__OR__input_tag = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_tag = _write_if($scope0_reason, 3), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 2);
			card_default({ content: _content_resume("a5", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				let get = getter_default({ label: input.label });
				$wi__input_label && _var($scope2_id, "b", $childScope, "a0");
				_patch_child_end();
				_dynamic_tag($scope2_id, "c", input.tag, { onClick: get }, 8, _content_resume("a1", () => {
					_scope_id();
					_scope_reason();
					_html("x");
				}, $scope2_id), 0, $wg__input_label__OR__input_tag);
				$cg__input_label && _patch_render($scope2_id, "a2");
				_patch_render($scope2_id, "a3", ((_filled_guard($scope0_reason, 3) ? " >>f" : "") + (_filled_guard($scope0_reason, 2) ? " d" : "")).slice(1), $scope0_reason, 0);
				_subscribe($wi__input_tag && $input_tag__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					d: $wi__input_tag && get,
					_: _scope_with_id($scope1_id),
					a: $wi__input_label && _existing_scope($childScope)
				}), $cg__input_label && "a2", $wg__input_label__OR__input_tag), _client_guard($scope0_reason, 3) && "a4", $wg__input_label__OR__input_tag);
				$wg__input_label__OR__input_tag || (_write_guard($scope0_reason, 2) || _write_guard($scope0_reason, 3)) && _resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a6"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: input.label,
		f: input.tag,
		g: $wi__input_label && $input_label__closures,
		h: $wi__input_tag && $input_tag__closures
	}) || (_filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a7", "e"), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 3)) && _patch_subscribers($scope0_id, "a8", "f"));
}, 1);

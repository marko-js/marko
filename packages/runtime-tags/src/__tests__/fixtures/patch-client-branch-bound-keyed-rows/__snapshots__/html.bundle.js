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
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a12: `a12${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_rows = _write_if($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_rows = _client_guard($scope0_reason, 1), $wg__input_rows = _write_guard($scope0_reason, 1), $wg__input_rows__OR__input_tag = _write_guard($scope0_reason, 0), $wg__input_tag = _write_guard($scope0_reason, 3), $wi__input_tag = _write_if($scope0_reason, 3), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	_for_of(input.rows, (r) => {
		const $scope1_id = _scope_id();
		const $for_content__r_label__closures = /* @__PURE__ */ new Set();
		_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "xd", r?.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope1_id, "a11", "d");
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 2);
		card_default({ content: _content_resume("a10", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			const Inner = { content: _content_resume("a1", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_html(`<b>${_text_mark($scope3_id, "b", r.label, $wg__input_rows)}${_text_mark($scope3_id, "c", input.label, _write_guard($scope0_reason, 2) * 2)}</b>${_el_mark($scope3_id, "a")}`);
				_script($scope3_id, "a2");
				$cg__input_label && _patch_render($scope3_id, "a3");
				$cg__input_rows && _patch_render($scope3_id, "a4");
				_subscribe($wi__input_rows && $for_content__r_label__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope2_id),
					Ci: $wi__input_rows && 1
				}), $cg__input_label && "a3"), $cg__input_rows && "a4");
			}, $scope2_id) };
			_dynamic_tag($scope2_id, "a", input.tag, { content: Inner }, 0, 0, 0, $wg__input_tag);
			_dynamic_tag($scope2_id, "b", input.tag, { onClick: _bind_resume(function() {
				console.log("direct", r.label);
			}, "a0", $scope2_id) }, 8, _content_resume("a5", () => {
				const $scope4_id = _scope_id();
				_scope_reason();
				_html(_text_mark($scope4_id, "a", r.label, $wg__input_rows * 2));
				$cg__input_rows && _patch_render($scope4_id, "a6");
				_subscribe($wi__input_rows && $for_content__r_label__closures, _scope($scope4_id, {
					_: _scope_with_id($scope2_id),
					Ci: $wi__input_rows && 2
				}), $cg__input_rows && "a6", $wg__input_rows);
			}, $scope2_id), 0, $wg__input_rows__OR__input_tag);
			_patch_render($scope2_id, "a7", ((_filled_guard($scope0_reason, 3) ? " >>f" : "") + (_filled_guard($scope0_reason, 1) ? " >d" : "")).slice(1), $scope0_reason, 0);
			_subscribe($wi__input_rows && $for_content__r_label__closures, _subscribe($wi__input_tag && $input_tag__closures, _scope($scope2_id, {
				d: $wi__input_tag && Inner,
				_: _scope_with_id($scope1_id)
			}), _client_guard($scope0_reason, 3) && "a8", $wg__input_rows__OR__input_tag || $wg__input_tag), $cg__input_rows && "a9", $wg__input_rows__OR__input_tag || $wg__input_tag);
			$wg__input_rows__OR__input_tag || $wg__input_tag || $wg__input_rows && _resume_branch($scope2_id);
		}, $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, {
			d: r?.label,
			_: _scope_with_id($scope0_id),
			i: $wi__input_rows && $for_content__r_label__closures,
			a: _existing_scope($childScope)
		});
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a12", $scope0_reason, 1);
	_scope($scope0_id, {
		e: input.label,
		f: input.tag,
		g: $wi__input_label && $input_label__closures,
		h: $wi__input_tag && $input_tag__closures
	}) || (_filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a13", "e"), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 3)) && _patch_subscribers($scope0_id, "a14", "f"));
}, 1);

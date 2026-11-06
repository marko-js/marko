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
	a8: "a8",
	a: "a;b%;<!><!><!>",
	a9: `a9${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a7: "a7;D%;<li><!></li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows__OR__input_tag__OR__input_label = _write_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 2), $cg__input_rows = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $sg__input_rows = _server_guard($scope0_reason, 2), $fg__input_rows = _filled_guard($scope0_reason, 2), $fg__input_tag = _filled_guard($scope0_reason, 3), $fg__input_label = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_rows__closures = /* @__PURE__ */ new Set();
	$fg__input_label && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 4));
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content_resume("a8", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html("<ul>");
				_for_of(input.rows, (r) => {
					const $scope3_id = _scope_id();
					const $for_content__r_label__closures = /* @__PURE__ */ new Set();
					_filled_guard($scope0_reason, 2) && _patch_write($scope3_id, "xd", r?.label, !$sg__input_rows);
					_html("<li>");
					_dynamic_tag($scope3_id, "a", input.tag, { onClick: _bind_resume(function() {
						console.log(r.label, input.label);
					}, "a0", $scope3_id) }, 1, _content_resume("a1", () => {
						const $scope4_id = _scope_id();
						_scope_reason();
						_html(_text_mark($scope4_id, "a", r.label, 2, $scope0_reason, 2));
						_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope4_id, "a2", $cg__input_rows);
						_subscribe(_unfilled_if($scope0_reason, 2) && $for_content__r_label__closures, _scope($scope4_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope3_id) }));
					}, $scope3_id), 0, $wg__input_rows__OR__input_tag__OR__input_label, $scope0_reason, 0, 0, 3);
					_html("</li>");
					_filled_guard($scope0_reason, 2) && _patch_subscribers($scope3_id, "a3", "d");
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope3_id, "a4");
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope3_id, "a5");
					_patch_render($scope3_id, "a6", [
						_filled_guard($scope0_reason, 3) && ">>>f",
						_filled_guard($scope0_reason, 4) && ">>>g",
						_filled_guard($scope0_reason, 2) && "d"
					], $scope0_reason, 0);
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_tag__closures, _scope($scope3_id, {
						d: r?.label,
						_: _scope_with_id($scope2_id),
						k: $wi__input_rows && $for_content__r_label__closures
					})));
				}, "id", $scope2_id, "a", 1, 1, 1, 0, 0, "a7", $scope0_reason, 2);
				_html(`</ul>${_el_mark($scope2_id, "a")}`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a10", $cg__input_rows);
				_subscribe($wi__input_rows && $input_rows__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a9"], $scope0_reason, 1);
	$fg__input_rows && _patch_subscribers($scope0_id, "a11", "e");
	$fg__input_tag && _patch_subscribers($scope0_id, "a12", "f");
	$fg__input_label && _patch_subscribers($scope0_id, "a13", "g");
	_scope($scope0_id, {
		e: input.rows,
		f: input.tag,
		g: input.label,
		i: _write_if($scope0_reason, 3) && $input_tag__closures,
		j: _write_if($scope0_reason, 4) && $input_label__closures,
		h: $wi__input_rows && $input_rows__closures
	}) || ($fg__input_rows && _patch_write($scope0_id, "xe", input.rows, !$sg__input_rows), $fg__input_tag && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 3)));
}, 1);

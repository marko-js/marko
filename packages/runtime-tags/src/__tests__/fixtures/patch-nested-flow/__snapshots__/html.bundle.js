// tags/badge.marko
const $template = "<footer><span><!> (<!>)</span><button>ack</button></footer>";
const $walks = "E%c%l l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;E%c%l ;<footer><span><!> (<!>)</span><button>ack</button></footer>" });
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let seen = 0;
	_html(`<footer><span>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)} (${_text_mark($scope0_id, "b", seen, 2)})</span><button>ack</button>${_el_mark($scope0_id, "c")}</footer>`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", seen, 1);
	_scope($scope0_id, { g: seen });
});

// template.marko
const $setup = _shell_setup([[], []], ["c>", $setup$1]);
_shells({
	a: `a${_shell_marker($setup)};${((_w0) => `D b%b/${_w0}&l`)($walks)};${((_w0) => `<main><ul></ul><!>${_w0}</main>`)($template)}`,
	a1: "a1;D%b%;<section><!><!></section>",
	a2: "a2;D ;<small> </small>",
	a3: "a3;D%b%;<li><!><!></li>",
	a0: "a0,<em>on sale</em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_detail = _client_guard($scope0_reason, 3), $wi__input_summary__OR__input_detail = _write_if($scope0_reason, 0), $ui__input_summary = _unfilled_if($scope0_reason, 2), $ui__input_detail = _unfilled_if($scope0_reason, 3), $cg__input_summary = _client_guard($scope0_reason, 2), $fg__input_detail = _filled_guard($scope0_reason, 3), $wi__input_detail = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_detail__closures = /* @__PURE__ */ new Set();
	_html("<main><ul>");
	_for_of(input.items, (item) => {
		const $scope3_id = _scope_id();
		_html(`<li>${_text_mark($scope3_id, "a", item.label, 1, $scope0_reason, 1)}`);
		_if(() => {
			if (item.sale) {
				const $scope4_id = _scope_id();
				_html("<em>on sale</em>");
				_write_if($scope0_reason, 1) && _scope($scope4_id, {});
				return 0;
			}
		}, $scope3_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a0"], $scope0_reason, 1);
		_html("</li>");
		_scope($scope3_id, {});
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a3", $scope0_reason, 1);
	_html(`</ul>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.summary) {
			const $scope1_id = _scope_id();
			_html(`<section>${_text_mark($scope1_id, "a", input.summary, 1, $scope0_reason, 2)}`);
			_if(() => {
				if (input.detail) {
					const $scope2_id = _scope_id();
					_html(`<small>${_text_mark($scope2_id, "a", input.detail, 1, $scope0_reason, 3)}</small>`);
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a4", $cg__input_detail);
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_detail__closures, _scope($scope2_id, { _: $wi__input_summary__OR__input_detail && _scope_with_id($scope1_id) }), $cg__input_detail && "a4");
					return 0;
				}
			}, $scope1_id, "b", 1, _write_guard($scope0_reason, 3), 1, 0, 0, ["a2"], $scope0_reason, 3);
			_html("</section>");
			$cg__input_summary && _patch_render($scope1_id, "a5");
			$cg__input_detail && _patch_render($scope1_id, "a6");
			_scope($scope1_id, { _: $wi__input_summary__OR__input_detail && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a1"], $scope0_reason, 2);
	_set_scope_reason(_updates_from($scope0_reason, 4) << 1);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	badge_default({ label: input.badge });
	_patch_child_end();
	_html("</main>");
	$fg__input_detail && $cg__input_summary && _patch_render($scope0_id, "a6", "h");
	_scope($scope0_id, {
		h: _write_if($scope0_reason, 2) && ($ui__input_summary || $ui__input_detail) && input.detail,
		k: $wi__input_detail && $wi__input_detail && ($ui__input_detail || $ui__input_summary) && $input_detail__closures,
		c: _existing_scope($childScope)
	}) || $fg__input_detail && $ui__input_summary && _patch_write($scope0_id, "xh", input.detail, !_server_guard($scope0_reason, 3)) && $cg__input_summary && _patch_subscribers($scope0_id, "a7", "h");
}, 1);

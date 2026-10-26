// tags/badge.marko
const $template = "<footer><span><!> (<!>)</span><button>ack</button></footer>";
const $walks = "E%c%l l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;E%c%l ;<footer><span><!> (<!>)</span><button>ack</button></footer>" });
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let seen = 0;
	_html(`<footer><span>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)} (${_text_resume($scope0_id, "b", seen, 2)})</span><button>ack</button>${_el_resume($scope0_id, "c")}</footer>`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", seen, 1);
	$scope0_page && _scope($scope0_id, { g: seen });
});

// template.marko
const $setup = _shell_setup([[], []], ["c>", $setup$1]);
_shells({
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D b%b/${_w0}&l`)($walks)};${((_w0) => `<main><ul></ul><!>${_w0}</main>`)($template)}`)(),
	a1: "a1;D%b%;<section><!><!></section>",
	a2: "a2;D ;<small> </small>",
	a3: "a3;D%b%;<li><!><!></li>",
	a0: "a0,<em>on sale</em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_detail = _client_guard($scope0_reason, 3), $wi__input_summary__OR__input_detail = _write_if($scope0_reason, 0), $cg__input_summary = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_detail__closures = /* @__PURE__ */ new Set();
	_html("<main><ul>");
	_for_of(input.items, (item) => {
		const $scope3_id = _scope_id();
		_html(`<li>${_patch_text($scope3_id, "a", item.label, void 0, $scope0_reason, 1)}`);
		_if(() => {
			if (item.sale) {
				const $scope4_id = _scope_id();
				_html("<em>on sale</em>");
				$scope0_page && _write_if($scope0_reason, 1) && _scope($scope4_id, {});
				return 0;
			}
		}, $scope3_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
		_html("</li>");
		$scope0_page && _scope($scope3_id, {});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 1);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.summary) {
			const $scope1_id = _scope_id();
			_html(`<section>${_patch_text($scope1_id, "a", input.summary, void 0, $scope0_reason, 2)}`);
			_if(() => {
				if (input.detail) {
					const $scope2_id = _scope_id();
					_html(`<small>${_patch_text($scope2_id, "a", input.detail, void 0, $scope0_reason, 3)}</small>`);
					_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_detail ? "a4" : "a5");
					$scope0_page && _subscribe(_unfilled_if($scope0_reason, 3) && $input_detail__closures, _scope($scope2_id, { _: $wi__input_summary__OR__input_detail && _scope_with_id($scope1_id) }), $cg__input_detail && "a5");
					return 0;
				}
			}, $scope1_id, "b", 1, _write_guard($scope0_reason, 3), void 0, void 0, void 0, ["a2"], $scope0_reason, 3);
			_html("</section>");
			$cg__input_summary && _patch_init($scope1_id, "a6");
			$cg__input_detail && _patch_init($scope1_id, "a7");
			$scope0_page && _scope($scope1_id, { _: $wi__input_summary__OR__input_detail && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a1"], $scope0_reason, 2);
	_set_scope_reason(_mask_group($scope0_reason, 4) << 1);
	const $childScope = _patch_child($scope0_id, "c");
	badge_default({ label: input.badge });
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.detail,
		k: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_detail__closures,
		c: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 3) && $cg__input_summary && _patch_fill($scope0_id, "va8", input.detail, !_server_guard($scope0_reason, 3));
}, 1);

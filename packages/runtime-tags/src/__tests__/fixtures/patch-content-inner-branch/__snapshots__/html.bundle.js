// tags/card/index.marko
const $template = "<section><h2> </h2><!></section>";
const $walks = "E l%l";
_shells({ b: "b;E l%;<section><h2> </h2><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h2>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0;b%;<!><!><!>",
	a: /*@__PURE__*/ (() => `a !;${((_w0) => `D/${_w0}&l`)($walks)};${((_w0) => `<main>${_w0}</main>`)($template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_note = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	card_default({
		title: input.title,
		content: _content_elide("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<em>${_patch_text($scope2_id, "a", input.note, void 0, $scope0_reason, 3)}</em>`);
					_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, "a2");
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_note && _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 2);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "a3");
			$wi__input_show__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
			$wg__input_show || $wi__input_show__OR__input_note && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.note,
		h: _write_if($scope0_reason, 3) && $input_note__closures,
		g: _write_if($scope0_reason, 2) && $input_show__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "va4", input.note);
}, 1);

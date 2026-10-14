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
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a: /*@__PURE__*/ (() => `a !;${((_w0) => `D/${_w0}&%l`)($walks)};${((_w0) => `<main>${_w0}<!></main>`)($template)}`)(),
	a2: /*@__PURE__*/ ((_w0) => `a2;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_note = _write_if($scope0_reason, 3), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	card_default({
		title: input.t1,
		content: _content_elide("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 3)}</em>`);
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a3");
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _scope($scope1_id, { _: $wi__input_note && _scope_with_id($scope0_id) }));
		}, $scope0_id)
	});
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 5) << 1);
			const $childScope2 = _patch_child($scope2_id, "a");
			card_default({
				title: input.t2,
				content: _content_elide("a0", () => {
					_scope_reason();
					const $scope3_id = _scope_id();
					_html(`<em>${_patch_text($scope3_id, "a", input.note, void 0, $scope0_reason, 3)}</em>`);
					_client_guard($scope0_reason, 3) && _patch_init($scope3_id, "a4");
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _scope($scope3_id, {
						_: _write_if($scope0_reason, 0) && _scope_with_id($scope2_id),
						Ci: $wi__input_note && 1
					}));
				}, $scope2_id)
			});
			_scope($scope2_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 4), void 0, void 0, void 0, ["a2"], $scope0_reason, 4);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 3)) && input.note,
		h: _unfilled_if($scope0_reason, 4) && input.t2,
		i: $wi__input_note && $input_note__closures,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "va5", input.note), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "va6", input.t2));
}, 1);

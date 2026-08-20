// tags/card/index.marko
const $template = "<section><h2> </h2><!></section>";
const $walks = "E l%l";
_shells({ b: "b;E l%;<section><h2> </h2><!></section>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h2>`);
	_patch_dynamic_tag($scope0_id, "b", input.content, $scope0_owned, 1);
	_dynamic_tag$1($scope0_id, "b", input.content, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `D/${_w0}&%l`)($walks), ((_w0) => `<main>${_w0}<!></main>`)($template)),
	a2: /*@__PURE__*/ ((_w0, _w1) => `a2;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $si__input_note = _source_if($scope0_reason, 4), $sg__input_show = _source_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 3) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		title: input.t1,
		content: _content_elide("a1", () => {
			_persisted_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.note, $scope0_owned, 4)}${_el_resume($scope1_id, "a")}</em>`);
			_subscribe($si__input_note && $input_note__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 6) });
			const $childScope2 = _peek_scope_id();
			_patch_child($scope2_id, "a", $childScope2);
			card_default({
				title: input.t2,
				content: _content_elide("a0", () => {
					_persisted_reason();
					const $scope3_id = _scope_id();
					_html(`<em>${_patch_text($scope3_id, "a", input.note, $scope0_owned, 4)}${_el_resume($scope3_id, "a")}</em>`);
					_subscribe($si__input_note && $input_note__closures, writeScope($scope3_id, {
						_: _scope_with_id($scope2_id),
						Ci: 1
					}));
					_resume_branch($scope3_id);
				}, $scope2_id)
			});
			writeScope($scope2_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a2"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {
		f: input.note,
		h: input.t2,
		i: $input_note__closures,
		a: _existing_scope($childScope)
	});
}, 1, () => [card_default]);

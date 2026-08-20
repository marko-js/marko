// tags/card/index.marko
const $template = "<section></section>";
_shells({
	b: "b; ;<section></section>",
	b0: "b0;b%;<!><!><!>"
});
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_patch_dynamic_tag($scope1_id, "a", input.content, $scope0_owned, 2);
			_dynamic_tag$1($scope1_id, "a", input.content, {}, 0, 0, _source_guard($scope0_reason, 2), 1);
			$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"]);
	_html(`</section>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, { e: input.content });
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)(" b"), ((_w0) => `<main>${_w0}</main>`)($template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: _mask_group($scope0_owned, 0)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		show: input.show,
		content: _content_elide("a0", () => {
			_persisted_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.note, $scope0_owned, 1)}${_el_resume($scope1_id, "a")}</em>`);
			_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {
		e: input.note,
		f: $input_note__closures,
		a: _existing_scope($childScope)
	});
}, 1, () => [card_default]);

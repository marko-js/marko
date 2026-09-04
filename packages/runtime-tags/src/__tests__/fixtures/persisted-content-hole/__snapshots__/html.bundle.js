// tags/card/index.marko
const $template = "<section><h2> </h2><!></section>";
const $walks = "E l%l";
_shells({ b: "b;E l%;<section><h2> </h2><!></section>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h2>`);
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, 0, $scope0_owned, 1);
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)($walks), ((_w0) => `<main>${_w0}</main>`)($template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		title: input.title,
		content: _content_elide("a0", () => {
			_persisted_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_owned, 1)}</em>`);
			_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		f: $input_note__closures,
		a: _existing_scope($childScope)
	});
}, 1, () => [card_default]);

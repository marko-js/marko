// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!><footer><!></footer></section>";
const $walks$1 = "E l%bD%m";
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;E l%bD%;<section><h2> </h2><!><footer><!></footer></section>" });
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h2>`);
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "#text/1", $tag, 0, 0, 0, 0, $scope0_owned, 1);
	_dynamic_tag($scope0_id, "#text/1", $tag, {}, 0, 0, $sg__input_content, 1);
	_html("<footer>");
	const $tag2 = input.content;
	_patch_dynamic_tag($scope0_id, "#text/2", $tag2, 0, 0, 0, 0, $scope0_owned, 1);
	_dynamic_tag($scope0_id, "#text/2", $tag2, {}, 0, 0, $sg__input_content, 1);
	_html("</footer></section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)($walks$1), ((_w0) => `<main>${_w0}</main>`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default({
		title: input.title,
		content: _content_elide("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _persisted_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_owned, 1)}</em>`);
			_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		"ClosureScopes:input_note": $input_note__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1, () => [card_default]);

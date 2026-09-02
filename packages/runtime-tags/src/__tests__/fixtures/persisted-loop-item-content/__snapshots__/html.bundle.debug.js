// tags/card/index.marko
const $template$1 = "<b> </b><!><!>";
const $walks$1 = "D l%c";
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;D l%;<b> </b><!><!>" });
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</b>`);
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "#text/1", $tag, 0, 0, 0, 0, $scope0_owned, 1);
	_dynamic_tag($scope0_id, "#text/1", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<ul></ul>";
const $walks = " b";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko; ;<ul></ul>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1), /*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_n__closures = new Set();
		_html("<li>");
		_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		card_default({
			title: item.t,
			content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _persisted_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "#text/0", item.n, void 0, $scope0_owned, 0)}</em>`);
				_subscribe($scope0_reason && $for_content__item_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:10"));
				_resume_branch($scope2_id);
			}, $scope1_id)
		});
		_html("</li>");
		_scope($scope1_id, {
			"ClosureScopes:item_n": $for_content__item_n__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:4");
	}, 0, $scope0_id, "#ul/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_owned, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $sg__input_items)}`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, () => [card_default]);

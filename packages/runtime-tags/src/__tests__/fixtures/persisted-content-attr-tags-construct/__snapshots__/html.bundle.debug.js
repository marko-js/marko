// tags/card/index.marko
const $template$1 = "<section><header><!></header><h2> </h2><!></section>";
const $walks$1 = "E%lD l%l";
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;E%lD l%;<section><header><!></header><h2> </h2><!></section>" });
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section><header>");
	const $tag = input.header;
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html(`</header><h2>${_patch_text($scope0_id, "#text/1", input.title, void 0, $scope0_owned, 1)}</h2>`);
	const $tag2 = input.content;
	_patch_dynamic_tag($scope0_id, "#text/2", $tag2, 0, 0, 0, $scope0_owned, 2);
	_dynamic_tag($scope0_id, "#text/2", $tag2, {}, 0, 0, _source_guard($scope0_reason, 2), 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,<b>static header</b>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,body",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 1: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			card_default({
				title: input.title,
				header: attrTag({ content: _content_elide("__tests__/template.marko_3*content", () => {
					const $scope3_reason = _persisted_reason();
					const $scope3_id = _scope_id();
					_html("<b>static header</b>");
				}, $scope1_id) }),
				content: _content_elide("__tests__/template.marko_2*content", () => {
					const $scope2_reason = _persisted_reason();
					const $scope2_id = _scope_id();
					_html("body");
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, { input_title: input.title }, "__tests__/template.marko", 0, { input_title: ["input.title"] });
}, 1, () => [card_default]);

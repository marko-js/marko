// tags/card/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;D%;<section><!></section>" });
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<section>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html$1("</section>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D%c%c%;<i><!>:<!>:<!></i>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_prefix__closures = new Set();
	const $global_brand__closures = new Set();
	const $global$1 = $global();
	_html$1("<main>");
	_for_of$1(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item__closures = new Set();
		_set_serialize_reason(0);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		card_default({ content: _content_elide("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _persisted_reason();
			const $scope2_id = _scope_id();
			_html$1(`<i>${_patch_text($scope2_id, "#text/0", $global$1.brand)}${_el_resume($scope2_id, "#text/0")}:<!>${_patch_text($scope2_id, "#text/1", input.prefix, $scope0_owned, 2)}${_el_resume($scope2_id, "#text/1")}:<!>${_patch_text($scope2_id, "#text/2", item, $scope0_owned, 1)}${_el_resume($scope2_id, "#text/2")}</i>`);
			_subscribe($scope0_reason && $for_content__item__closures, _subscribe($scope0_reason && $global_brand__closures, _subscribe(_source_if($scope0_reason, 2) && $input_prefix__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"))));
			_resume_branch($scope2_id);
		}, $scope1_id) });
		writeScope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"ClosureScopes:item": $for_content__item__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:4");
	}, 0, $scope0_id, "#main/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_1*shell");
	_html$1(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_items)}`);
	$scope0_reason && writeScope($scope0_id, {
		input_prefix: input.prefix,
		$global_brand: $global$1?.brand,
		"ClosureScopes:input_prefix": $input_prefix__closures,
		"ClosureScopes:$global_brand": $global_brand__closures
	}, "__tests__/template.marko", 0, {
		input_prefix: ["input.prefix"],
		$global_brand: ["$global.brand"]
	});
}, 1, 1);

// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;E l%;<section><h2> </h2><!></section>" });
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h2>`);
	_patch_dynamic_tag($scope0_id, "#text/1", input.content, $scope0_owned, 1);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%l`)($walks$1);
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<i> </i>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `D/${_w0}&%l`)($walks$1), ((_w0) => `<main>${_w0}<!></main>`)($template$1)),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $global_brand__closures = new Set();
	const $global$1 = $global();
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default({
		title: input.title,
		content: _content_elide("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _persisted_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", $global$1.brand)}</em>`);
			_subscribe($scope0_reason && $global_brand__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_serialize_reason(0);
			const $childScope2 = _peek_scope_id();
			_patch_child($scope2_id, "#childScope/0", $childScope2);
			card_default({
				title: "x",
				content: _content_elide("__tests__/template.marko_3*content", () => {
					const $scope3_reason = _persisted_reason();
					const $scope3_id = _scope_id();
					_html(`<i>${_patch_text($scope3_id, "#text/0", $global$1.brand)}</i>`);
					_subscribe($scope0_reason && $global_brand__closures, _scope($scope3_id, {
						_: _scope_with_id($scope2_id),
						"ClosureSignalIndex:$global_brand": 1
					}, "__tests__/template.marko", "6:6"));
					_resume_branch($scope3_id);
				}, $scope2_id)
			});
			_scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_2*shell"]);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		$global_brand: $global$1?.brand,
		"ClosureScopes:$global_brand": $global_brand__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { $global_brand: ["$global.brand"] });
}, 1, 1);

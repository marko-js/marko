// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;E l%;<section><h2> </h2><!></section>" });
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1(`<section><h2>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h2>`);
	_patch_dynamic_tag($scope0_id, "#text/1", input.content, $scope0_owned, 1);
	_dynamic_tag$1($scope0_id, "#text/1", input.content, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	_html$1("</section>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
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
	const $global$1 = $global();
	_html$1("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default({
		title: input.title,
		content: _content_elide("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _persisted_reason();
			const $scope1_id = _scope_id();
			_html$1(`<em>${_patch_text($scope1_id, "#text/0", $global$1.brand)}${_el_resume($scope1_id, "#text/0")}</em>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "2:4");
		}, $scope0_id)
	});
	_if$1(() => {
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
					_html$1(`<i>${_patch_text($scope3_id, "#text/0", $global$1.brand)}${_el_resume($scope3_id, "#text/0")}</i>`);
					writeScope($scope3_id, {}, "__tests__/template.marko", "6:6");
				}, $scope2_id)
			});
			writeScope($scope2_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_2*shell"]);
	_html$1("</main>");
	$scope0_reason && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, 1);

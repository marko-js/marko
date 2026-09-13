// tags/wrap/index.marko
const $template$2 = "<section><!></section>";
const $walks$2 = "D%l";
_shells({ "__tests__/tags/wrap/index.marko": "__tests__/tags/wrap/index.marko;D%;<section><!></section>" });
var wrap_default = _template_persisted("__tests__/tags/wrap/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/wrap/index.marko", 0);
}, 0, 0);

// tags/card/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D%l");
_shells({
	"__tests__/tags/card/index.marko_1*content": "__tests__/tags/card/index.marko_1*content;D ;<em> </em>",
	"__tests__/tags/card/index.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/card/index.marko !__tests__/tags/card/index.marko_0;${_w0};${_w1}`)(((_w0) => ` D l/${_w0}&`)("D%l"), ((_w0) => `<button> </button>${_w0}`)($template$2))
});
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/2", $childScope);
	wrap_default({ content: _content_elide("__tests__/tags/card/index.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 0)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card/index.marko", "3:2"));
	}, $scope0_id) });
	_script($scope0_id, "__tests__/tags/card/index.marko_0");
	_patch_value($scope0_id, "__tests__/tags/card/index.marko0", n, 1);
	$scope0_page && _scope($scope0_id, {
		n,
		"ClosureScopes:input_note": $input_note__closures,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/tags/card/index.marko", 0, { n: "1:6" });
}, 0, () => [wrap_default]);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			card_default({ note: input.note });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$scope0_page && _scope($scope0_id, { input_note: input.note }, "__tests__/template.marko", 0, { input_note: ["input.note"] });
}, 1, () => [card_default]);

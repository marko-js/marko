// card.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/card.marko": "__tests__/card.marko;D%;<section><!></section>" });
var card_default = _template("__tests__/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/card.marko", 0);
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_1_input_on#0:3/subscribe __tests__/template.marko_1_input_on#0:3_n#3/init!__tests__/template.marko_1;b%b D ;<!><!><button> </button>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko;${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_on = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_on__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	card_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let n = 0;
		_dynamic_tag($scope1_id, "#text/0", input.on ? "p" : "div", { "data-n": n }, _content("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(_text_resume($scope2_id, "#text/0", input.label, $wg__input_label));
			_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6"));
			$wg__input_label || _resume_branch($scope2_id);
		}, $scope1_id));
		_html(`<button>${_text_resume($scope1_id, "#text/2", n)}</button>${_el_resume($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill2", n, 1);
		_subscribe($wi__input_on && $input_on__closures, _scope($scope1_id, {
			n,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:4", { n: "3:8" }));
	}, $scope0_id) });
	$scope0_page ? _scope($scope0_id, {
		input_on: input.on,
		input_label: input.label,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_on/5": $wi__input_on && $input_on__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_label: ["input.label"]
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 0)), _content_withhold(input.on), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 1)));
}, 1);

// card.marko
const $template$1 = "<section><em> </em><!></section>";
const $walks$1 = "E l%l";
_shells({ "__tests__/card.marko": "__tests__/card.marko;E l%;<section><em> </em><!></section>" });
var card_default = _template("__tests__/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "#text/0", input.meta.n, void 0, $scope0_reason, 0)}</em>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/card.marko", 0);
});

// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : null, { meta: attrTag({ n: count }) }, _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(_text_resume($scope1_id, "#text/0", input.label, $wg__input_label));
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_1_input_label#0:5/subscribe", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, $scope0_id));
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_on: input.on,
		input_label: input.label,
		count,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_label: ["input.label"],
		count: "2:6"
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 1)));
}, 1);

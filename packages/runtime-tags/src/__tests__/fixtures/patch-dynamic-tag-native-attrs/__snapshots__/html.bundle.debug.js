// template.marko
const $template = "<button class=inc> </button><!><!><!>";
const $walks = " D l%b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%b%;<button class=inc> </button><!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden = _client_guard($scope0_reason, 6), $cg__input_tag__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden = _client_guard($scope0_reason, 5), $cg__input_tag__OR__input_cls__OR__input_title__OR__input_x__OR__input_hidden = _client_guard($scope0_reason, 4), $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_x__OR__input_hidden = _client_guard($scope0_reason, 3), $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_hidden = _client_guard($scope0_reason, 2), $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x = _client_guard($scope0_reason, 1), $cg__input_checked = _client_guard($scope0_reason, 15), $cg__input_field = _client_guard($scope0_reason, 14), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/2", input.tag, {
		class: input.cls,
		style: input.sty,
		title: input.title,
		"data-x": input.x,
		hidden: input.hidden,
		onClick: _resume(function() {
			console.log("clicked");
		}, "__tests__/template.marko_0/onClick")
	}, 0, 0, _write_guard($scope0_reason, 7), void 0, 1, $scope0_reason, 7, 0, 8);
	_dynamic_tag($scope0_id, "#text/3", input.field, {
		type: "checkbox",
		checked: input.checked,
		checkedChange: _resume(function(next) {
			console.log(next);
		}, "__tests__/template.marko_0/checkedChange")
	}, 0, 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0, 0, 14);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_tag: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 7)) && input.tag,
		input_cls: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.cls,
		input_sty: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.sty,
		input_title: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.title,
		input_x: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.x,
		input_hidden: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.hidden,
		input_field: (_unfilled_if($scope0_reason, 15) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 14)) && input.field,
		input_checked: (_unfilled_if($scope0_reason, 14) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 15)) && input.checked,
		n
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		input_cls: ["input.cls"],
		input_sty: ["input.sty"],
		input_title: ["input.title"],
		input_x: ["input.x"],
		input_hidden: ["input.hidden"],
		input_field: ["input.field"],
		input_checked: ["input.checked"],
		n: "1:6"
	}) : (_filled_guard($scope0_reason, 8) && $cg__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.tag, !_server_guard($scope0_reason, 8)), $cg__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden && _content_withhold(input.tag), _filled_guard($scope0_reason, 9) && $cg__input_tag__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.cls, !_server_guard($scope0_reason, 9)), $cg__input_tag__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden && _content_withhold(input.cls), _filled_guard($scope0_reason, 10) && $cg__input_tag__OR__input_cls__OR__input_title__OR__input_x__OR__input_hidden && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.sty, !_server_guard($scope0_reason, 10)), $cg__input_tag__OR__input_cls__OR__input_title__OR__input_x__OR__input_hidden && _content_withhold(input.sty), _filled_guard($scope0_reason, 11) && $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_x__OR__input_hidden && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill3", input.title, !_server_guard($scope0_reason, 11)), $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_x__OR__input_hidden && _content_withhold(input.title), _filled_guard($scope0_reason, 12) && $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_hidden && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill4", input.x, !_server_guard($scope0_reason, 12)), $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_hidden && _content_withhold(input.x), _filled_guard($scope0_reason, 13) && $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill5", input.hidden, !_server_guard($scope0_reason, 13)), $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x && _content_withhold(input.hidden), _filled_guard($scope0_reason, 14) && $cg__input_checked && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill6", input.field, !_server_guard($scope0_reason, 14)), $cg__input_checked && _content_withhold(input.field), _filled_guard($scope0_reason, 15) && $cg__input_field && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill7", input.checked, !_server_guard($scope0_reason, 15)), $cg__input_field && _content_withhold(input.checked));
}, 1);

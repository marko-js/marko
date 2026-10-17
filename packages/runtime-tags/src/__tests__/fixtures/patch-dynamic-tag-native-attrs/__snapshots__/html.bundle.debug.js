// template.marko
const $template = "<button class=inc> </button><!><!><!>";
const $walks = " D l%b%c";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%b%;<button class=inc> </button><!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
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
	}, 0, 0, _write_guard($scope0_reason, 7), void 0, 1, $scope0_reason, 7);
	_dynamic_tag($scope0_id, "#text/3", input.field, {
		type: "checkbox",
		checked: input.checked,
		checkedChange: _resume(function(next) {
			console.log(next);
		}, "__tests__/template.marko_0/checkedChange")
	}, 0, 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "PatchWrite:input_tag", input.tag, 1);
	_patch_write($scope0_id, "PatchWrite:input_cls", input.cls, 1);
	_patch_write($scope0_id, "PatchWrite:input_sty", input.sty, 1);
	_patch_write($scope0_id, "PatchWrite:input_title", input.title, 1);
	_patch_write($scope0_id, "PatchWrite:input_x", input.x, 1);
	_patch_write($scope0_id, "PatchWrite:input_hidden", input.hidden, 1);
	_patch_write($scope0_id, "PatchWrite:input_field", input.field, 1);
	_patch_write($scope0_id, "PatchWrite:input_checked", input.checked, 1);
	_client_guard($scope0_reason, 7) && _patch_init($scope0_id, "__tests__/template.marko_0_input_tag#6_input_cls#7_input_sty#8_input_title#9_input_x#10_input_hidden#11/init");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/template.marko_0_input_field#13_input_checked#14/init");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill8", n, 1);
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
	}) : (_filled_guard($scope0_reason, 8) && _client_guard($scope0_reason, 6) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.tag, !_server_guard($scope0_reason, 8)), _filled_guard($scope0_reason, 9) && _client_guard($scope0_reason, 5) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.cls, !_server_guard($scope0_reason, 9)), _filled_guard($scope0_reason, 10) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", input.sty, !_server_guard($scope0_reason, 10)), _filled_guard($scope0_reason, 11) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill3", input.title, !_server_guard($scope0_reason, 11)), _filled_guard($scope0_reason, 12) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill4", input.x, !_server_guard($scope0_reason, 12)), _filled_guard($scope0_reason, 13) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill5", input.hidden, !_server_guard($scope0_reason, 13)), _filled_guard($scope0_reason, 14) && _client_guard($scope0_reason, 15) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill6", input.field, !_server_guard($scope0_reason, 14)), _filled_guard($scope0_reason, 15) && _client_guard($scope0_reason, 14) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill7", input.checked, !_server_guard($scope0_reason, 15)));
}, 1);

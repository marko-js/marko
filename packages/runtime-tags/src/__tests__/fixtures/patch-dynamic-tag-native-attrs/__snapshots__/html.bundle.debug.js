// template.marko
const $template = "<button class=inc> </button><!><!><!>";
const $walks = " D l%b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%b%;<button class=inc> </button><!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_tag = _filled_guard($scope0_reason, 8), $fg__input_cls = _filled_guard($scope0_reason, 9), $fg__input_sty = _filled_guard($scope0_reason, 10), $fg__input_title = _filled_guard($scope0_reason, 11), $fg__input_x = _filled_guard($scope0_reason, 12), $fg__input_hidden = _filled_guard($scope0_reason, 13), $fg__input_field = _filled_guard($scope0_reason, 14), $fg__input_checked = _filled_guard($scope0_reason, 15);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/2", input.tag, {
		class: input.cls,
		style: input.sty,
		title: input.title,
		"data-x": input.x,
		hidden: input.hidden,
		onClick: _resume(function() {
			console.log("clicked");
		}, "__tests__/template.marko_0/onClick")
	}, 1, 0, 0, _write_guard($scope0_reason, 7), $scope0_reason, 7, 0, 8);
	_dynamic_tag($scope0_id, "#text/3", input.field, {
		type: "checkbox",
		checked: input.checked,
		checkedChange: _resume(function(next) {
			console.log(next);
		}, "__tests__/template.marko_0/checkedChange")
	}, 9, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0, 0, 14);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_tag#6_input_cls#7_input_sty#8_input_title#9_input_x#10_input_hidden#11/setup", [
		$fg__input_tag && "input_tag",
		$fg__input_cls && "input_cls",
		$fg__input_sty && "input_sty",
		$fg__input_title && "input_title",
		$fg__input_x && "input_x",
		$fg__input_hidden && "input_hidden"
	], $scope0_reason, 7);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_field#13_input_checked#14/setup", [$fg__input_field && "input_field", $fg__input_checked && "input_checked"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_tag: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.tag,
		input_cls: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 7)) && input.cls,
		input_sty: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 7)) && input.sty,
		input_title: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && input.title,
		input_x: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 7)) && input.x,
		input_hidden: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 7)) && input.hidden,
		input_field: (_unfilled_if($scope0_reason, 15) || _unfilled_if($scope0_reason, 0)) && input.field,
		input_checked: (_unfilled_if($scope0_reason, 14) || _unfilled_if($scope0_reason, 0)) && input.checked,
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
	}) || ($fg__input_tag && _client_guard($scope0_reason, 6) && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 8)), $fg__input_cls && _client_guard($scope0_reason, 5) && _patch_write($scope0_id, "PatchMarkedWrite:input_cls", input.cls, !_server_guard($scope0_reason, 9)), $fg__input_sty && _client_guard($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_sty", input.sty, !_server_guard($scope0_reason, 10)), $fg__input_title && _client_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 11)), $fg__input_x && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 12)), $fg__input_hidden && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_hidden", input.hidden, !_server_guard($scope0_reason, 13)), $fg__input_field && _client_guard($scope0_reason, 15) && _patch_write($scope0_id, "PatchMarkedWrite:input_field", input.field, !_server_guard($scope0_reason, 14)), $fg__input_checked && _client_guard($scope0_reason, 14) && _patch_write($scope0_id, "PatchMarkedWrite:input_checked", input.checked, !_server_guard($scope0_reason, 15)));
}, 1);

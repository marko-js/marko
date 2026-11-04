// template.marko
const $template = "<main><h1> </h1><input></main>";
const $walks = "E l l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l ;<main><h1> </h1><input></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_value__OR__input_big = _unfilled_if($scope0_reason, 0), $fg__input_value = _filled_guard($scope0_reason, 2), $fg__input_big = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const plain = _resume((next) => {
		document.querySelector("main").dataset.got = next;
	}, "__tests__/template.marko_0/plain");
	const loud = _resume((next) => {
		document.querySelector("main").dataset.got = next.toUpperCase();
	}, "__tests__/template.marko_0/loud");
	_html(`<main><h1>${_text_mark($scope0_id, "#text/0", input.title, 1, $scope0_reason, 1)}</h1><input${_attr_input_value($scope0_id, "#input/1", input.value, input.big ? loud : plain, 3, $scope0_reason, 0)}>${_el_mark($scope0_id, "#input/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_value#5_input_big#6_plain#7_loud#8/setup", (($fg__input_value ? " input_value" : "") + ($fg__input_big ? " input_big" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_value: _write_if($scope0_reason, 3) && $ui__input_value__OR__input_big && input.value,
		input_big: $ui__input_value__OR__input_big && input.big,
		plain: $ui__input_value__OR__input_big && plain,
		loud: $ui__input_value__OR__input_big && loud
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		input_big: ["input.big"],
		plain: "1:8",
		loud: "2:8",
		"ControlledHandler:#input/1": ["valueChange", "5:28"]
	}) || ($fg__input_value && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_value", input.value, !_server_guard($scope0_reason, 2)), $fg__input_big && $ui__input_value__OR__input_big && _patch_write($scope0_id, "PatchMarkedWrite:input_big", input.big, !_server_guard($scope0_reason, 3)));
}, 1);

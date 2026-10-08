// template.marko
const $template = "<main><h1> </h1><input></main>";
const $walks = "E l l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l ;<main><h1> </h1><input></main>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_value__OR__input_big = _source_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const plain = _resume((next) => {
		document.querySelector("main").dataset.got = next;
	}, "__tests__/template.marko_0/plain");
	const loud = _resume((next) => {
		document.querySelector("main").dataset.got = next.toUpperCase();
	}, "__tests__/template.marko_0/loud");
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 1)}</h1><input${_attr_input_value($scope0_id, "#input/1", input.value, input.big ? loud : plain)}${_patch_bind($scope0_id, "ControlledHandler:#input/1", input.big ? loud : plain, $scope0_reason, 0)}${_patch_control($scope0_id, "#input/1", 2, input.value, $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "input_value", input.value, 1);
	_patch_write($scope0_id, "input_big", input.big, 1);
	_patch_write($scope0_id, "plain", plain, 1);
	_patch_write($scope0_id, "loud", loud, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/template.marko_0_input_value#5_input_big#6_plain#7_loud#8/init");
	$scope0_page ? _scope($scope0_id, {
		input_value: _source_if($scope0_reason, 3) && input.value,
		input_big: $wi__input_value__OR__input_big && input.big,
		plain: $wi__input_value__OR__input_big && plain,
		loud: $wi__input_value__OR__input_big && loud
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		input_big: ["input.big"],
		plain: "1:8",
		loud: "2:8",
		"ControlledHandler:#input/1": ["valueChange", "5:28"]
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "__tests__/template.marko_fill0", input.value), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "__tests__/template.marko_fill1", input.big));
}, 1);

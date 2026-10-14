// counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
_shells({ "__tests__/counter.marko": "^__tests__/counter.marko !__tests__/counter.marko_0; D ;<button> </button>" });
_client_return("__tests__/counter.marko");
var counter_default = _template("__tests__/counter.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = input;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = n;
	_script($scope0_id, "__tests__/counter.marko_0");
	const $valueChange2 = _patch_bind($scope0_id, "PatchBind:#TagVariableChange", _resume(function(v) {
		n = v;
	}, "__tests__/counter.marko_0/valueChange", $scope0_id) || void 0, 0, 0);
	_patch_value($scope0_id, "PatchValue:__tests__/counter.marko_fill0", n, 1);
	$scope0_page && _scope($scope0_id, {
		n,
		"#TagVariableChange": $valueChange2
	}, "__tests__/counter.marko", 0, { n: "1:6" });
	return $return;
});

// template.marko
const $template = "<main><!><p> </p></main>";
const $walks = "D1bD m";
_shells({ "__tests__/template.marko": "__tests__/template.marko !;D1bD ;<main><!><p> </p></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $inputoncounternull_scope = _peek_scope_id();
	let n = _dynamic_tag($scope0_id, "#text/0", input.on ? counter_default : null, [input.start], 0, 1, void 0, "__tests__/template.marko_0_n#8/var", 1, $scope0_reason, 0);
	_var($scope0_id, "#scopeOffset/1", $inputoncounternull_scope, "__tests__/template.marko_0_n#8/var");
	_html(`<p>${_text_resume($scope0_id, "#text/2", n)}</p></main>`);
	_patch_write($scope0_id, "PatchWrite:input_on", input.on, 1);
	_patch_write($scope0_id, "PatchWrite:input_start", input.start, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/template.marko_0_input_on#5_input_start#6/init");
	$scope0_page ? _scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.on,
		input_start: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.start
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_start: ["input.start"]
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.on), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.start));
}, 1);

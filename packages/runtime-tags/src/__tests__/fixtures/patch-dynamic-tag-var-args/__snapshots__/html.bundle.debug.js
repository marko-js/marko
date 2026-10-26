// counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/counter.marko_0"]];
_shells({ "__tests__/counter.marko": "^__tests__/counter.marko !__tests__/counter.marko_0; D ;<button> </button>" });
_stateful_return("__tests__/counter.marko");
var counter_default = _template("__tests__/counter.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = input;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = n;
	_script($scope0_id, "__tests__/counter.marko_0");
	const $valueChange2 = _patch_bind($scope0_id, "PatchWrite:#TagVariableChange", _resume(function(v) {
		n = v;
	}, "__tests__/counter.marko_0/valueChange", $scope0_id) || void 0, 0, 0);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/counter.marko_fill0", n, 1);
	$scope0_page && _scope($scope0_id, {
		n,
		"#TagVariableChange": $valueChange2
	}, "__tests__/counter.marko", 0, { n: "1:6" });
	return $return;
});

// template.marko
const $template = "<main><!><p> </p></main>";
const $walks = "D1bD m";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;D1bD ;<main><!><p> </p></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_start = _client_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $inputoncounternull_scope = _peek_scope_id();
	let n = _dynamic_tag($scope0_id, "#text/0", input.on ? counter_default : null, [input.start], 0, 1, void 0, "__tests__/template.marko_0_n#8/var", 1, $scope0_reason, 0);
	_var($scope0_id, "#scopeOffset/1", $inputoncounternull_scope, "__tests__/template.marko_0_n#8/var");
	_html(`<p>${_text_resume($scope0_id, "#text/2", n)}</p></main>`);
	$scope0_page ? _scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.on,
		input_start: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.start
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_start: ["input.start"]
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_start && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 1)), $cg__input_start && _content_withhold(input.on), _filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.start, !_server_guard($scope0_reason, 2)), $cg__input_on && _content_withhold(input.start));
}, 1);

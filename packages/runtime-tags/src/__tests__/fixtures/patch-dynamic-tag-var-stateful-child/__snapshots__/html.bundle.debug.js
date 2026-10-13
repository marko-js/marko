// tags/counter.marko
const $template$2 = "<button class=inc><!> <!></button>";
const $walks$2 = " D%c%l";
_shells({ "__tests__/tags/counter.marko": "^__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D%c%;<button class=inc><!> <!></button>" });
_client_return("__tests__/tags/counter.marko");
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)} ${_text_resume($scope0_id, "#text/2", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = n;
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/tags/counter.marko_fill0", n, 1);
	$scope0_page && _scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
	return $return;
});

// tags/other.marko
const $template$1 = "<i> </i>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/other.marko": "^__tests__/tags/other.marko;D ;<i> </i>" });
var other_default = _template("__tests__/tags/other.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<i>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</i>`);
	const $return = -1;
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/other.marko", 0);
	return $return;
});

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b1b D l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !;b1b D ;<!><!><p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $inputwhichcounterother_scope = _peek_scope_id();
	let count = _dynamic_tag($scope0_id, "#text/0", input.which ? counter_default : other_default, { label: input.label }, void 0, void 0, void 0, "__tests__/template.marko_0_count#9/var", 1, $scope0_reason, 0);
	_var($scope0_id, "#scopeOffset/1", $inputwhichcounterother_scope, "__tests__/template.marko_0_count#9/var");
	_html(`<p>${_text_resume($scope0_id, "#text/3", count)}</p>${_el_resume($scope0_id, "#p/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_count#9");
	_patch_write($scope0_id, "PatchWrite:input_which", input.which, 1);
	_patch_write($scope0_id, "PatchWrite:input_label", input.label, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/template.marko_0_input_which#6_input_label#7/init");
	$scope0_page ? _scope($scope0_id, {
		input_which: _write_if($scope0_reason, 2) && input.which,
		input_label: _write_if($scope0_reason, 1) && input.label,
		count
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_label: ["input.label"],
		count: "3:35"
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.which), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.label));
}, 1);

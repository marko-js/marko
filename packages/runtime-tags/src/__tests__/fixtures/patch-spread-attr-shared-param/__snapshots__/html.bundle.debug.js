// template.marko
const $template = "<a>x</a><img>";
const $walks = " b b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !; b ;<a>x</a><img>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<a${_patch_attrs({
		href: input.url,
		title: input.title,
		class: input.cls
	}, "#a/0", $scope0_id, "a", void 0, $scope0_reason, 4)}>x</a>${_el_resume($scope0_id, "#a/0")}<img${_patch_attr($scope0_id, "PatchAttr:#img/1 src", "src", `${input.url}?w=${input.width}`, $scope0_reason, 2)}>${_el_resume($scope0_id, "#img/1", _mask_group($scope0_reason, 2))}`);
	_script($scope0_id, "__tests__/template.marko_0_input_url#4_input_title#5_input_cls#6");
	_patch_write($scope0_id, "PatchWrite:input_url", input.url, 1);
	_patch_write($scope0_id, "PatchWrite:input_title", input.title, 1);
	_patch_write($scope0_id, "PatchWrite:input_cls", input.cls, 1);
	_patch_write($scope0_id, "PatchWrite:input_width", input.width, 1);
	_client_guard($scope0_reason, 2) && _patch_init($scope0_id, "__tests__/template.marko_0_input_url#4_input_width#8/init");
	_client_guard($scope0_reason, 4) && _patch_init($scope0_id, "__tests__/template.marko_0_input_url#4_input_title#5_input_cls#6/init");
	$scope0_page ? _scope($scope0_id, {
		input_url: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.url,
		input_title: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 9)) && input.title,
		input_cls: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 9)) && input.cls,
		input_width: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 9)) && input.width
	}, "__tests__/template.marko", 0, {
		input_url: ["input.url"],
		input_title: ["input.title"],
		input_cls: ["input.cls"],
		input_width: ["input.width"],
		"EventAttributes:#a/0": ["...{ href: input.url, title: input.title, class: input.cls }", "1:7"]
	}) : (_filled_guard($scope0_reason, 6) && (_client_guard($scope0_reason, 3) || _client_guard($scope0_reason, 9)) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.url, !_server_guard($scope0_reason, 6)), _filled_guard($scope0_reason, 7) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.title, !_server_guard($scope0_reason, 7)), _filled_guard($scope0_reason, 8) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", input.cls, !_server_guard($scope0_reason, 8)), _filled_guard($scope0_reason, 9) && _client_guard($scope0_reason, 6) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill3", input.width, !_server_guard($scope0_reason, 9)));
}, 1);

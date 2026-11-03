// template.marko
const $template = "<a>x</a><img>";
const $walks = " b b";
const $setup = [[], ["__tests__/template.marko_0_input_url#4_input_title#5_input_cls#6"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_input_url#4_input_title#5_input_cls#6; b ;<a>x</a><img>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_url = _filled_guard($scope0_reason, 5), $fg__input_title = _filled_guard($scope0_reason, 6), $fg__input_cls = _filled_guard($scope0_reason, 7), $fg__input_width = _filled_guard($scope0_reason, 8);
	const $scope0_id = _scope_id();
	_html(`<a${_attrs({
		href: input.url,
		title: input.title,
		class: input.cls
	}, "#a/0", $scope0_id, "a", 0, $scope0_reason, 3)}>x</a>${_el_resume($scope0_id, "#a/0")}<img${_attr("src", `${input.url}?w=${input.width}`, $scope0_id, "PatchAttr:#img/1 src", $scope0_reason, 2)}>${_el_resume($scope0_id, "#img/1", _mask_group($scope0_reason, 2))}`);
	_script($scope0_id, "__tests__/template.marko_0_input_url#4_input_title#5_input_cls#6");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_url#4_input_title#5_input_cls#6/setup", [
		$fg__input_url && "input_url",
		$fg__input_title && "input_title",
		$fg__input_cls && "input_cls"
	], $scope0_reason, 3);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_url#4_input_width#8/setup", [$fg__input_url && "input_url", $fg__input_width && "input_width"], $scope0_reason, 2);
	_scope($scope0_id, {
		input_url: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.url,
		input_title: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.title,
		input_cls: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.cls,
		input_width: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2)) && input.width
	}, "__tests__/template.marko", 0, {
		input_url: ["input.url"],
		input_title: ["input.title"],
		input_cls: ["input.cls"],
		input_width: ["input.width"],
		"EventAttributes:#a/0": ["...{ href: input.url, title: input.title, class: input.cls }", "1:7"]
	}) || ($fg__input_url && _client_guard($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_url", input.url, !_server_guard($scope0_reason, 5)), $fg__input_title && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 6)), $fg__input_cls && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_cls", input.cls, !_server_guard($scope0_reason, 7)), $fg__input_width && _client_guard($scope0_reason, 5) && _patch_write($scope0_id, "PatchMarkedWrite:input_width", input.width, !_server_guard($scope0_reason, 8)));
}, 1);

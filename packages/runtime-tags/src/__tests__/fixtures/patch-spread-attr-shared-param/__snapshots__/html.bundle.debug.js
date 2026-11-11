// template.marko
const $template = "<a>x</a><img>";
const $walks = " b b";
const $setup = [[], ["__tests__/template.marko_0_attrs#10"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_attrs#10; b ;<a>x</a><img>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_url__OR__input_title__OR__input_cls = _unfilled_if($scope0_reason, 3), $ui__input_url__OR__input_width = _unfilled_if($scope0_reason, 2), $ui__input_title__OR__input_cls__OR__input_width = _unfilled_if($scope0_reason, 4), $fg__input_url = _filled_guard($scope0_reason, 5), $fg__input_title = _filled_guard($scope0_reason, 6), $fg__input_cls = _filled_guard($scope0_reason, 7), $fg__input_width = _filled_guard($scope0_reason, 8);
	const $scope0_id = _scope_id();
	const attrs = {
		href: input.url,
		title: input.title,
		class: input.cls
	};
	_html(`<a${_attrs(attrs, "#a/0", $scope0_id, "a", 0, $scope0_reason, 3)}>x</a>${_el_mark($scope0_id, "#a/0")}<img${_attr("src", `${input.url}?w=${input.width}`, $scope0_id, "#img/1", $scope0_reason, 2)}>${_el_mark($scope0_id, "#img/1", _updates_from($scope0_reason, 2))}`);
	_script($scope0_id, "__tests__/template.marko_0_attrs#10");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_url#4_input_title#5_input_cls#6/setup", (($fg__input_url ? " input_url" : "") + ($fg__input_title ? " input_title" : "") + ($fg__input_cls ? " input_cls" : "")).slice(1), $scope0_reason, 3);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_url#4_input_width#8/setup", (($fg__input_url ? " input_url" : "") + ($fg__input_width ? " input_width" : "")).slice(1), $scope0_reason, 2);
	_scope($scope0_id, {
		input_url: ($ui__input_title__OR__input_cls__OR__input_width || $ui__input_url__OR__input_width || $ui__input_url__OR__input_title__OR__input_cls) && input.url,
		input_title: $ui__input_url__OR__input_title__OR__input_cls && input.title,
		input_cls: $ui__input_url__OR__input_title__OR__input_cls && input.cls,
		input_width: $ui__input_url__OR__input_width && input.width
	}, "__tests__/template.marko", 0, {
		input_url: ["input.url"],
		input_title: ["input.title"],
		input_cls: ["input.cls"],
		input_width: ["input.width"],
		"EventAttributes:#a/0": ["...attrs", "2:7"]
	}) || ($fg__input_url && $ui__input_title__OR__input_cls__OR__input_width && _patch_write($scope0_id, "PatchMarkedWrite:input_url", input.url, !_server_guard($scope0_reason, 5)), $fg__input_title && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 6)), $fg__input_cls && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_cls", input.cls, !_server_guard($scope0_reason, 7)), $fg__input_width && _unfilled_if($scope0_reason, 5) && _patch_write($scope0_id, "PatchMarkedWrite:input_width", input.width, !_server_guard($scope0_reason, 8)));
}, 1);

// v:template.marko.css
var v_template_marko_default = "input { color: var(--idspackages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19id-19style-19namespace-1btemplate-1amarko_0); }";

// template.marko
const $template = "<label>field</label><input><!><!>";
const $walks = " b b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; b b%;<label>field</label><input><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; ;<style></style>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "PatchAttr:#label/0 for", 0, 0)}>field</label>${_el_resume($scope0_id, "#label/0", 0)}<input${_attr("id", uid, $scope0_id, "PatchAttr:#input/1 id", 0, 0)}${_attr_class(uid, $scope0_id, "PatchAttr:#input/1 class", 0, 0)}>${_el_resume($scope0_id, "#input/1", 0)}`);
	_for_to(360, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`${_style_html(`--idspackages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19id-19style-19namespace-1btemplate-1amarko_0:${_escape_style_value(input.color, $scope1_id, "PatchStyle:#style/0 --idspackages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19id-19style-19namespace-1btemplate-1amarko_0", $scope0_reason, 0)};`)}${_el_resume($scope1_id, "#style/0", _mask_group($scope0_reason, 0))}`);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_color#0:5/init");
		_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
	}, 0, $scope0_id, "#text/2", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", 0, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);

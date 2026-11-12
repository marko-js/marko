// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b D ;<!><!><button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_tag = _filled_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 2));
	let n = 0;
	_dynamic_tag($scope0_id, "#text/0", input.tag, {
		title: input.title,
		onClick: _bind_resume(function() {
			n = input.title.length;
		}, "__tests__/template.marko_0/onClick", $scope0_id, 1)
	}, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0, 0, 1);
	_html(`<button>${_text_mark($scope0_id, "#text/2", n)}</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_tag#5_input_title#6/setup", (($fg__input_tag ? " input_tag" : "") + ($fg__input_title ? " input_title" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_tag: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 0) && input.tag,
		input_title: input.title,
		n
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		input_title: ["input.title"],
		n: "1:6"
	}) || $fg__input_tag && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 1));
}, 1);

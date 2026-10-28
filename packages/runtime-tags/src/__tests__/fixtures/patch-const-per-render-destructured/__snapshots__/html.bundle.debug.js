// template.marko
const $template = "<label> </label><input><button>show</button><output> </output>";
const $walks = " D l b bD l";
let n = 0;
const $setup = [[], ["__tests__/template.marko_0_uid#11"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_uid#11; D l b bD ;<label> </label><input><button>show</button><output> </output>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { uid } = { uid: "u" + ++n };
	let shown = "";
	_html(`<label${_attr("for", `${uid}-${input.name}`)}>${_text_resume($scope0_id, "#text/1", input.label, 1, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "#label/0")}<input${_attr_input_value($scope0_id, "#input/2", input.value, void 0, "PatchControl:2#input/2", $scope0_reason, 2)}${_attr("id", `${uid}-${input.name}`)}${_attr("name", input.name, $scope0_id, "PatchAttr:#input/2 name", $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/2")}<button>show</button>${_el_resume($scope0_id, "#button/3")}<output>${_text_resume($scope0_id, "#text/4", shown)}</output>`);
	_script($scope0_id, "__tests__/template.marko_0_uid#11");
	_patch_write($scope0_id, "PatchWrite:uid", uid, 1);
	_scope($scope0_id, {
		input_name: input.name,
		uid
	}, "__tests__/template.marko", 0, {
		input_name: ["input.name"],
		uid: "2:10"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.name, !_server_guard($scope0_reason, 0));
}, 1);

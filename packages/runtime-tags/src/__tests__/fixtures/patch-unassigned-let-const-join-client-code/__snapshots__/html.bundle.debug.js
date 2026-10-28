// template.marko
const $template = "<p> </p><button> </button>";
const $walks = "D l D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D l D ;<p> </p><button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let uid = input.id;
	const tag = uid + "-" + input.name;
	let n = 0;
	_html(`<p>${_text_resume($scope0_id, "#text/0", tag)}</p><button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", uid, 1);
	_scope($scope0_id, {
		input_name: input.name,
		uid: _write_if($scope0_reason, 1) && uid,
		n
	}, "__tests__/template.marko", 0, {
		input_name: ["input.name"],
		uid: "1:6",
		n: "4:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.name, !_server_guard($scope0_reason, 1));
}, 1);

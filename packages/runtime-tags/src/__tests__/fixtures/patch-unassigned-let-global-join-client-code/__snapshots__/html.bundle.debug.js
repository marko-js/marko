// template.marko
const $template = "<p> </p><button> </button>";
const $walks = "D l D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D l D ;<p> </p><button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let uid = input.id;
	let n = 0;
	_html(`<p>${_text_resume($scope0_id, "#text/0", uid + "-" + $global$1.x)}</p><button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_fill_global_subscribe("__tests__/template.marko_0_uid#6_$global_x#6", $scope0_id, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", uid, 1);
	_scope($scope0_id, {
		uid,
		n
	}, "__tests__/template.marko", 0, {
		uid: "1:6",
		n: "3:6"
	});
}, 1);

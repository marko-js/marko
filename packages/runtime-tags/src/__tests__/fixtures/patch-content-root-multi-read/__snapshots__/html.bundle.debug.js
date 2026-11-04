// template.marko
const $template = "<main><!><p> </p><button>+</button></main>";
const $walks = "D%bD l l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%bD l ;<main><!><p> </p><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`<p>${_text_mark($scope0_id, "#text/1", input.content + ":" + count)}</p><button>+</button>${_el_mark($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_content#5_count#6/setup", $fg__input_content && "input_content");
	_scope($scope0_id, {
		input_content: input.content,
		count
	}, "__tests__/template.marko", 0, {
		input_content: ["input.content"],
		count: "1:6"
	}) || $fg__input_content && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 0));
}, 1);

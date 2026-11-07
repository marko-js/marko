// template.marko
const $template = "<main><!><em> </em><button id=c>+</button></main>";
const $walks = "D%bD l l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%bD l ;<main><!><em> </em><button id=c>+</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;D l ;<p> </p><button id=n>n</button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<p>${_text_mark($scope1_id, "#text/0", input.title + "@" + n)}</p><button id=n>n</button>${_el_mark($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_render($scope1_id, "__tests__/template.marko_1_input_title#0:6_n#2/setup", _filled_guard($scope0_reason, 1) && ">input_title");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_n#2/fill", n, 1);
			_scope($scope1_id, {
				n,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "3:4", { n: "4:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<em>${_text_mark($scope0_id, "#text/1", count)}</em><button id=c>+</button>${_el_mark($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_title#0:6/setup", "input_title");
	_scope($scope0_id, {
		input_title: input.title,
		count
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) || $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 1));
}, 1);

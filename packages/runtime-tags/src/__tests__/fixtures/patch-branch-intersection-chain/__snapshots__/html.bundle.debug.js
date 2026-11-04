// template.marko
const $template = "<main><div></div><span> </span><button>+</button></main>";
const $walks = "D bD l l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D bD l ;<main><div></div><span> </span><button>+</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_count#0:7/setup;Db%;<p>A <!></p>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_count#0:7/setup;Db%;<p>B <!></p>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell __tests__/template.marko_3_count#0:7/setup;Db%;<p>None <!></p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_kind = _write_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 1), $cg__input_kind = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><div>");
	_if(() => {
		if (input.kind === "a") {
			const $scope1_id = _scope_id();
			_html(`<p>A ${_text_mark($scope1_id, "#text/0", input.title + " #" + count, 2)}</p>`);
			_patch_render($scope1_id, "__tests__/template.marko_1_input_title#0:6_count#0:7/setup", _filled_guard($scope0_reason, 1) && ">input_title");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:6");
			return 0;
		} else if (input.kind === "b") {
			const $scope2_id = _scope_id();
			_html(`<p>B ${_text_mark($scope2_id, "#text/0", input.title + " @" + count, 2)}</p>`);
			_patch_render($scope2_id, "__tests__/template.marko_2_input_title#0:6_count#0:7/setup", _filled_guard($scope0_reason, 1) && ">input_title");
			_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:6");
			return 1;
		} else {
			const $scope3_id = _scope_id();
			_html(`<p>None ${_text_mark($scope3_id, "#text/0", count, 2)}</p>`);
			_scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "10:6");
			return 2;
		}
	}, $scope0_id, "#div/0", 1, $wg__input_kind, 1, 0, 0, [
		"__tests__/template.marko_1*shell",
		"__tests__/template.marko_2*shell",
		"__tests__/template.marko_3*shell"
	], $scope0_reason, 0);
	_html(`</div>${_el_mark($scope0_id, "#div/0", $wg__input_kind)}<span>${_text_mark($scope0_id, "#text/1", input.title + " root #" + count)}</span><button>+</button>${_el_mark($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title && $cg__input_kind && _patch_render($scope0_id, "__tests__/template.marko_1_input_title#0:6/setup", "input_title");
	$fg__input_title && $cg__input_kind && _patch_render($scope0_id, "__tests__/template.marko_2_input_title#0:6/setup", "input_title");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_title#6_count#7/setup", $fg__input_title && "input_title");
	_scope($scope0_id, {
		input_title: input.title,
		count
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) || $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 1));
}, 1);

// template.marko
const $template = "<main><a> </a><!><button> </button></main>";
const $walks = "D D l%b D m";
const $setup = [[], ["__tests__/template.marko_0", "__tests__/template.marko_0_input_attrs#7"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0 __tests__/template.marko_0_input_attrs#7;D D l%b D ;<main><a> </a><!><button> </button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1_input_img#0:10; ;<img>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 2), $fg__input_img = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><a${_attrs({
		href: "/static",
		...input.attrs
	}, "#a/0", $scope0_id, "a", 0, $scope0_reason, 0)}>${_text_mark($scope0_id, "#text/1", input.label, 1, $scope0_reason, 1)}</a>${_el_mark($scope0_id, "#a/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<img${_attrs({
				alt: "hero",
				...input.img
			}, "#img/0", $scope1_id, "img", 0, $scope0_reason, 3)}>${_el_mark($scope1_id, "#img/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_input_img#0:10");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "__tests__/template.marko_1_input_img#0:10/setup");
			_scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4", { "EventAttributes:#img/0": ["...input.img", "5:24"] });
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 2);
	_html(`<button>${_text_mark($scope0_id, "#text/4", count)}</button>${_el_mark($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#7");
	$fg__input_img && _client_guard($scope0_reason, 2) && _patch_render($scope0_id, "__tests__/template.marko_1_input_img#0:10/setup", "input_img");
	_scope($scope0_id, {
		input_img: ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.img,
		count
	}, "__tests__/template.marko", 0, {
		input_img: ["input.img"],
		count: "1:6",
		"EventAttributes:#a/0": ["...input.attrs", "3:24"]
	}) || $fg__input_img && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_img", input.img, !_server_guard($scope0_reason, 3));
}, 1);

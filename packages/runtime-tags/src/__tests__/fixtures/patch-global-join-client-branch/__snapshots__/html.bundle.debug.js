// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_a = _write_guard($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let s = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", s)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (s % 2 === 1) {
			const $scope1_id = _scope_id();
			_html(`<p>t:${_text_mark($scope1_id, "#text/0", input.a + $global$1.g, ($scope0_page || $wg__input_a) * 2)}</p>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_fill_global_subscribe("__tests__/template.marko_1_$global_g#0:9/subscribe", $scope0_id, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_a && _patch_render($scope0_id, "__tests__/template.marko_1_input_a#0:5/setup", "input_a");
	_scope($scope0_id, {
		input_a: input.a,
		s
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		s: "1:6"
	}) || $fg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 0));
}, 1);

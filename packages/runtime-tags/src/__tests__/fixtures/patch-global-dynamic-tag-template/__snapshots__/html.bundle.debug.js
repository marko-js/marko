// tags/badge.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/badge.marko": "__tests__/tags/badge.marko;D ;<em> </em>" });
var badge_default = _template("__tests__/tags/badge.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_text_mark($scope0_id, "#text/0", $global$1.brand, 1, 4, 0)}</em>`);
	_fill_global_subscribe("__tests__/tags/badge.marko_0_$global_brand#4", $scope0_id);
	_scope($scope0_id, {}, "__tests__/tags/badge.marko", 0);
});

// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>t</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_plain = _write_guard($scope0_reason, 0), $fg__input_plain = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>t</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.plain ? "span" : badge_default, {}, 0, 0, 0, $wg__input_plain);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_plain#0:4/setup");
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_plain && _patch_render($scope0_id, "__tests__/template.marko_1_input_plain#0:4/setup", "input_plain");
	_scope($scope0_id, {
		input_plain: input.plain,
		open
	}, "__tests__/template.marko", 0, {
		input_plain: ["input.plain"],
		open: "2:6"
	}) || $fg__input_plain && _patch_write($scope0_id, "PatchMarkedWrite:input_plain", input.plain, !_server_guard($scope0_reason, 0));
}, 1);

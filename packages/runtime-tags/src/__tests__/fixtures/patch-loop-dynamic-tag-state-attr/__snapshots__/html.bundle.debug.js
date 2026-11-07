// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_count#0:5/setup;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $cg__input_items = _client_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id();
		const $for_content__i__closures = new Set();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:i", i, !_server_guard($scope0_reason, 0));
		_dynamic_tag($scope1_id, "#text/0", i % 2 ? "p" : "div", { "data-n": count }, 0, _content("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(_text_mark($scope2_id, "#text/0", i, $wg__input_items * 2));
			$cg__input_items && _patch_render($scope2_id, "__tests__/template.marko_2_i#1:2/subscribe");
			_subscribe($wi__input_items && $for_content__i__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"), $cg__input_items && "__tests__/template.marko_2_i#1:2/subscribe", $wg__input_items);
		}, $scope1_id));
		_filled_guard($scope0_reason, 0) && _patch_subscribers($scope1_id, "__tests__/template.marko_1_i#2/subscribers", "i");
		_patch_render($scope1_id, "__tests__/template.marko_1_count#0:5_i#2/setup", _filled_guard($scope0_reason, 0) && "i");
		_scope($scope1_id, {
			i,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:i/7": $wi__input_items && $for_content__i__closures
		}, "__tests__/template.marko", "2:2", { i: "2:6" });
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);

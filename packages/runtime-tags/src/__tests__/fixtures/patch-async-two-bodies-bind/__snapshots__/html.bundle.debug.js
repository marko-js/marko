// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2_attrs#6; D ;<button> </button>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko_0_#text#0/await": "__tests__/template.marko_0_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_0_#text#1/await": "__tests__/template.marko_0_#text#1/await !__tests__/template.marko_2_attrs#6; D ;<button> </button>",
	"__tests__/template.marko": "__tests__/template.marko;D%b%;<main><!><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_second = _client_guard($scope0_reason, 1), $sg__input_second = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_await($scope0_id, "#text/0", input.first, (first) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "#text/0", first, 1, $scope0_reason, 0)}</em>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "2:4");
	}, 1, "__tests__/template.marko_1*content", _unfilled_if($scope0_reason, 0) && 2, 1);
	_await($scope0_id, "#text/1", input.second, (second) => {
		const $scope2_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_write($scope2_id, "PatchMarkedWrite:second", second, !$sg__input_second);
		const handler = _bind_resume((event) => event.target.dataset.seen = second, "__tests__/template.marko_2/handler", $scope2_id);
		const attrs = {
			title: second,
			onClick: handler
		};
		_html(`<button${_attrs(attrs, "#button/0", $scope2_id, "button", 0, $scope0_reason, 1)}>${_text_mark($scope2_id, "#text/1", second, 1, $scope0_reason, 1)}</button>${_el_mark($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2_attrs#6", 1, _filled_guard($scope0_reason, 1), "second");
		$cg__input_second && _patch_write($scope2_id, "PatchWrite:handler", handler, 1);
		$cg__input_second && _patch_render($scope2_id, "__tests__/template.marko_2_second#3_handler#4/setup");
		_scope($scope2_id, {
			second,
			handler: _unfilled_if($scope0_reason, 1) && handler
		}, "__tests__/template.marko", "3:4", {
			second: "3:10",
			handler: "4:12",
			"EventAttributes:#button/0": ["...attrs", "6:16"]
		});
	}, 1, "__tests__/template.marko_2*content", _unfilled_if($scope0_reason, 1) && 2, 1);
	_html("</main>");
}, 1);

// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content; D ;<button> </button>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko_0_#text#0/await": "__tests__/template.marko_0_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_0_#text#1/await": "__tests__/template.marko_0_#text#1/await; D ;<button> </button>",
	"__tests__/template.marko": "__tests__/template.marko;D%b%;<main><!><!></main>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_await($scope0_id, "#text/0", input.first, (first) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "#text/0", first, void 0, $scope0_reason, 0)}</em>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "2:4");
	}, 1, "__tests__/template.marko_1*content", 1);
	_await($scope0_id, "#text/1", input.second, (second) => {
		const $scope2_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_write($scope2_id, "second", second);
		const handler = _resume((event) => event.target.dataset.seen = second, "__tests__/template.marko_2/handler", $scope2_id);
		_html(`<button${_patch_attrs({
			title: second,
			onClick: handler
		}, "#button/0", $scope2_id, "button", void 0, $scope0_reason, 1)}>${_patch_text($scope2_id, "#text/1", second, void 0, $scope0_reason, 1)}</button>${_el_resume($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2_second#3_handler#4");
		_scope($scope2_id, {
			second,
			handler: _source_if($scope0_reason, 1) && handler
		}, "__tests__/template.marko", "3:4", {
			second: "3:10",
			handler: "4:12",
			"EventAttributes:#button/0": ["...{ title: second, onClick: handler }", "5:16"]
		});
	}, 1, "__tests__/template.marko_2*content", 1);
	_html("</main>");
}, 1, 0);

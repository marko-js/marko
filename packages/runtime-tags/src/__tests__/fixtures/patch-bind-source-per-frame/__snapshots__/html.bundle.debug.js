// template.marko
const $template = "<main><!><!><em> </em></main>";
const $walks = "D%b%bD m";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2_input_title#0:5_handler#0:9; ;<button>two</button>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !__tests__/template.marko_1_input_title#0:5_handler#0:9; ;<button>one</button>",
	"__tests__/template.marko_0_#text#0/await": "__tests__/template.marko_0_#text#0/await !__tests__/template.marko_1_input_title#0:5_handler#0:9; ;<button>one</button>",
	"__tests__/template.marko_0_#text#1/await": "__tests__/template.marko_0_#text#1/await !__tests__/template.marko_2_input_title#0:5_handler#0:9; ;<button>two</button>",
	"__tests__/template.marko": "__tests__/template.marko;D%b%bD ;<main><!><!><em> </em></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $handler2__closures = new Set();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
	let count = 0;
	const handler = _bind_resume((event) => event.target.dataset.seen = input.title, "__tests__/template.marko_0/handler", $scope0_id);
	_html("<main>");
	_await($scope0_id, "#text/0", input.one, () => {
		const $scope1_id = _scope_id();
		_html(`<button${_patch_attrs({
			id: "one",
			...{
				title: input.title,
				onClick: handler
			}
		}, "#button/0", $scope1_id, "button", void 0, $scope0_reason, 0)}>one</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_input_title#0:5_handler#0:9");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_title#0:5/subscribe");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_handler#0:9/subscribe");
		$cg__input_title && _patch_init($scope1_id, "__tests__/template.marko_1_input_title#0:5_handler#0:9/init");
		_subscribe(_unfilled_if($scope0_reason, 0) && $handler2__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, {}, "__tests__/template.marko", "4:4", { "EventAttributes:#button/0": ["...{ title: input.title, onClick: handler }", "5:25"] }), $cg__input_title && "__tests__/template.marko_1_input_title#0:5/subscribe"), $cg__input_title && "__tests__/template.marko_1_handler#0:9/subscribe");
	}, 1, "__tests__/template.marko_1*content", 1, 1);
	_await($scope0_id, "#text/1", input.two, () => {
		const $scope2_id = _scope_id();
		_html(`<button${_patch_attrs({
			id: "two",
			...{
				title: input.title,
				onClick: handler
			}
		}, "#button/0", $scope2_id, "button", void 0, $scope0_reason, 0)}>two</button>${_el_resume($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2_input_title#0:5_handler#0:9");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_input_title#0:5/subscribe");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_handler#0:9/subscribe");
		$cg__input_title && _patch_init($scope2_id, "__tests__/template.marko_2_input_title#0:5_handler#0:9/init");
		_subscribe(_unfilled_if($scope0_reason, 0) && $handler2__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, {
			"ClosureSignalIndex:input_title/10": $wi__input_title && 1,
			"ClosureSignalIndex:handler/11": $wi__input_title && 1
		}, "__tests__/template.marko", "7:4", { "EventAttributes:#button/0": ["...{ title: input.title, onClick: handler }", "8:25"] }), $cg__input_title && "__tests__/template.marko_2_input_title#0:5/subscribe"), $cg__input_title && "__tests__/template.marko_2_handler#0:9/subscribe");
	}, 1, "__tests__/template.marko_2*content", 1, 1);
	_html(`<em>${_text_resume($scope0_id, "#text/2", count, void 0, 0, 0)}</em></main>`);
	_scope($scope0_id, {
		input_title: input.title,
		"ClosureScopes:input_title/10": $wi__input_title && $input_title__closures,
		"ClosureScopes:handler/11": $wi__input_title && _unfilled_if($scope0_reason, 0) && $handler2__closures
	}, "__tests__/template.marko", 0, { input_title: ["input.title"] });
}, 1);

// template.marko
const $template = "<main><!><!><em> </em></main>";
const $walks = "D%b%bD m";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content; ;<button>two</button>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content; ;<button>one</button>",
	"__tests__/template.marko_0_#text#0/await": "__tests__/template.marko_0_#text#0/await; ;<button>one</button>",
	"__tests__/template.marko_0_#text#1/await": "__tests__/template.marko_0_#text#1/await; ;<button>two</button>",
	"__tests__/template.marko": "__tests__/template.marko;D%b%bD ;<main><!><!><em> </em></main>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $si__input_title = _source_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $handler2__closures = new Set();
	let count = 0;
	const handler = _resume((event) => event.target.dataset.seen = input.title, "__tests__/template.marko_0/handler", $scope0_id);
	_html("<main>");
	_await($scope0_id, "#text/0", input.one, () => {
		const $scope1_id = _scope_id();
		_html(`<button${_patch_attrs({
			id: "one",
			...{
				title: input.title,
				onClick: handler
			}
		}, "#button/0", $scope1_id, "button", void 0, $scope0_owned, 0)}>one</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_input_title#5_handler#9");
		_subscribe($si__input_title && $handler2__closures, _subscribe($si__input_title && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4", { "EventAttributes:#button/0": ["...{ title: input.title, onClick: handler }", "5:25"] })));
	}, 1, "__tests__/template.marko_0_#text#0/await", 1);
	_await($scope0_id, "#text/1", input.two, () => {
		const $scope2_id = _scope_id();
		_html(`<button${_patch_attrs({
			id: "two",
			...{
				title: input.title,
				onClick: handler
			}
		}, "#button/0", $scope2_id, "button", void 0, $scope0_owned, 0)}>two</button>${_el_resume($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2_input_title#5_handler#9");
		_subscribe($si__input_title && $handler2__closures, _subscribe($si__input_title && $input_title__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_title": 1,
			"ClosureSignalIndex:handler": 1
		}, "__tests__/template.marko", "7:4", { "EventAttributes:#button/0": ["...{ title: input.title, onClick: handler }", "8:25"] })));
	}, 1, "__tests__/template.marko_0_#text#1/await", 1);
	_html(`<em>${_patch_text($scope0_id, "#text/2", count)}</em></main>`);
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		handler,
		"ClosureScopes:input_title": $input_title__closures,
		"ClosureScopes:handler": $handler2__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		handler: "2:8"
	}) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "input_title", input.title);
}, 1, 0);

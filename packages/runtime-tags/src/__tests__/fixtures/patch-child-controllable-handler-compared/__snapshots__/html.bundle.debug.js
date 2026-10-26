// tags/counter/index.marko
const $template$1 = "<!><!><button class=toggle>t</button>";
const $walks$1 = "b%b b";
const $setup$1 = [[], ["__tests__/tags/counter/index.marko_0"]];
_shells({ "__tests__/tags/counter/index.marko": "__tests__/tags/counter/index.marko !__tests__/tags/counter/index.marko_0;b%b ;<!><!><button class=toggle>t</button>" });
var counter_default = _template("__tests__/tags/counter/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "#text/0", count, 2)}</span><button class=add>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/tags/counter/index.marko_1_input_onCount#0:4");
			_script($scope1_id, "__tests__/tags/counter/index.marko_1");
			$scope0_page && _scope($scope1_id, {
				count,
				"TagVariableChange:count": input.onCount || void 0
			}, "__tests__/tags/counter/index.marko", "2:2", {
				count: "3:8",
				"TagVariableChange:count": ["countChange", "3:8"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/counter/index.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter/index.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_onCount: input.onCount,
		open
	}, "__tests__/tags/counter/index.marko", 0, {
		input_onCount: ["input.onCount"],
		open: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/counter/index.marko_fill0", input.onCount, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<main><h1> </h1><p>Last <!></p><pre id=log></pre><!></main>";
const $walks = "E lDb%lb%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E lDb%lb%;<main><h1> </h1><p>Last <!></p><pre id=log></pre><!></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let last = 0;
	const onCount = _resume((next) => {
		last = next;
	}, "__tests__/template.marko_0/onCount", $scope0_id);
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1><p>Last ${_text_resume($scope0_id, "#text/1", last, 2)}</p><pre id=log></pre>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			counter_default({ onCount });
			$scope0_page && _scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "9:4");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { onCount: _unfilled_if($scope0_reason, 1) && onCount }, "__tests__/template.marko", 0, { onCount: "2:8" });
}, 1);

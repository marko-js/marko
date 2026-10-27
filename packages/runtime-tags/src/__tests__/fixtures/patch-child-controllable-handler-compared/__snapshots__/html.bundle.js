// tags/counter/index.marko
const $template = "<!><!><button class=toggle>t</button>";
const $walks = "b%b b";
const $setup = [[], ["b2"]];
_shells({ b: "b !b2;b%b ;<!><!><button class=toggle>t</button>" });
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "a", count, 2)}</span><button class=add>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "b0");
			_script($scope1_id, "b1");
			$scope0_page && _scope($scope1_id, {
				c: count,
				d: input.onCount || void 0
			});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b2");
	_patch_fill($scope0_id, "vb4", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.onCount,
		f: open
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb3", input.onCount, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a;E lDb%lb%;<main><h1> </h1><p>Last <!></p><pre id=log></pre><!></main>",
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let last = 0;
	const onCount = _resume((next) => {
		last = next;
	}, "a0", $scope0_id);
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1><p>Last ${_text_resume($scope0_id, "b", last, 2)}</p><pre id=log></pre>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "a", 0);
			counter_default({ onCount });
			_patch_child_end();
			$scope0_page && _scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a1"], $scope0_reason, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { i: _unfilled_if($scope0_reason, 1) && onCount });
}, 1);

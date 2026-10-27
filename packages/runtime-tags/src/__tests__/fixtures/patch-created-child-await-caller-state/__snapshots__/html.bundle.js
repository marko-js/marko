// tags/card.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b0: "b0;D ;<p> </p>",
	b1: "b1;D ;<p> </p>",
	b: "b;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "a", x, void 0, $scope0_reason, 0)}</p>`);
		$scope0_page && _scope($scope1_id, {});
	}, 1, "b0", 1);
});

// template.marko
_shells({
	a: "a !a2; b%;<button class=toggle>toggle</button><!><!>",
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([["a5"], []], ["a>", $setup], ["b>", $setup]))};${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)("b%c", "b%c")};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template, $template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _patch_child($scope1_id, "a", 0);
			card_default({ promise: Promise.resolve(n) });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope2 = _patch_child($scope1_id, "b", 1);
			card_default({ promise: input.p });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			$scope0_page && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_script($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.p,
		g: n
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.p, !_server_guard($scope0_reason, 1));
}, 1);

// tags/counter-box/index.marko
const $template = "<span> </span><button class=mode>b</button><button class=go>go</button>";
const $walks = "D l b b";
_shells({ b: "b b2!b1;D l b ;<span> </span><button class=mode>b</button><button class=go>go</button>" });
_client_return("b");
var counter_box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let mode = "a";
	_html(`<span>${_text_resume($scope0_id, "a", mode)}</span><button class=mode>b</button>${_el_resume($scope0_id, "b")}<button class=go>go</button>${_el_resume($scope0_id, "c")}`);
	const $return = mode;
	_script($scope0_id, "b0", 1, 1);
	_script($scope0_id, "b1");
	(_server_guard($scope0_reason, 0) || _server_guard($scope0_reason, 1)) && _patch_effect($scope0_id, "hb0", "f g");
	_patch_init($scope0_id, "b2", 1);
	const $valueChange = input.onA || void 0;
	_patch_value($scope0_id, "vb3", mode, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.onA,
		g: input.onB,
		h: mode,
		U: $valueChange
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wf", input.onA, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "wg", input.onB, !_server_guard($scope0_reason, 1)));
	return $return;
});

// template.marko
_shells({
	a: "a !;b%bD ;<!><!><p> </p>",
	a2: /*@__PURE__*/ (() => `a2 !a4;${/*@__PURE__*/ ((_w0) => `0${_w0}& b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<button class=set>set</button>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let last = "none";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(($scope0_page ? _mask_group($scope0_reason, 1) : 0) << 1 | ($scope0_page ? _mask_group($scope0_reason, 1) : 0) << 3);
			const $childScope = _patch_child($scope1_id, "a");
			counter_box_default({
				onA: _resume(function(v) {
					last = input.p + "a" + v;
				}, "a0", $scope1_id),
				onB: _resume(function(v) {
					last = input.p + "b" + v;
				}, "a1", $scope1_id)
			});
			_var($scope1_id, "b", $childScope, "a3");
			_html(`<button class=set>set</button>${_el_resume($scope1_id, "c")}`);
			_script($scope1_id, "a4");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "b", last)}</p>`);
	_patch_value($scope0_id, "va6", last, 1);
	$scope0_page ? _scope($scope0_id, { f: input.p }) : _filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 0) ? _patch_value($scope0_id, "va5", input.p, !_server_guard($scope0_reason, 1)) : _patch_write($scope0_id, "wf", input.p, !_server_guard($scope0_reason, 1)));
}, 1);

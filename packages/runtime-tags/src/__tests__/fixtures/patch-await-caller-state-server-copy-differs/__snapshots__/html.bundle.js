// tags/echo.marko
const $template$1 = "<span> </span>";
const $setup$2 = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var echo_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.value.length, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c1: `c1${_shell_marker([[], []], ["g>", $setup$2])};${/*@__PURE__*/ ((_w0) => ` D%c%c%c%l%b/${_w0}&`)("D l")};${/*@__PURE__*/ ((_w0) => `<p><!>:<!>:<!>:<!></p><!>${_w0}`)($template$1)}`,
	c2: `c2${_shell_marker([[], []], ["g>", $setup$2])};${((_w0) => ` D%c%c%c%l%b/${_w0}&`)("D l")};${((_w0) => `<p><!>:<!>:<!>:<!></p><!>${_w0}`)($template$1)}`,
	c: "c;b%;<!><!><!>",
	c0: "c0,<em>long</em>"
});
var show_await_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_promise = _updates_from($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 2), $ui__input_promise = _unfilled_if($scope0_reason, 1), $ui__input_promise__OR__input_label = _unfilled_if($scope0_reason, 0), $ui__input_label2 = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 2), $fg__input_promise = _filled_guard($scope0_reason, 1);
		$fg__input_promise && $ui__input_label && _patch_write($scope1_id, "xi", x, !_server_guard($scope0_reason, 1));
		const upper = x.toUpperCase();
		_html(`<p${_attr("title", x, $scope1_id, "a", $scope0_reason, 1)}>${_text_mark($scope1_id, "b", input.label, 1, $scope0_reason, 2)}:${_text_mark($scope1_id, "c", x, 2, $scope0_reason, 1)}:${_text_mark($scope1_id, "d", upper, 2, $scope0_reason, 1)}:${_text_mark($scope1_id, "e", input.label + x, 2, $scope0_reason, 0)}</p>${_el_mark($scope1_id, "a", $uf__input_promise)}`);
		_if(() => {
			if (x.length > 6) {
				const $scope2_id = _scope_id();
				_html("<em>long</em>");
				_write_if($scope0_reason, 1) && _scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "f", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["c0"], $scope0_reason, 1);
		_set_scope_reason($uf__input_promise << 1);
		const $childScope = _peek_scope_id($scope1_id, "g", 0);
		echo_default({ value: x });
		_patch_child_end();
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "c3", $cg__input_label);
		_patch_render($scope1_id, "c4", ((_filled_guard($scope0_reason, 2) ? " >e" : "") + ($fg__input_promise ? " i" : "")).slice(1), $scope0_reason, 0);
		_subscribe($ui__input_label && $input_label__closures, _scope($scope1_id, {
			i: ($ui__input_label || _unfilled_if($scope0_reason, 0)) && x,
			g: _existing_scope($childScope)
		}), $cg__input_label && "c3");
	}, 1, "c1", $ui__input_promise, 1);
	_scope($scope0_id, {
		e: ($ui__input_promise || $ui__input_promise__OR__input_label || $ui__input_label2) && input.label,
		f: _write_if($scope0_reason, 2) && ($ui__input_label2 || $ui__input_promise__OR__input_label) && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && $ui__input_promise && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(14 | _updates_from($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	show_await_default({
		promise: p,
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);

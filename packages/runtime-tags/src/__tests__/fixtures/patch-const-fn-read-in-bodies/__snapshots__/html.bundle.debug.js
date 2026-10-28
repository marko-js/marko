// tags/counter.marko
const $template$1 = "<button class=inc> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/counter.marko_0"]];
_shells({ "__tests__/tags/counter.marko": "__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D ;<button class=inc> </button>" });
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter.marko_fill0", n, 1);
	_scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!><!><!>${_w0}${_w1}`)($Show_content__template, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b%b%b/${_w0}&/${_w1}&`)($Show_content__walks, $walks$1);
const $setup = _shell_setup([[], []], ["#childScope/3>", $setup$1]);
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D%b%;<b><!><!></b>",
	"__tests__/template.marko_0_#text#1/await": "__tests__/template.marko_0_#text#1/await;D%b%;<b><!><!></b>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b%b%b/${_w0}&/${_w1}&`)($Show_content__walks, $walks$1)};${((_w0, _w1) => `<!><!><!>${_w0}${_w1}`)($Show_content__template, $template$1)}`)(),
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D l%;<span> </span><!><!>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;D ;<em> </em>",
	"__tests__/template.marko_5*shell": "__tests__/template.marko_5*shell;D ;<i> </i>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_x = _client_guard($scope0_reason, 4), $cg__input_a = _client_guard($scope0_reason, 2), $wg__input_x = _write_guard($scope0_reason, 4), $wi__input_x = _write_if($scope0_reason, 4), $cg__input_items = _client_guard($scope0_reason, 3), $sg__input_a = _server_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $f2__closures = new Set();
	const $input_x__closures = new Set();
	_filled_guard($scope0_reason, 2) && ($cg__input_items ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/unpatched", input.a) : (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !$sg__input_a));
	const f = _bind_resume(function() {
		return input.a;
	}, "__tests__/template.marko_0/f", $scope0_id);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 3) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:item", item, !_server_guard($scope0_reason, 3));
		const v = input.a + item;
		_filled_guard($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:v", v, !_server_guard($scope0_reason, 0));
		const g = _bind_resume(function() {
			return v;
		}, "__tests__/template.marko_1/g", $scope1_id);
		_html(`<span>${_text_resume($scope1_id, "#text/0", f(), 1, $scope0_reason, 2)}</span>`);
		_if(() => {
			if (input.x) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "#text/0", g(), 1, $scope0_reason, 0)}</em>`);
				_client_guard($scope0_reason, 0) && _patch_init($scope4_id, "__tests__/template.marko_4_g#1:6/init");
				_scope($scope4_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, $wg__input_x, 1, 0, 0, ["__tests__/template.marko_4*shell"], $scope0_reason, 4);
		$cg__input_x && _patch_write($scope1_id, "PatchWrite:g", g, 1);
		$cg__input_x && _patch_init($scope1_id, "__tests__/template.marko_1_input_x#0:8/init");
		$cg__input_a && _patch_init($scope1_id, "__tests__/template.marko_1_f#0:10/init");
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 3)) && _patch_join_init($scope1_id, "__tests__/template.marko_1_input_a#0:6_item#3/init", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">input_a", _filled_guard($scope0_reason, 3) && "item");
		_scope($scope1_id, {
			item: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && item,
			v: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && v,
			g: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && g,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", {
			item: "2:6",
			v: "3:10",
			g: "4:10"
		});
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 3);
	_await($scope0_id, "#text/1", input.value, (v) => {
		const $scope3_id = _scope_id();
		_html(`<b>${_text_resume($scope3_id, "#text/0", v, 1, $scope0_reason, 5)}${_text_resume($scope3_id, "#text/1", f(), 2, $scope0_reason, 2)}</b>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope3_id, $cg__input_a ? "__tests__/template.marko_3_f#0:10/init" : "__tests__/template.marko_3_f#0:10/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $f2__closures, _scope($scope3_id, {}, "__tests__/template.marko", "8:2"), $cg__input_a && "__tests__/template.marko_3_f#0:10/subscribe");
	}, 1, "__tests__/template.marko_3*content", _unfilled_if($scope0_reason, 5), 1);
	const Show = { content: _content("__tests__/template.marko_2*content", ({ v }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__v = _server_guard($scope2_reason, 0);
		_filled_guard($scope2_reason, 0) && _unfilled_if($scope2_reason, 0) && _patch_write($scope2_id, "PatchMarkedWrite:v", v, !$sg__v);
		const h = _bind_resume(function() {
			return v;
		}, "__tests__/template.marko_2/h", $scope2_id);
		_if(() => {
			if (input.x) {
				const $scope5_id = _scope_id();
				_html(`<i>${_text_resume($scope5_id, "#text/0", h(), 1, $scope2_reason, 0)}</i>`);
				_client_guard($scope2_reason, 0) && _patch_init($scope5_id, "__tests__/template.marko_5_h#2:4/init");
				_scope($scope5_id, { _: _write_if($scope2_reason, 0) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "11:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__input_x, 1, 0, 0, ["__tests__/template.marko_5*shell"], $scope0_reason, 4);
		$wi__input_x && _subscribe(_unfilled_if($scope0_reason, 4) && $input_x__closures, _scope($scope2_id, {
			v: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope2_reason, 0)) && v,
			h: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope2_reason, 0)) && h,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "9:2", {
			v: "9:16",
			h: "10:10"
		}), $cg__input_x && "__tests__/template.marko_2_input_x#0:8/subscribe", $wg__input_x) || _filled_guard($scope2_reason, 0) && $cg__input_x && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill3", h, !$sg__v);
		$wg__input_x || $wi__input_x && _resume_branch($scope2_id);
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/2", 0);
	Show.content({ v: input.a });
	_patch_child_end();
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/3", 1);
	counter_default({});
	_patch_child_end();
	_scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.a,
		input_x: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.x,
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2)) && f,
		"ClosureScopes:f/13": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $f2__closures,
		"ClosureScopes:input_x/12": $wi__input_x && $input_x__closures,
		"#childScope/2": _existing_scope($childScope),
		"#childScope/3": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_x: ["input.x"],
		f: "1:8"
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_items && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.x, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 2) && $cg__input_items && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", f, !$sg__input_a));
}, 1);

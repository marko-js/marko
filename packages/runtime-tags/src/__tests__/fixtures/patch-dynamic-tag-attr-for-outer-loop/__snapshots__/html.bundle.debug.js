// tags/list.marko
const $template$2 = "<ul></ul>";
const $walks$2 = " b";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/list.marko": "__tests__/tags/list.marko; ;<ul></ul>",
	"__tests__/tags/list.marko_1*shell": "__tests__/tags/list.marko_1*shell;D%;<li><!></li>"
});
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "#text/0", it, {}, 2, 0, 0, $wg__input_item, $scope0_reason, 0);
		_html("</li>");
		_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/list.marko", "1:6");
	}, 0, $scope0_id, "#ul/0", 1, 1, 1, 0, 0, "__tests__/tags/list.marko_1*shell", $scope0_reason, 0);
	_html(`</ul>${_el_mark($scope0_id, "#ul/0")}`);
	_scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// tags/list2.marko
const $template$1 = "<ol></ol>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/list2.marko": "__tests__/tags/list2.marko; ;<ol></ol>",
	"__tests__/tags/list2.marko_1*shell": "__tests__/tags/list2.marko_1*shell;D%;<li><!></li>"
});
var list2_default = _template("__tests__/tags/list2.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ol>");
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "#text/0", it, {}, 2, 0, 0, $wg__input_item, $scope0_reason, 0);
		_html("</li>");
		_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/list2.marko", "1:6");
	}, 0, $scope0_id, "#ol/0", 1, 1, 1, 0, 0, "__tests__/tags/list2.marko_1*shell", $scope0_reason, 0);
	_html(`</ol>${_el_mark($scope0_id, "#ol/0")}`);
	_scope($scope0_id, {}, "__tests__/tags/list2.marko", 0);
});

// template.marko
const $template = "<button class=inc> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button class=inc> </button><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_bs = _write_guard($scope0_reason, 2), $wi__input_as__OR__input_on__OR__input_bs__OR__input_note = _write_if($scope0_reason, 4), $sg__input_as = _server_guard($scope0_reason, 5), $fg__input_on = _filled_guard($scope0_reason, 6), $cg__input_as = _client_guard($scope0_reason, 5), $fg__input_bs = _filled_guard($scope0_reason, 7), $fg__input_note = _filled_guard($scope0_reason, 8);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	let n = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_for_of(input.as, (a) => {
		const $scope1_id = _scope_id();
		const $for_content__a__closures = new Set();
		_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 2) && _patch_write($scope1_id, "PatchMarkedWrite:a", a, !$sg__input_as);
		let $item;
		forOf(input.bs, (b) => {
			$item = attrTags($item, { content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`${_text_mark($scope2_id, "#text/0", a, 2, $scope0_reason, 5)}:${_text_mark($scope2_id, "#text/1", b, 2, 4, 0)}:${_text_mark($scope2_id, "#text/2", input.note, 2, $scope0_reason, 8)}`);
				_unfilled_if($scope0_reason, 8) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_note#0:8/subscribe", _client_guard($scope0_reason, 8));
				_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_a#1:3/subscribe", $cg__input_as);
				_subscribe(_unfilled_if($scope0_reason, 5) && $for_content__a__closures, _subscribe(_unfilled_if($scope0_reason, 8) && $input_note__closures, _scope($scope2_id, { _: $wi__input_as__OR__input_on__OR__input_bs__OR__input_note && _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:8")));
			}, $scope1_id, () => [{ b }]) });
		});
		_dynamic_tag($scope1_id, "#text/0", input.on ? list_default : list2_default, { item: $item }, 1, 0, 0, $wg__input_on__OR__input_bs, $scope0_reason, 2);
		_filled_guard($scope0_reason, 5) && _patch_subscribers($scope1_id, "__tests__/template.marko_1_a#3/subscribers", "a");
		_patch_render($scope1_id, "__tests__/template.marko_1_input_on#0:6_input_bs#0:7/setup", [_filled_guard($scope0_reason, 6) && ">input_on", _filled_guard($scope0_reason, 7) && ">input_bs"], $scope0_reason, 2);
		$wi__input_as__OR__input_on__OR__input_bs__OR__input_note && _scope($scope1_id, {
			a: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 5)) && a,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:a/13": _write_if($scope0_reason, 5) && $for_content__a__closures
		}, "__tests__/template.marko", "5:2", { a: "5:6" });
	}, 0, $scope0_id, "#text/2", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 5);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_on && $cg__input_as && _patch_render($scope0_id, "__tests__/template.marko_1_input_on#0:6/setup", "input_on");
	$fg__input_bs && $cg__input_as && _patch_render($scope0_id, "__tests__/template.marko_1_input_bs#0:7/setup", "input_bs");
	$fg__input_note && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_note#8/subscribers", "input_note");
	_scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.on,
		input_bs: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.bs,
		input_note: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 8)) && input.note,
		n,
		"ClosureScopes:input_note/12": _write_if($scope0_reason, 8) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_bs: ["input.bs"],
		input_note: ["input.note"],
		n: "3:6"
	}) || ($fg__input_on && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on, !_server_guard($scope0_reason, 6)), $fg__input_bs && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_bs", input.bs, !_server_guard($scope0_reason, 7)), $fg__input_note && _client_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 8)));
}, 1);

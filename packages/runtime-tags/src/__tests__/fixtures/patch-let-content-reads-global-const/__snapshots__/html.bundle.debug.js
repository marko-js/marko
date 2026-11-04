// tags/card.marko
const $template$1 = "<button>clear</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button>clear</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function hash(s) {
	let h = 0;
	for (const c of s) h = h * 31 + c.charCodeAt(0) | 0;
	return h.toString(36);
}
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $h__closures = new Set();
	const $global$1 = $global();
	const h = hash($global$1.token);
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_mark($scope1_id, "#text/0", h, $scope1_page)}</p>`);
		_subscribe($h__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2"), "__tests__/template.marko_1_h#0:1/subscribe", $scope1_page);
		$scope1_page || _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_fill_global_subscribe("__tests__/template.marko_0_$global_token#4", $scope0_id);
	_scope($scope0_id, {
		h,
		"ClosureScopes:h/2": $h__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { h: "6:8" }) || _patch_write($scope0_id, "PatchMarkedWrite:h", h) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_h#1/subscribers", "h");
}, 1);

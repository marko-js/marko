// card-a.marko
const $template$2 = "<div class=a> </div>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/card-a.marko": "__tests__/card-a.marko;D ;<div class=a> </div>" });
var card_a_default = _template("__tests__/card-a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=a>${_text_mark($scope0_id, "#text/0", input.user.name, 1, $scope0_reason, 0)}</div>`);
	_scope($scope0_id, {}, "__tests__/card-a.marko", 0);
});

// card-b.marko
const $template$1 = "<div class=b> </div>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/card-b.marko": "__tests__/card-b.marko;D ;<div class=b> </div>" });
var card_b_default = _template("__tests__/card-b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=b>${_text_mark($scope0_id, "#text/0", input.user.name, 1, $scope0_reason, 0)}</div>`);
	_scope($scope0_id, {}, "__tests__/card-b.marko", 0);
});

// template.marko
const $template = "<button class=inc> </button><!><!><!><!><!>";
const $walks = " D l%b%b%b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%b%b%b%;<button class=inc> </button><!><!><!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_which__OR__input_user = _unfilled_if($scope0_reason, 0), $ui__input_alt__OR__input_user = _unfilled_if($scope0_reason, 1), $ui__input_tag__OR__input_cls__OR__input_title = _unfilled_if($scope0_reason, 6), $ui__input_none__OR__input_hidden = _unfilled_if($scope0_reason, 5), $ui__input_user = _unfilled_if($scope0_reason, 8), $ui__input_which = _unfilled_if($scope0_reason, 7), $ui__input_user2 = _unfilled_if($scope0_reason, 10), $ui__input_alt = _unfilled_if($scope0_reason, 9), $ui__input_cls__OR__input_title = _unfilled_if($scope0_reason, 4), $ui__input_tag__OR__input_title = _unfilled_if($scope0_reason, 3), $ui__input_tag__OR__input_cls = _unfilled_if($scope0_reason, 2), $ui__input_hidden = _unfilled_if($scope0_reason, 15), $ui__input_none = _unfilled_if($scope0_reason, 14), $fg__input_which = _filled_guard($scope0_reason, 7), $fg__input_user = _filled_guard($scope0_reason, 8), $fg__input_tag = _filled_guard($scope0_reason, 11), $fg__input_cls = _filled_guard($scope0_reason, 12), $fg__input_title = _filled_guard($scope0_reason, 13), $fg__input_none = _filled_guard($scope0_reason, 14), $fg__input_hidden = _filled_guard($scope0_reason, 15), $fg__input_alt = _filled_guard($scope0_reason, 9), $fg__input_user2 = _filled_guard($scope0_reason, 10);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	const Row = { content: _content_resume("__tests__/template.marko_1*content", ({ user }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_mark($scope1_id, "#text/0", user.name, 1, 4, 0)}</p>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "6:2");
	}, $scope0_id) };
	const Alt = { content: _content_resume("__tests__/template.marko_2*content", ({ user }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<i>${_text_mark($scope2_id, "#text/0", user.name, 1, 4, 0)}</i>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "7:2");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/2", input.which ? card_a_default : card_b_default, { user: input.user }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_dynamic_tag($scope0_id, "#text/3", input.alt ? Alt : Row, { user: input.user2 }, 9, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_dynamic_tag($scope0_id, "#text/4", input.tag, {
		class: input.cls,
		title: input.title
	}, 17, 0, 0, _write_guard($scope0_reason, 6), $scope0_reason, 6, 0, 11);
	_dynamic_tag($scope0_id, "#text/5", input.none ? card_a_default : null, { user: input.hidden }, 25, 0, 0, _write_guard($scope0_reason, 5), $scope0_reason, 5);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_which#8_input_user#9/setup", [$fg__input_which && "input_which", $fg__input_user && "input_user"], $scope0_reason, 0);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_tag#13_input_cls#14_input_title#15/setup", [
		$fg__input_tag && "input_tag",
		$fg__input_cls && "input_cls",
		$fg__input_title && "input_title"
	], $scope0_reason, 6);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_none#17_input_hidden#18/setup", [$fg__input_none && "input_none", $fg__input_hidden && "input_hidden"], $scope0_reason, 5);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_alt#11_input_user2#12_Row#21_Alt#22/setup", [$fg__input_alt && "input_alt", $fg__input_user2 && "input_user2"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_which: ($ui__input_user || $ui__input_which__OR__input_user) && input.which,
		input_user: ($ui__input_which || $ui__input_which__OR__input_user) && input.user,
		input_alt: ($ui__input_user2 || $ui__input_alt__OR__input_user) && input.alt,
		input_user2: ($ui__input_alt || $ui__input_alt__OR__input_user) && input.user2,
		input_tag: ($ui__input_cls__OR__input_title || $ui__input_tag__OR__input_cls__OR__input_title) && input.tag,
		input_cls: ($ui__input_tag__OR__input_title || $ui__input_tag__OR__input_cls__OR__input_title) && input.cls,
		input_title: ($ui__input_tag__OR__input_cls || $ui__input_tag__OR__input_cls__OR__input_title) && input.title,
		input_none: ($ui__input_hidden || $ui__input_none__OR__input_hidden) && input.none,
		input_hidden: ($ui__input_none || $ui__input_none__OR__input_hidden) && input.hidden,
		n,
		Row: $ui__input_alt__OR__input_user && Row,
		Alt: $ui__input_alt__OR__input_user && Alt
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_user: ["input.user"],
		input_alt: ["input.alt"],
		input_user2: ["input.user2"],
		input_tag: ["input.tag"],
		input_cls: ["input.cls"],
		input_title: ["input.title"],
		input_none: ["input.none"],
		input_hidden: ["input.hidden"],
		n: "4:6",
		Row: "6:9",
		Alt: "7:9"
	}) || ($fg__input_which && $ui__input_user && _patch_write($scope0_id, "PatchMarkedWrite:input_which", input.which, !_server_guard($scope0_reason, 7)), $fg__input_user && $ui__input_which && _patch_write($scope0_id, "PatchMarkedWrite:input_user", input.user, !_server_guard($scope0_reason, 8)), $fg__input_alt && $ui__input_user2 && _patch_write($scope0_id, "PatchMarkedWrite:input_alt", input.alt, !_server_guard($scope0_reason, 9)), $fg__input_user2 && $ui__input_alt && _patch_write($scope0_id, "PatchMarkedWrite:input_user2", input.user2, !_server_guard($scope0_reason, 10)), $fg__input_tag && $ui__input_cls__OR__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 11)), $fg__input_cls && $ui__input_tag__OR__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_cls", input.cls, !_server_guard($scope0_reason, 12)), $fg__input_title && $ui__input_tag__OR__input_cls && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 13)), $fg__input_none && $ui__input_hidden && _patch_write($scope0_id, "PatchMarkedWrite:input_none", input.none, !_server_guard($scope0_reason, 14)), $fg__input_hidden && $ui__input_none && _patch_write($scope0_id, "PatchMarkedWrite:input_hidden", input.hidden, !_server_guard($scope0_reason, 15)));
}, 1);

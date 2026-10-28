// tags/labeled.marko
const $template$2 = "<label> </label><input>";
const $walks$2 = " D l b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/labeled.marko": "__tests__/tags/labeled.marko; D l ;<label> </label><input>" });
var labeled_default = _template("__tests__/tags/labeled.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "PatchAttr:#label/0 for", 0, 0)}>${_text_resume($scope0_id, "#text/1", input.name, 1, $scope0_reason, 0)}</label>${_el_resume($scope0_id, "#label/0", 0)}<input${_attr("id", uid, $scope0_id, "PatchAttr:#input/2 id", 0, 0)}>${_el_resume($scope0_id, "#input/2", 0)}`);
	_scope($scope0_id, {}, "__tests__/tags/labeled.marko", 0);
});

// tags/plain.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/plain.marko": "__tests__/tags/plain.marko;D ;<span> </span>" });
var plain_default = _template("__tests__/tags/plain.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.name, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {}, "__tests__/tags/plain.marko", 0);
});

// template.marko
const $template = "<!><!><!><!><!>";
const $walks = "b%b%b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content; D l ;<label> </label><input>",
	"~__tests__/template.marko_5*content": "~__tests__/template.marko_5*content; D l ;<label> </label><input>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content; D l ;<label> </label><input>",
	"~__tests__/template.marko_3*content": "~__tests__/template.marko_3*content; D l ;<label> </label><input>",
	"__tests__/template.marko": "__tests__/template.marko;b%b%b%;<!><!><!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $cg__input_items = _client_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.on ? labeled_default : plain_default, { name: item.key }, 1, 0, 0, $wg__input_items, $scope0_reason, 0);
		$cg__input_items && _patch_init($scope1_id, "__tests__/template.marko_1_item_on#3_item_key#4/init");
		$wi__input_items && _scope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const $for_content2__item_key__closures = new Set();
		_dynamic_tag($scope2_id, "#text/0", item.on ? "p" : "div", {}, 10, _content("__tests__/template.marko_3*content", () => {
			const $scope3_id = _scope_id();
			const $scope3_reason = _scope_reason();
			const bodyId = _id("bodyId");
			_html(`<label${_attr("for", bodyId, $scope3_id, "PatchAttr:#label/0 for", 0, 0)}>${_text_resume($scope3_id, "#text/1", item.key, 1, $scope0_reason, 0)}</label>${_el_resume($scope3_id, "#label/0", 0)}<input${_attr("id", bodyId, $scope3_id, "PatchAttr:#input/2 id", 0, 0)}>${_el_resume($scope3_id, "#input/2", 0)}`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, $cg__input_items ? "__tests__/template.marko_3_item_key#2:4/init" : "__tests__/template.marko_3_item_key#2:4/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 0) && $for_content2__item_key__closures, _scope($scope3_id, { _: $wi__input_items && _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:6"));
		}, $scope2_id, 1), 0, $wg__input_items, $scope0_reason, 0);
		$wi__input_items && _scope($scope2_id, { "ClosureScopes:item_key/5": $for_content2__item_key__closures }, "__tests__/template.marko", "4:2");
	}, 0, $scope0_id, "#text/1", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", $scope0_reason, 0);
	_for_of(input.items, (item) => {
		const $scope4_id = _scope_id();
		const $for_content3__item_key__closures = new Set();
		_dynamic_tag($scope4_id, "#text/0", item.on ? plain_default : null, { name: item.key }, 17, _content("__tests__/template.marko_5*content", () => {
			const $scope5_id = _scope_id();
			const $scope5_reason = _scope_reason();
			const nullId = _id("nullId");
			_html(`<label${_attr("for", nullId, $scope5_id, "PatchAttr:#label/0 for", 0, 0)}>${_text_resume($scope5_id, "#text/1", item.key, 1, $scope0_reason, 0)}</label>${_el_resume($scope5_id, "#label/0", 0)}<input${_attr("id", nullId, $scope5_id, "PatchAttr:#input/2 id", 0, 0)}>${_el_resume($scope5_id, "#input/2", 0)}`);
			$cg__input_items && _patch_init($scope5_id, "__tests__/template.marko_5_item_key#4:4/init");
			_subscribe(_unfilled_if($scope0_reason, 0) && $for_content3__item_key__closures, _scope($scope5_id, { _: $wi__input_items && _scope_with_id($scope4_id) }, "__tests__/template.marko", "8:6"));
		}, $scope4_id, 1), 0, $wg__input_items, $scope0_reason, 0);
		$cg__input_items && _patch_init($scope4_id, "__tests__/template.marko_4_item_on#3_item_key#4/init");
		$wi__input_items && _scope($scope4_id, { "ClosureScopes:item_key/6": $for_content3__item_key__closures }, "__tests__/template.marko", "7:2");
	}, 0, $scope0_id, "#text/2", 1, 1, 1, 0, 0, "__tests__/template.marko_4*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);

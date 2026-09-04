// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b1b D l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b1b D ;<!><!><button> </button>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	const $tag = input.tag;
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, "__tests__/template.marko_0_el#8/var", 0, $scope0_owned, 0);
	const $inputtag_scope = _peek_scope_id();
	let el = _dynamic_tag($scope0_id, "#text/0", $tag, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "#scopeOffset/1", $inputtag_scope, "__tests__/template.marko_0_el#8/var");
	_html(`<button>${_text_resume($scope0_id, "#text/3", clicks)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		clicks,
		el
	}, "__tests__/template.marko", 0, {
		clicks: "1:6",
		el: "2:15"
	}) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "el", el);
}, 1, 1);

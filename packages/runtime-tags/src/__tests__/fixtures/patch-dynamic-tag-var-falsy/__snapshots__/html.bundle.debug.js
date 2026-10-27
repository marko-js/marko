// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b1b D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b1b D ;<!><!><button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let clicks = 0;
	const $inputtag_scope = _peek_scope_id();
	let el = _dynamic_tag($scope0_id, "#text/0", input.tag, {}, void 0, void 0, void 0, "__tests__/template.marko_0_el#8/var", 2, $scope0_reason, 0);
	_var($scope0_id, "#scopeOffset/1", $inputtag_scope, "__tests__/template.marko_0_el#8/var");
	_html(`<button>${_text_resume($scope0_id, "#text/3", clicks)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		clicks,
		el
	}, "__tests__/template.marko", 0, {
		clicks: "1:6",
		el: "2:15"
	});
}, 1);

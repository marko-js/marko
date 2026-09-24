// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $el_getter = _hoist($scope0_id, "__tests__/template.marko_0_#input#0/hoist");
	const $tag_content__subscribers = new Set();
	let tag = input.tag;
	let result = "";
	_dynamic_tag($scope0_id, "#text/0", tag, {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<input>${_el_resume($scope1_id, "#input/0")}`);
		_subscribe($tag_content__subscribers, _scope($scope1_id, {}, "__tests__/template.marko", "3:4"));
	}, $scope0_id));
	_html(`<button class=check></button>${_el_resume($scope0_id, "#button/1")}<button class=toggle></button>${_el_resume($scope0_id, "#button/2")}<output>${_text_resume($scope0_id, "#text/3", result)}</output>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		tag,
		"ClosureScopes:1": $tag_content__subscribers
	}, "__tests__/template.marko", 0, { tag: "1:6" });
}, 1);

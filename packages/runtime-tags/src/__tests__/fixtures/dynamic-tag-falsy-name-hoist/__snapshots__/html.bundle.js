// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "a0");
	const $tag_content__subscribers = /* @__PURE__ */ new Set();
	let tag = input.tag;
	let result = "";
	_dynamic_tag($scope0_id, "a", tag, {}, _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<input>${_el_resume($scope1_id, "a")}`);
		_subscribe($tag_content__subscribers, _scope($scope1_id, {}));
	}, $scope0_id));
	_html(`<button class=check></button>${_el_resume($scope0_id, "b")}<button class=toggle></button>${_el_resume($scope0_id, "c")}<output>${_text_resume($scope0_id, "d", result)}</output>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		h: tag,
		B1: $tag_content__subscribers
	});
}, 1);

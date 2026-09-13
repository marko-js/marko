// template.marko
_shells({ a: "a;E b lE ;<html><head><title></title><meta name=description></head><body><main> </main></body></html>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<html><head><title>${_patch_text_content($scope0_id, "a", `${_to_text(input.title)} | Shop`, _escape, $scope0_reason, 0)}</title>${_el_resume($scope0_id, "a")}<meta name=description${_patch_attr($scope0_id, "b", "content", input.description, $scope0_reason, 1)}>${_el_resume($scope0_id, "b")}${_flush_head()}</head><body><main>${_patch_text($scope0_id, "c", input.body, void 0, $scope0_reason, 2)}</main>`), _trailers("</body></html>");
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);

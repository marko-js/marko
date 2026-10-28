// template.marko
_shells({ a: "a;E lE ;<html><head><title></title></head><body><main> </main></body></html>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<html><head><title>${_patch_text_content($scope0_id, "ma", `${_to_text(input.title)} & more <3`, _escape, $scope0_reason, 0)}</title>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}${_flush_head()}</head><body><main>${_text_resume($scope0_id, "b", input.body, 1, $scope0_reason, 1)}</main>`), _trailers("</body></html>");
	_scope($scope0_id, {});
}, 1);

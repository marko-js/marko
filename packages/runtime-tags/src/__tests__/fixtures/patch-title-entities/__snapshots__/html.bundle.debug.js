// template.marko
const $template = "<html><head><title></title></head><body><main> </main></body></html>";
const $walks = "E lE n";
_shells({ "__tests__/template.marko": "__tests__/template.marko;E lE ;<html><head><title></title></head><body><main> </main></body></html>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<html><head><title>${_patch_text_content($scope0_id, "#title/0", `${_to_text(input.title)} & more <3`, _escape, $scope0_reason, 0)}</title>${_el_resume($scope0_id, "#title/0")}${_flush_head()}</head><body><main>${_patch_text($scope0_id, "#text/1", input.body, void 0, $scope0_reason, 1)}</main>`), _trailers("</body></html>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);

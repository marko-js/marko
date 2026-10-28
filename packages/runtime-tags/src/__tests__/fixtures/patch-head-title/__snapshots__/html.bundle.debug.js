// template.marko
const $template = "<html><head><title></title><meta name=description></head><body><main> </main></body></html>";
const $walks = "E b lE n";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;E b lE ;<html><head><title></title><meta name=description></head><body><main> </main></body></html>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<html><head><title>${_patch_text_content($scope0_id, "PatchTextContent:#title/0", `${_to_text(input.title)} | Shop`, _escape, $scope0_reason, 0)}</title>${_el_resume($scope0_id, "#title/0", _mask_group($scope0_reason, 0))}<meta name=description${_attr("content", input.description, $scope0_id, "PatchAttr:#meta/1 content", $scope0_reason, 1)}>${_el_resume($scope0_id, "#meta/1", _mask_group($scope0_reason, 1))}${_flush_head()}</head><body><main>${_text_resume($scope0_id, "#text/2", input.body, void 0, $scope0_reason, 2)}</main>`), _trailers("</body></html>");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);

// template.marko
const $template = "<html><head><title></title><meta name=description></head><body><main> </main></body></html>";
const $walks = "E b lE n";
_shells({ "__tests__/template.marko": "__tests__/template.marko;E b lE ;<html><head><title></title><meta name=description></head><body><main> </main></body></html>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<html><head><title>${_patch_text_content($scope0_id, "#title/0", `${_to_text(input.title)} | Shop`, _escape, $scope0_owned, 0)}</title>${_el_resume($scope0_id, "#title/0")}<meta name=description${_patch_attr($scope0_id, "#meta/1", "content", input.description, $scope0_owned, 1)}>${_el_resume($scope0_id, "#meta/1")}${_flush_head()}</head><body><main>${_patch_text($scope0_id, "#text/2", input.body, void 0, $scope0_owned, 2)}</main>`), _trailers("</body></html>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);

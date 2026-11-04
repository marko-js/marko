// template.marko
_shells({ a: "a;E b lE ;<html><head><title></title><meta name=description></head><body><main> </main></body></html>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<html><head><title>${_escape(`${_to_text(input.title)} | Shop`, $scope0_id, "ma", $scope0_reason, 0)}</title>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 0))}<meta name=description${_attr("content", input.description, $scope0_id, "ab$content", $scope0_reason, 1)}>${_el_mark($scope0_id, "b", _updates_from($scope0_reason, 1))}${_flush_head()}</head><body><main>${_text_mark($scope0_id, "c", input.body, 1, $scope0_reason, 2)}</main>`), _trailers("</body></html>");
	_scope($scope0_id, {});
}, 1);

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a; ;<div></div>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Frag = { content: _content_resume("a0", (x) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", typeof x, 1, 4, 0)}</em>`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	_html("<div>");
	_attr_content("a", $scope0_id, input.show ? Frag : void 0, 0, 1, $scope0_reason, 0);
	_html(`</div>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 0))}`);
	_scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && Frag });
}, 1);

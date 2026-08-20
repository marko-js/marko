// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "x";
	_html(`<textarea>${_textarea_value("<p>hi & bye")}</textarea><textarea>${_textarea_value(`<p>${v}`)}</textarea><title>&lt;p&gt;hi &amp; bye</title><textarea>${_textarea_value("&lt;p&gt;hi")}</textarea>`);
}, 1);

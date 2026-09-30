// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>inc ${_text_resume($scope0_id, "b", n, 2)}</button>${_el_resume($scope0_id, "a")}<title>&amp; &#38; &#x26; &lt; ${_escape(input.a)} - ${_escape(n)}</title>${_el_resume($scope0_id, "c")}<title>&amp; &#38; &#x26; &lt; ${_escape(input.a)} - ${_escape(n)}</title>${_el_resume($scope0_id, "d")}<title>&amp; &#38; &#x26; &lt;</title>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: input.a,
		h: n
	});
}, 1);

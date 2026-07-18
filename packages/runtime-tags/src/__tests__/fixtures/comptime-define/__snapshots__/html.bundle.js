// template.marko
const tones = {
	neutral: "slate",
	warn: "amber"
};
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<h2>Releases</h2><span${_attr_class(`badge badge--${tones["neutral"]}`)}>Beta</span><span${_attr_class(`badge badge--${tones["warn"]}`)}>Deprecated</span>`);
}, 1);

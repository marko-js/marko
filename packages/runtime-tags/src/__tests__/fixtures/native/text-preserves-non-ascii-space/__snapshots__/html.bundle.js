// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div>indented text kept\xA0together</div><p>line\u2028sep\u2029para﻿bom</p>");
}, 1);

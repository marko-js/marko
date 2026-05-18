// template.marko
const staticVar = "static var";
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	console.log("identifier");
	console.log("tag var");
	console.log(staticVar);
}, 1);

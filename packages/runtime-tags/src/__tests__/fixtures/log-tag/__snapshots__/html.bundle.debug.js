// template.marko
const staticVar = "static var";
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	console.log("identifier");
	console.log("tag var");
	console.log(staticVar);
}, 1);

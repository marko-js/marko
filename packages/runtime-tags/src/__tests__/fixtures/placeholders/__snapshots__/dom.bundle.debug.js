// template.marko
const $template = "<!><span> <div></div></span><div><div>a</div><!>Hello Text &lt;a/><!><!><script><\/script><style></style></div>";
const $walks = "%bD lDb%c%b%b b l";
const $input_x = ($scope, input_x) => {
	_text($scope, "#text/0", input_x);
	_text($scope, "#text/1", input_x);
	_text($scope, "#text/2", input_x);
	_html($scope, "#text/3", input_x);
};
function $setup($scope) {
	_html($scope, "#text/4", "Hello HTML <span>hi</span>");
	_attr_nonce($scope, "#script/5");
	_text_content($scope, "#script/5", `
    ${_to_text("'Hello <b> <\/script>'")}
  `);
	_attr_nonce($scope, "#style/6");
	_text_content($scope, "#style/6", `
    ${_to_text(".test { content: 'Hello <b> </style>' }")}
  `);
}
const $input = ($scope, input) => $input_x($scope, input.x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

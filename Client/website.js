"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var LoginPage = function () {
    var _a = (0, react_1.useState)(''), email = _a[0], setEmail = _a[1];
    var _b = (0, react_1.useState)(''), password = _b[0], setPassword = _b[1];
    var handleLogin = function (e) {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };
    return style = {};
    {
        display: 'flex', justifyContent;
        'center', alignItems;
        'center', height;
        '100vh';
    }
};
 >
    onSubmit;
{
    handleLogin;
}
style = {};
{
    display: 'flex', flexDirection;
    'column', width;
    '300px';
}
 >
    Login < (/h2>);
Email: type;
"email";
value = { email: email };
onChange = {}(e);
setEmail(e.target.value);
required;
style = {};
{
    marginBottom: '10px', padding;
    '8px';
}
/>
    < (/label>);
Password: type;
"password";
value = { password: password };
onChange = {}(e);
setPassword(e.target.value);
required;
style = {};
{
    marginBottom: '10px', padding;
    '8px';
}
/>
    < /label>
    < button;
type = "submit";
style = {};
{
    padding: '10px', backgroundColor;
    '#007BFF', color;
    'white', border;
    'none', cursor;
    'pointer';
}
 >
    Login
    < /button>
    < /form>
    < /div>;
;
;
exports.default = LoginPage;

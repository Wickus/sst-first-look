"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 10:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "aws-sdk"
const external_aws_sdk_namespaceObject = require("aws-sdk");
var external_aws_sdk_default = /*#__PURE__*/__webpack_require__.n(external_aws_sdk_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/hello.ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const bucket = new (external_aws_sdk_default()).S3({
    region: process.env.REGION
});
function handler(req, res) {
    bucket.getObject({
        Bucket: "Uploads",
        Key: "test.html"
    }, (err, data)=>{
        if (err) {
            console.log({
                err
            });
            return;
        } else {
            console.log("success");
        }
    });
    res.status(200).json({
        name: "John Doe"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(10));
module.exports = __webpack_exports__;

})();
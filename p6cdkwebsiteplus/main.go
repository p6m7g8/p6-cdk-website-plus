// R53 -> CF -> S3
package p6cdkwebsiteplus

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterInterface(
		"p6-cdk-website-plus.IP6CDKWebsiteProps",
		reflect.TypeOf((*IP6CDKWebsiteProps)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "cloudfrontRecordName", GoGetter: "CloudfrontRecordName"},
			_jsii_.MemberProperty{JsiiProperty: "hostedZoneName", GoGetter: "HostedZoneName"},
			_jsii_.MemberProperty{JsiiProperty: "verifyEmail", GoGetter: "VerifyEmail"},
		},
		func() interface{} {
			return &jsiiProxy_IP6CDKWebsiteProps{}
		},
	)
	_jsii_.RegisterClass(
		"p6-cdk-website-plus.P6CDKWebsitePlus",
		reflect.TypeOf((*P6CDKWebsitePlus)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberMethod{JsiiMethod: "generatePhysicalName", GoMethod: "GeneratePhysicalName"},
			_jsii_.MemberMethod{JsiiMethod: "getResourceArnAttribute", GoMethod: "GetResourceArnAttribute"},
			_jsii_.MemberMethod{JsiiMethod: "getResourceNameAttribute", GoMethod: "GetResourceNameAttribute"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "physicalName", GoGetter: "PhysicalName"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_P6CDKWebsitePlus{}
			_jsii_.InitJsiiProxy(&j.Type__awscdkResource)
			return &j
		},
	)
}

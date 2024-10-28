package p6cdkwebsiteplus

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

type IP6CDKWebsiteProps interface {
	CloudfrontRecordName() *string
	SetCloudfrontRecordName(c *string)
	HostedZoneName() *string
	SetHostedZoneName(h *string)
	VerifyEmail() *string
	SetVerifyEmail(v *string)
}

// The jsii proxy for IP6CDKWebsiteProps
type jsiiProxy_IP6CDKWebsiteProps struct {
	_ byte // padding
}

func (j *jsiiProxy_IP6CDKWebsiteProps) CloudfrontRecordName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"cloudfrontRecordName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IP6CDKWebsiteProps)SetCloudfrontRecordName(val *string) {
	if err := j.validateSetCloudfrontRecordNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cloudfrontRecordName",
		val,
	)
}

func (j *jsiiProxy_IP6CDKWebsiteProps) HostedZoneName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"hostedZoneName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IP6CDKWebsiteProps)SetHostedZoneName(val *string) {
	if err := j.validateSetHostedZoneNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hostedZoneName",
		val,
	)
}

func (j *jsiiProxy_IP6CDKWebsiteProps) VerifyEmail() *string {
	var returns *string
	_jsii_.Get(
		j,
		"verifyEmail",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IP6CDKWebsiteProps)SetVerifyEmail(val *string) {
	if err := j.validateSetVerifyEmailParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"verifyEmail",
		val,
	)
}


//go:build !no_runtime_type_checking

package p6cdkwebsiteplus

import (
	"fmt"
)

func (j *jsiiProxy_IP6CDKWebsiteProps) validateSetCloudfrontRecordNameParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_IP6CDKWebsiteProps) validateSetHostedZoneNameParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_IP6CDKWebsiteProps) validateSetVerifyEmailParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}


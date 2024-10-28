# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### P6CDKWebsitePlus <a name="P6CDKWebsitePlus" id="p6-cdk-website-plus.P6CDKWebsitePlus"></a>

#### Initializers <a name="Initializers" id="p6-cdk-website-plus.P6CDKWebsitePlus.Initializer"></a>

```typescript
import { P6CDKWebsitePlus } from 'p6-cdk-website-plus'

new P6CDKWebsitePlus(scope: Construct, id: string, props: IP6CDKWebsiteProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#p6-cdk-website-plus.P6CDKWebsitePlus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#p6-cdk-website-plus.P6CDKWebsitePlus.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#p6-cdk-website-plus.P6CDKWebsitePlus.Initializer.parameter.props">props</a></code> | <code><a href="#p6-cdk-website-plus.IP6CDKWebsiteProps">IP6CDKWebsiteProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="p6-cdk-website-plus.P6CDKWebsitePlus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="p6-cdk-website-plus.P6CDKWebsitePlus.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="p6-cdk-website-plus.P6CDKWebsitePlus.Initializer.parameter.props"></a>

- *Type:* <a href="#p6-cdk-website-plus.IP6CDKWebsiteProps">IP6CDKWebsiteProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#p6-cdk-website-plus.P6CDKWebsitePlus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#p6-cdk-website-plus.P6CDKWebsitePlus.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="p6-cdk-website-plus.P6CDKWebsitePlus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="p6-cdk-website-plus.P6CDKWebsitePlus.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="p6-cdk-website-plus.P6CDKWebsitePlus.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#p6-cdk-website-plus.P6CDKWebsitePlus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#p6-cdk-website-plus.P6CDKWebsitePlus.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#p6-cdk-website-plus.P6CDKWebsitePlus.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="p6-cdk-website-plus.P6CDKWebsitePlus.isConstruct"></a>

```typescript
import { P6CDKWebsitePlus } from 'p6-cdk-website-plus'

P6CDKWebsitePlus.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="p6-cdk-website-plus.P6CDKWebsitePlus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="p6-cdk-website-plus.P6CDKWebsitePlus.isOwnedResource"></a>

```typescript
import { P6CDKWebsitePlus } from 'p6-cdk-website-plus'

P6CDKWebsitePlus.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="p6-cdk-website-plus.P6CDKWebsitePlus.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="p6-cdk-website-plus.P6CDKWebsitePlus.isResource"></a>

```typescript
import { P6CDKWebsitePlus } from 'p6-cdk-website-plus'

P6CDKWebsitePlus.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="p6-cdk-website-plus.P6CDKWebsitePlus.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#p6-cdk-website-plus.P6CDKWebsitePlus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#p6-cdk-website-plus.P6CDKWebsitePlus.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#p6-cdk-website-plus.P6CDKWebsitePlus.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="p6-cdk-website-plus.P6CDKWebsitePlus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="p6-cdk-website-plus.P6CDKWebsitePlus.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="p6-cdk-website-plus.P6CDKWebsitePlus.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IP6CDKWebsiteProps <a name="IP6CDKWebsiteProps" id="p6-cdk-website-plus.IP6CDKWebsiteProps"></a>

- *Implemented By:* <a href="#p6-cdk-website-plus.IP6CDKWebsiteProps">IP6CDKWebsiteProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#p6-cdk-website-plus.IP6CDKWebsiteProps.property.cloudfrontRecordName">cloudfrontRecordName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#p6-cdk-website-plus.IP6CDKWebsiteProps.property.hostedZoneName">hostedZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#p6-cdk-website-plus.IP6CDKWebsiteProps.property.verifyEmail">verifyEmail</a></code> | <code>string</code> | *No description.* |

---

##### `cloudfrontRecordName`<sup>Required</sup> <a name="cloudfrontRecordName" id="p6-cdk-website-plus.IP6CDKWebsiteProps.property.cloudfrontRecordName"></a>

```typescript
public readonly cloudfrontRecordName: string;
```

- *Type:* string

---

##### `hostedZoneName`<sup>Required</sup> <a name="hostedZoneName" id="p6-cdk-website-plus.IP6CDKWebsiteProps.property.hostedZoneName"></a>

```typescript
public readonly hostedZoneName: string;
```

- *Type:* string

---

##### `verifyEmail`<sup>Required</sup> <a name="verifyEmail" id="p6-cdk-website-plus.IP6CDKWebsiteProps.property.verifyEmail"></a>

```typescript
public readonly verifyEmail: string;
```

- *Type:* string

---


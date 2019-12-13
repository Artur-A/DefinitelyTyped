import { ComponentType } from '@wordpress/element';

// prettier-ignore
export default function withConstrainedTabbing<T>(wrapped: T):
    T extends ComponentType<infer U> ? ComponentType<U> :
    never;

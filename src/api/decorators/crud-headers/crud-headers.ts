import { DecoratorHelper } from './../../shared-utils/decorator-helper';
import { HeaderInterface } from './interfaces/header.interface';
import { makeHeaders } from './make-headers/make-headers';

export function CrudHeaders(
    options: HeaderInterface,
) {
    return (target: any) => {
        return DecoratorHelper.makeDecorator(options, target, makeHeaders);
    };
}

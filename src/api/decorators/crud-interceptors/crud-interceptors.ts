import {CrudInterceptorsConfig} from './interfaces/crud-interceptors';
import {DecoratorHelper} from '../../..';
import { makeInterceptors } from './make-interceptors/make-interceptors';

export function CrudInterceptors(
    options: CrudInterceptorsConfig,
) {
    return (target: any) => {
        return DecoratorHelper.makeDecorator(options, target, makeInterceptors);
    };
}
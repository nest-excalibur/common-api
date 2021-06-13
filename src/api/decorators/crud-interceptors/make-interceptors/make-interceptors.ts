import { CrudInterceptors } from '../interfaces/crud-interceptors';
import { isFunction } from '@nestjs/common/utils/shared.utils';
import { validateEach } from '@nestjs/common/utils/validate-each.util';
import { extendArrayMetadata } from '@nestjs/common/utils/extend-metadata.util';
import { INTERCEPTORS_METADATA } from '@nestjs/common/constants';
import { CrudMethodsInterface } from '../../../interfaces/crud-methods.interface';

export function makeInterceptors(
    methodName: keyof (CrudMethodsInterface),
    target: any,
    interceptors: CrudInterceptors,
) {
    const isInterceptorValid = <T extends Function | Record<string, any>>(
        interceptor: T,
    ) =>
        interceptor && (isFunction(interceptor) ||
            isFunction((interceptor as Record<string, any>).intercept));
    validateEach(target, interceptors, isInterceptorValid, '@UseInterceptors', 'interceptor',);
    extendArrayMetadata(INTERCEPTORS_METADATA, interceptors, target.prototype[methodName]);
    return target;
}
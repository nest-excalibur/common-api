import {makeGuards} from '../decorators/crud-guards/make-guards/make-guards';
import {CrudGuardConfigOptions, CrudGuards} from '../decorators/crud-guards/interfaces/crud-guards-interfaces-types';
import {CrudInterceptors, CrudInterceptorsConfig} from '../decorators/crud-interceptors/interfaces/crud-interceptors';
import {makeInterceptors} from '../decorators/crud-interceptors/make-interceptors/make-interceptors';
import {CrudHeadersConfig, HeaderInterface} from '../decorators/crud-headers/interfaces/header.interface';
import {makeHeaders} from '../decorators/crud-headers/make-headers/make-headers';
import {CrudMethodsInterface} from '../interfaces/crud-methods.interface';



export class DecoratorHelper {
    static makeCrudGuards(
        options: CrudGuardConfigOptions,
        target: any,
    ) {
        return this.make<CrudGuards>(target, options, makeGuards);
    }

    static makeCrudInterceptors(
        options: CrudInterceptorsConfig,
        target: any,
    ) {
        return this.make<CrudInterceptors>(target, options, makeInterceptors);
    }

    static makeCrudHeaders(
        options: CrudHeadersConfig,
        target: any,
    ) {
        return this.make<HeaderInterface>(target, options, makeHeaders);
    }

    private static make<T>(
        target: any,
        options: CrudMethodsInterface,
        predicate: (methN: keyof (CrudMethodsInterface), target: any, opts: T) => any | void
    ) {
        const methodNames = Object.keys(options) as (keyof CrudMethodsInterface)[];
        for (const method of methodNames) {
            const methodOptions = options[method];
            if (methodOptions) {
                predicate(method, target, methodOptions);
            }
        }
        return target;
    }
}

import { CrudMethodsInterface } from '../interfaces/crud-methods.interface';


export class DecoratorHelper {

    static makeDecorator<T>(
        options: T,
        target: any,
        maker: (
            methodName: keyof (CrudMethodsInterface),
            target: any,
            options: any
        ) => any | void,
    ) {
        return this.make<T>(target, options, maker);
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

import { RegisterMetadata } from './../interfaces/crud-metadata-config';
import { CrudMethodsInterface } from './../../../interfaces/crud-methods.interface';

export const makeMetadata = (
    methodName: keyof (CrudMethodsInterface),
    target: any,
    options: RegisterMetadata[],
): any => {
     // DO SOMETHING
     for (const registerMeadata of options){
        Reflect.defineMetadata(registerMeadata.key, registerMeadata.data, target.prototype[methodName]);
     }
     return target;
};

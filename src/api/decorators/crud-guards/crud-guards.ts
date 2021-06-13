import {CrudGuardConfigOptions} from './interfaces/crud-guards-interfaces-types';
import {DecoratorHelper} from '../../..';
import { makeGuards } from './make-guards/make-guards';


// Decorator who assign guards to especific CRUD method
export function CrudGuards(
    options: CrudGuardConfigOptions,
): ClassDecorator {
    return (target: any) => {
        return  DecoratorHelper.makeDecorator(options, target, makeGuards);
    };
}
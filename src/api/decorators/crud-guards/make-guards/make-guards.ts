import {CanActivate} from '@nestjs/common';
import {isFunction} from '@nestjs/common/utils/shared.utils';
import {validateEach} from '@nestjs/common/utils/validate-each.util';
import {extendArrayMetadata} from '@nestjs/common/utils/extend-metadata.util';
import {GUARDS_METADATA} from '@nestjs/common/constants';
import {CrudMethodsInterface} from '../../../interfaces/crud-methods.interface';

export function makeGuards(
    methodName: keyof (CrudMethodsInterface),
    target: any,
    guards: (CanActivate | Function)[],
) {
    const isGuardValid = <T extends Function | Record<string, any>>(guard: T) =>
        guard &&
        (isFunction(guard) ||
            isFunction((guard as Record<string, any>).canActivate));
    validateEach(target, guards, isGuardValid, '@UseGuards', 'guard');
    extendArrayMetadata(GUARDS_METADATA, guards, target.prototype[methodName]);
}
import {HeaderInterface} from '../interfaces/header.interface';
import {extendArrayMetadata} from '@nestjs/common/utils/extend-metadata.util';
import {HEADERS_METADATA} from '@nestjs/common/constants';
import {CrudMethodsInterface} from '../../../interfaces/crud-methods.interface';

export function makeHeaders(
    methodName: keyof (CrudMethodsInterface),
    target: any,
    options: HeaderInterface,
) {
    extendArrayMetadata(HEADERS_METADATA, [options], target.prototype[methodName],);
    return target;
}
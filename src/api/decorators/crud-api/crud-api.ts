import { makeMetadata } from './../crud-metadata/make-metadata/make-metadata';
import { CrudMetadataConfig } from './../crud-metadata/interfaces/crud-metadata-config';
import { CrudConfig } from './interfaces/interfaces-types';
import { CrudGuardConfigOptions } from '../crud-guards/interfaces/crud-guards-interfaces-types';
import { DecoratorHelper } from '../../..';
import { transformDict } from '../../shared-utils/transform-dict';
import { CrudInterceptorsConfig } from '../crud-interceptors/interfaces/crud-interceptors';
import { CrudHeadersConfig } from '../crud-headers/interfaces/header.interface';
import { makeGuards } from '../crud-guards/make-guards/make-guards';
import { makeInterceptors } from '../crud-interceptors/make-interceptors/make-interceptors';
import { makeHeaders } from '../crud-headers/make-headers/make-headers';


/**
 * General Decorator which can define guards, documentation, interceptors and headers for the crud methods
 * @Params CrudConfig
 */
export function CrudApi(
    options: CrudConfig,
): ClassDecorator {
    return (target: any) => {
        const guardsConfig = transformDict<CrudGuardConfigOptions>(options, 'guards');
        const crudInterceptorsConfig = transformDict<CrudInterceptorsConfig>(options, 'interceptors');
        const crudHeadersConfig = transformDict<CrudHeadersConfig>(options, 'header');
        const crudMetadataConfig = transformDict<CrudMetadataConfig>(options, 'metadata');
        // Build Guards
        target = DecoratorHelper.makeDecorator(guardsConfig, target, makeGuards);
        // Build Interceptors
        target = DecoratorHelper.makeDecorator(crudInterceptorsConfig, target, makeInterceptors);
        // Build Headers
        target = DecoratorHelper.makeDecorator(crudHeadersConfig, target, makeHeaders);
        // Build Metadata
        target = DecoratorHelper.makeDecorator(crudMetadataConfig, target, makeMetadata);

        return target;
    };
}
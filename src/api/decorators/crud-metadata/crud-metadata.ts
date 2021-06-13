import { makeMetadata } from './make-metadata/make-metadata';
import { DecoratorHelper } from './../../shared-utils/decorator-helper';
import { CrudMetadataConfig } from './interfaces/crud-metadata-config';


export const CrudMetadata = (config: CrudMetadataConfig) => {

    return (target: any) => {
        return DecoratorHelper.makeDecorator<CrudMetadataConfig>(config, target, makeMetadata);
    };

};

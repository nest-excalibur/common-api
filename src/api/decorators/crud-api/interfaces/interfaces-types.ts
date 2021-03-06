import { CrudMetadataConfig } from './../../crud-metadata/interfaces/crud-metadata-config';
import {CrudGuards} from '../../crud-guards/interfaces/crud-guards-interfaces-types';
import {CrudMethodsInterface} from '../../../interfaces/crud-methods.interface';
import {HeaderInterface} from '../../crud-headers/interfaces/header.interface';
import {CrudInterceptors} from '../../crud-interceptors/interfaces/crud-interceptors';

export interface CrudMethodOptions {
    guards?: CrudGuards;
    interceptors?: CrudInterceptors;
    header?: HeaderInterface;
    metadata?: CrudMetadataConfig;
}

export type CrudMethodOptionsKeys = keyof CrudMethodOptions;

export interface CrudConfig extends  CrudMethodsInterface{
    createOne?: CrudMethodOptions;
    updateOne?: CrudMethodOptions;
    findAll?: CrudMethodOptions;
    deleteOne?: CrudMethodOptions;
    findOneById?: CrudMethodOptions;
    createMany?: CrudMethodOptions;
}

import { CrudMethodsInterface } from '../../../interfaces/crud-methods.interface';


export interface RegisterMetadata {
    key: string;
    data: any;
}

export interface CrudMetadataConfig extends CrudMethodsInterface {
    createOne?: RegisterMetadata[];
    updateOne?: RegisterMetadata[];
    findAll?: RegisterMetadata[];
    deleteOne?: RegisterMetadata[];
    findOneById?: RegisterMetadata[];
}

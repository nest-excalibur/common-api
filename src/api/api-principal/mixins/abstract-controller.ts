import {ControllerCrudMethods, PrincipalService} from '../../..';
import {DeepPartial, ObjectLiteral} from 'typeorm';

export abstract class AbstractController<T> implements ControllerCrudMethods<T> {

    protected constructor(
        readonly service: PrincipalService<T>,
    ) {
    }

    createMany(newRecords: DeepPartial<T>[], ...args: any[]): any {
    }

    createOne(newRecord: DeepPartial<T>, ...args: any[]): any {
    }

    deleteOne(id: number, ...args: any[]): any {
    }

    findAll(searchCriteria: ObjectLiteral, ...args: any[]): any {
    }

    findOneById(id: number, ...args: any[]): any {
    }

    updateOne(...args: any[]): any {
    }
}


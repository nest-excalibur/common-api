import {PrincipalService} from '../../../index';

declare var require: any;
// tslint:disable-next-line:no-var-requires
const fs = require('fs');

export async function createData(pathToFile: string, service: PrincipalService<any>) {
    try {
        return new Promise((resolve, reject) => {
            fs.readFile(pathToFile, 'UTF-8', (err: any, data: string) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(service.createOne(JSON.parse(data)));
                    }
                },
            );
        });
    } catch (e) {
        console.error('error on create data', e);
    }
}

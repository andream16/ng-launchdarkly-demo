import { Injectable } from '@angular/core';
import { LDClient, LDUser, initialize } from 'ldclient-js';
import { v1 as uuid } from 'uuid';

@Injectable()
export class AppService {

    public client: LDClient;
    public user: LDUser;

    constructor() {
        this.user = {
            key: uuid()
        };
        this.client = initialize('5cdc3a0e9e85190822f5a76d', this.user);
    }

}
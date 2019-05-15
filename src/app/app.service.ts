import { Injectable } from '@angular/core';
import { LDClient, LDUser, initialize } from 'ldclient-js';

@Injectable()
export class AppService {
    public client: LDClient;
    public user: LDUser;

    constructor() {
        this.user = {
            key: "andream16"
        };
        this.client = initialize('5cdc3a0e9e85190822f5a76d', this.user);
    }

}
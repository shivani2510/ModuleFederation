import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup() {
        return [
            {
                // For Loading
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                remoteName: 'app2',
                exposedModule: './app2',

                // For Routing
                displayName: 'Application 2',
                routePath: 'app2',
                ngModuleName: 'ChildModule'
            },{
                // For Loading
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                remoteName: 'app2',
                exposedModule: './Comp2',

                // For Routing
                displayName: 'Application 2 comp2',
                routePath: 'comp2',
                ngModuleName: 'Child2Module'
            },
            {
                // For Loading
                remoteEntry: 'http://localhost:8000/remoteEntry.js',
                remoteName: 'app3',
                exposedModule: './app3',

                // For Routing
                displayName: 'Application 3',
                routePath: 'app3',
                ngModuleName: 'ChildModule'
            }
        ];
    }
}
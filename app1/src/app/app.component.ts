import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedLibService } from 'shared-lib';
import { LookupService } from './microfrontend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  microfrontends: any[] = [];
  name: any;
  constructor(private router: Router, private lookupService: LookupService,
    private sharedLibService: SharedLibService) {

  }
  ngOnInit() {
    this.microfrontends = this.lookupService.lookup();
    const routes = this.buildRoutes(this.microfrontends);
    this.router.resetConfig(routes);
  }

  buildRoutes(options: any[]) {

    const lazyRoutes = options.map(o => ({
      path: o.routePath,
      loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName])
    }));

    return lazyRoutes;
  }

  setName() {
    this.sharedLibService.setData(this.name);
  }
}

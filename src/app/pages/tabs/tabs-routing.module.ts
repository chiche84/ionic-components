import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '', //lo toma a este, aunque tenga el mismo path, porque esta antes
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
      path: 'account',
      loadChildren: () => import('../avatar/avatar.module').then(m=> m.AvatarPageModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('../infinite-scroll/infinite-scroll.module').then(m=> m.InfiniteScrollPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../list/list.module').then(m=> m.ListPageModule)
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

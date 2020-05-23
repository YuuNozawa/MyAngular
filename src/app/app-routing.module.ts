import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashBoardComponent } from './dashboard.component';
import { MemberDetailComponent }  from './member-detail.component';
import { MembersComponent } from './members.component';
import { NgModel } from '@angular/forms';

const routes: Routes = [
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
    },
    {
        path: 'members',
        component: MembersComponent
    },
    {
        path: 'dashboard',
        component: DashBoardComponent
    },
    {
        path:'detail/:id',
        component: MemberDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{ }
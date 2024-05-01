import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent }  from './BackOffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { SessionComponent } from './FrontOffice/session/session.component';
import { RessourceBackComponent } from './BackOffice/ressource-back/ressource-back.component';
import { RessourceComponent } from './FrontOffice/ressource/ressource.component';
import { AddLocal2Component } from './BackOffice/add-local-2/add-local-2.component';
import { AddStudyGroupComponent } from './BackOffice/add-study-group/add-study-group.component';
import { ViewLocalComponent } from './BackOffice/view-local/view-local.component';
import { ViewStudyGroupComponent } from './BackOffice/view-study-group/view-study-group.component';

const routes: Routes = [
  {
  path:"admin",
  component:AllTemplateBackComponent
  },
  {
    path:"add_local",
    component:AddLocal2Component
    },
    {
      path:"get_locals",
      component:ViewLocalComponent
      },
    {
      path:"add_study_group",
      component:AddStudyGroupComponent
      },
      {
        path:"get_study_groups",
        component:ViewStudyGroupComponent
        },
  {
    path:"front",
    component:AllTemplateFrontComponent
    },
  {
    path:"test",
    component:AllTemplateFrontComponent
  },
  {
    path:"list",
    component:RessourceComponent
    },
    {
      path:"form",
      component:RessourceBackComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

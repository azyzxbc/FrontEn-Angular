import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { Component } from '@angular/core';
import { Ressource } from '../../FrontOffice/Ressource';
import { CommonModule } from '@angular/common';
import { RessourceService } from "../../Services/ressource.service";
import { RessourceBackComponent } from "../ressource-back/ressource-back.component";
import { ManageStudyGroupService } from "../../Services/manage-study-group.service";
import { ManageLocalService } from "../../Services/manage-local.service";


@Component({
    selector: 'app-all-template-back',
    templateUrl: './all-template-back.component.html',
    styleUrls: ['./all-template-back.component.css'],
   
})
export class AllTemplateBackComponent {
    StudyGroups: any[] = [];
    locals : any[] =[];
    selectedLocalIds: any[] =[] ;
    constructor(private dataService: ManageStudyGroupService,
      private dataServiceLocal : ManageLocalService) { }
  
    ngOnInit() {
      this.fetchsg();
      this.selectedLocalIds.push(null);
      this.fetchAvliablesLocals();
    }
  
    fetchsg() {
      this.dataService.getStudyGroupsbyStatusOpen().subscribe(
        (data: any[]) => {
          console.log(data)
          this.StudyGroups = data;
        },
        error => {
          console.error('Error fetching locals:', error);
        }
      );
    }

    fetchAvliablesLocals() {
      this.dataServiceLocal.getAvliablesLocals().subscribe(
        (data: any[]) => {
          console.log(data)
          this.locals = data;
        },
        error => {
          console.error('Error fetching locals:', error);
        }
      );
    }


    getColor(totalGroups: number): string {
      return totalGroups === 0 ? 'green' : 'orange';
    }

    
    selectedLocalId: any;

  onSelectIdLocal(idLocal: number) {
    this.selectedLocalIds[0]= idLocal;
  }
    onClickMatch(sg_id: any, local_id : any) {
      console.log('Match clicked for:', sg_id,+"  "+local_id);
      this.dataService.Match(sg_id,local_id).subscribe(
        (data: any) => {
          console.log(data)
          this.fetchsg()
        },
        error => {
          console.error('Error Matching :', error);
        }
      );
    }

}

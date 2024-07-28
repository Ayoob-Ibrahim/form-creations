import { Component, Inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent {
  modalcss: boolean = false;
  modalcss1: boolean = false;
  // animal: string;
  // name: string;
  // constructor(public dialog: MatDialog) { }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     data: { name: this.name, animal: this.animal },
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

toggle(){
  this.modalcss1=!this.modalcss1;
}

  closeViewer() {
    // this.imgObj.imgBoolean = false
    this.modalcss = !this.modalcss;
  }








}




// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
//   standalone: true,
//   imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
// })
// export class DialogOverviewExampleDialog {
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,
//   ) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }
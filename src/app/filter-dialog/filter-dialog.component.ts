import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../dialog-data';
import { FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css']
})
export class FilterDialogComponent implements OnInit {

  form: FormGroup;
  from: number;
  to: number;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    this.from = data.from;
    this.to = data.to;

    this.form = fb.group({
      from: [data.from,
      [Validators.required,
      Validators.minLength(1),
      Validators.pattern('[0-9]*'),
      Validators.min(0)]
      ],
      to: [data.to,
      [Validators.required,
      Validators.minLength(1),
      Validators.pattern('[0-9]*'),
      Validators.min(0)]
      ],
    });
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(data: DialogData): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
      data.from = this.form.value.from;
      data.to = this.form.value.to;
    }
  }

}

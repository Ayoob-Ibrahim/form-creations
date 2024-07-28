import { Component } from '@angular/core';
import { DATAService } from 'src/app/service/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  dataArray = [
    { question: '', type: 'Text Area', radioptions: [{ value: '' }], answer: "", },
  ]
  constructor(public dataSrv: DATAService) {

  }


  ngOnInit(): void {
    this.dropDownObj.TextArea = true;
  }
  clone(data: any, index: null) {
    console.log(data, index)
  }


  typeChange() {
    console.log('change')
  }
  cardAdd() {
    this.dataArray.push({ question: '', type: 'Text Area', radioptions: [{ value: '' }], answer: "" })

  }

  test() {
    console.log(this.dataArray, "test")
  }

  addCheck(data: any) {
    data.checkBoxOption.push({ value: '' })
    data.radioptions = [{ value: '' }]
  }

  addOption(data: any,) {

    data.radioptions.push({ value: '' })
    data.checkBoxOption = [{ value: '' }]
    console.log(this.dataArray, "data 2")


  }


  OnAddCard() {
    this.dataArray.push({ question: '', type: 'Text Area', radioptions: [{ value: '' }], answer: "" });
    console.log(this.dataArray)
    let object = { question: '', type: 'Text Area', options: [] }
  }
  // ,'Drop Down'
  dropDown = ['Text Area', 'RadioButton', 'checkBox', 'InputBox']
  radio = [1];
  card = [1]
  dropDownObj: any = {
    TextArea: false,
    DropDownBox: false,
    RadioButton: false,
    checkBox: false,
  }



  inputSelection(data: any) {
    this.dropDownObj = {
      TextArea: false,
      DropDownBox: false,
      RadioButton: false,
      checkBox: false,
    }
    console.log(data, 'data')

    this.dropDownObj[data.type] = true;
    console.log(this.dropDownObj)
    this.radio = [1]
  }

}

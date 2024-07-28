import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generating-ques',
  templateUrl: './generating-ques.component.html',
  styleUrls: ['./generating-ques.component.scss']
})
export class GeneratingQuesComponent implements OnInit {
  dataArray = [
    { question: '', type: 'Text Area', radioptions: [{ value: '' }], answer: "", checkBoxOption: [{ value: '' }], },
  ]



  ngOnInit(): void {
    this.dropDownObj.TextArea = true;
  }


  typeChange() {
    console.log('change')
  }
  cardAdd() {
    this.dataArray.push({ question: '', type: 'Text Area', radioptions: [{ value: '' }], answer: "", checkBoxOption: [{ value: '' }], })

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
    this.dataArray.push({ question: '', type: 'Text Area', radioptions: [{ value: '' }], answer: "", checkBoxOption: [{ value: '' }], });
    console.log(this.dataArray)
    let object = { question: '', type: 'Text Area', options: [] }
  }
  dropDown = ['Text Area', 'RadioButton', 'checkBox','InputBox','Drop Down']
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

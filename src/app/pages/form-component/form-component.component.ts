import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
  ngOnInit(): void {

    // JotForm.setPhoneMaskingValidator('input_8_full', '\u0028\u0023\u0023\u0023\u0029 \u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023');

    // JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // if (!JotForm.calenderViewMonths) JotForm.calenderViewMonths = {}; JotForm.calenderViewMonths[9] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // if (!JotForm.calenderViewDays) JotForm.calenderViewDays = {}; JotForm.calenderViewDays[9] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // JotForm.calendarOther = { "today": "Today" };
    // var languageOptions = document.querySelectorAll('#langList li');
    // for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
    //   languageOptions[langIndex].on('click', function (e) { setTimeout(function () { JotForm.setCalendar("9", false, { "days": { "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true }, "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "", "countSelectedDaysOnly": false }); }, 0); });
    // }
    // JotForm.onTranslationsFetch(function () { JotForm.setCalendar("9", false, { "days": { "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true }, "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "", "countSelectedDaysOnly": false }); });

    // JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // JotForm.appointmentCalendarDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // JotForm.calendarOther = "Today";
    // window.initializeAppointment({ "text": { "text": "Question", "value": "Appointment" }, "labelAlign": { "text": "Label Align", "value": "Top", "dropdown": [["Auto", "Auto"], ["Left", "Left"], ["Right", "Right"], ["Top", "Top"]] }, "required": { "text": "Required", "value": "No", "dropdown": [["No", "No"], ["Yes", "Yes"]] }, "description": { "text": "Hover Text", "value": "", "textarea": true }, "slotDuration": { "text": "Slot Duration", "value": "60", "dropdown": [[15, "15 min"], [30, "30 min"], [45, "45 min"], [60, "60 min"], ["custom", "Custom min"]], "hint": "Select how long each slot will be." }, "startDate": { "text": "Start Date", "value": "" }, "endDate": { "text": "End Date", "value": "" }, "intervals": { "text": "Intervals", "value": [{ "from": "09:00", "to": "17:00", "days": ["Mon", "Tue", "Wed", "Thu", "Fri"] }], "hint": "The hours will be applied to the selected days and repeated." }, "useBlockout": { "text": "Blockout Custom Dates", "value": "No", "dropdown": [["No", "No"], ["Yes", "Yes"]], "hint": "Disable certain date(s) in the calendar." }, "blockoutDates": { "text": "Blockout dates", "value": [{ "startDate": "", "endDate": "" }] }, "useLunchBreak": { "text": "Lunch Time", "value": "Yes", "dropdown": [["No", "No"], ["Yes", "Yes"]], "hint": "Enable lunchtime in the calendar." }, "lunchBreak": { "text": "Lunchtime hours", "value": [{ "from": "12:00", "to": "14:00" }] }, "timezone": { "text": "Timezone", "value": "America/New_York (GMT-04:00)" }, "timeFormat": { "text": "Time Format", "value": "AM/PM", "dropdown": [["24 Hour", "24 Hour"], ["AM/PM", "AM/PM"]], "icon": "images/blank.gif", "iconClassName": "toolbar-time_format_24" }, "months": { "value": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], "hidden": true }, "days": { "value": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "hidden": true }, "startWeekOn": { "text": "Start Week On", "value": "Sunday", "dropdown": [["Monday", "Monday"], ["Sunday", "Sunday"]], "toolbar": false }, "rollingDays": { "text": "Rolling Days", "value": "", "toolbar": false }, "prevMonthButtonText": { "text": "Previous month", "value": "" }, "nextMonthButtonText": { "text": "Next month", "value": "" }, "prevYearButtonText": { "text": "Previous year", "value": "" }, "nextYearButtonText": { "text": "Next year", "value": "" }, "prevDayButtonText": { "text": "Previous day", "value": "" }, "nextDayButtonText": { "text": "Next day", "value": "" }, "appointmentType": { "hidden": true, "value": "single" }, "autoDetectTimezone": { "hidden": true, "value": "Yes" }, "dateFormat": { "hidden": true, "value": "mm/dd/yyyy" }, "maxAttendee": { "hidden": true, "value": "5" }, "maxEvents": { "hidden": true, "value": "" }, "minScheduleNotice": { "hidden": true, "value": "3" }, "name": { "hidden": true, "value": "appointment" }, "order": { "hidden": true, "value": "8" }, "qid": { "toolbar": false, "value": "input_10" }, "reminderEmails": { "hidden": true, "value": { "schedule": [{ "value": "2", "unit": "hour" }] } }, "type": { "hidden": true, "value": "control_appointment" }, "useReminderEmails": { "hidden": true, "value": "No" }, "id": { "toolbar": false, "value": "10" }, "qname": { "toolbar": false, "value": "q10_appointment" }, "cdnconfig": { "CDN": "https://cdn.jotfor.ms/" }, "passive": false, "formProperties": { "products": false, "highlightLine": "Enabled", "coupons": false, "useStripeCoupons": false, "taxes": false, "comparePaymentForm": "", "paymentListSettings": false, "newPaymentUIForNewCreatedForms": "Yes", "formBackground": "#E4EFFF", "newAppointment": false }, "formID": 232731046667054, "isPaymentForm": false, "isOpenedInPortal": false, "isCheckoutForm": false, "isOfflineForms": false, "SSL_URL": "https://www.jotform.com/", "themeVersion": "v2", "isEnterprise": false, "environment": "PRODUCTION" });
    // JotForm.alterTexts(undefined);
    /*INIT-END*/
  }

}

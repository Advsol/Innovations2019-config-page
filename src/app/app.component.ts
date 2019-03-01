import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public settings = new MySettings();

  title = 'config-page';


  ngOnInit(): void {
    let data = (document.querySelector("#JsonSettings") as HTMLInputElement).value;

    if(data !== "")
      this.settings = JSON.parse(data);
    else
      this.settings = new MySettings();
  }

  public serializeSettings(): void{
    var input = document.querySelector("#JsonSettings") as HTMLInputElement;
    input.value = JSON.stringify(this.settings);
  }
}

export class MySettings
{
  public myStringSetting: string;
  public myBoolSetting: string;
  public mySelectSetting: string;
}

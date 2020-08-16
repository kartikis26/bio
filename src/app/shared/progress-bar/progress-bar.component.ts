import { Component, Input } from "@angular/core";

@Component({
    selector: "progress-bar",
    templateUrl: "./progress-bar.component.html",
    styleUrls: ["./progress-bar.component.scss"]
})
export class ProgressBarComponent {
    @Input() skills: string = "";
    @Input() growth: string = "";
    @Input() isTitle: boolean = false;

    public getGrowthPer() {
        return this.growth + "%"
    }
}
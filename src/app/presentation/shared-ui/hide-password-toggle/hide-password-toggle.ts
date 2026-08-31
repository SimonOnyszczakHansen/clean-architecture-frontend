import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hide-password-toggle',
  styleUrl: './hide-password-toggle.css',
  templateUrl: './hide-password-toggle.html',
})
export class HidePasswordToggle {
	@Input({ required: true }) target!: HTMLInputElement;
	show = false;

	toggle(): void {
		this.show = !this.show;
		if(this.target) {
			this.target.type = this.show ? 'text' : 'password';
		}
	}
}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {PostingService} from './posting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder, private _postingService: PostingService) {

  }
postForm = this.fb.group({
  teacher: ['', [Validators.required, Validators.minLength(3)]],
  tell_us_sth: ['', Validators.required]
});



  onSubmit() {
    console.log(this.postForm.value);
    this._postingService.postIt(this.postForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
  }
}

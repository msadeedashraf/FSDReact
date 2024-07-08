import { Component } from '@angular/core';
import {HousinglocationComponent} from '../housinglocation/housinglocation.component'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousinglocationComponent],
  template: `
  <section>
    <form action="">

    <input type="text" placeholder="Filter by city">
    <button type="button">Search</button>
    </form>
  </section>
  <section class="result">
<app-housinglocation>

</app-housinglocation>

  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

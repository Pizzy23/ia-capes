import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnSectionComponent } from '../components/on-section/on-section.component';
import { OnFormPesquisaComponent } from "../components/on-form-pesquisa/on-form-pesquisa.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OnSectionComponent, OnFormPesquisaComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class AppComponent {
  title = 'Portal .periodicos. CAPES';
}

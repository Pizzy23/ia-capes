import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnFormPesquisaComponent } from '../components/on-form-pesquisa/on-form-pesquisa.component';
import { OnCadastroComponent } from '../components/on-cadastro/on-cadastro.component';

export const routes: Routes = [
  { path: '', component: OnFormPesquisaComponent },
  { path: 'cadastrar', component: OnCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

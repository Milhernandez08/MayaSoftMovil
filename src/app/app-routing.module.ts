import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'geolocalizacion', loadChildren: './Muestra/geolocalizacion/geolocalizacion.module#GeolocalizacionPageModule' },
  { path: 'localizaciones', loadChildren: './Muestra/localizaciones/localizaciones.module#LocalizacionesPageModule' },
  { path: 'procesamiento', loadChildren: './Analisis/procesamiento/procesamiento.module#ProcesamientoPageModule' },
  { path: 'resultados', loadChildren: './Analisis/resultados/resultados.module#ResultadosPageModule' },
  { path: 'lotes', loadChildren: './Territorio/lotes/lotes.module#LotesPageModule' },
  { path: 'lista-analisis', loadChildren: './Analisis/lista-analisis/lista-analisis.module#ListaAnalisisPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import{a as h,n as o}from"./chunk-OZO5R2AD.js";import{da as j,ja as d}from"./chunk-CPJRB4V3.js";import{g as e,h as E}from"./chunk-73B72BQ3.js";var O=(()=>{var i;let s=class s{constructor(){E(this,i,d(h))}getEjercicioRealizados(r){return e(this,i).get(`${o.urlObtenerEjercicios}/${r}`)}postEjercicioRealizadosFecha(r,t){return e(this,i).post(`${o.urlObtenerEjerciciosFecha}`,{idUsuario:r,fecha:t})}postEjercicioRealizadosRango(r,t,c){return e(this,i).post(`${o.urlObtenerEjerciciosRango}`,{idUsuario:r,fechaInicio:t,fechaFin:c})}postBusquedaNombre(r){return e(this,i).post(`${o.urlObtenerTodosEjercicio}/nombreConEnlaces`,{nombre:r})}postEjercicioRealizadoGuardar(r,t,c,a){return e(this,i).post(`${o.urlUsuarioRealizaEjercicio}`,{idEjercicio:r,idUsuario:t,tiempo:c,met:a})}postProponerEjercicio(r,t,c,a,u,p,l,m,$){return e(this,i).post(`${o.urlProponerEjercicio}`,{nombre:r,dificultad:t,grupoMuscular:c,valorMET:a,descripcion:u,instrucciones:p,idUsuario:l,enlace1:m,enlace2:$})}putEditarEjercicioRealizado(r,t,c,a,u,p,l){return e(this,i).put(`${o.urlEditarEjercicioRealizado}`,{idUsuario:r,fecha:t,hora:c,idEjercicioViejo:a,tiempo:u,idEjercicioNuevo:p,met:l})}deleteEjercicioRealizado(r,t,c,a){return e(this,i).post(`${o.urlEliminarEjercicioRealizado}`,{idUsuario:r,fecha:t,hora:c,idEjercicio:a})}getEjerciciosAdministrar(){return e(this,i).get(`${o.urlObtenerEjerciciosAdministrar}`)}postAceptarEjercicio(r){return e(this,i).post(`${o.urlAceptarEjercicioPropuesto}`,{idEjercicio:r})}putEliminarEjercicioPropuesto(r){return e(this,i).put(`${o.urlEliminarEjercicioPropuesto}`,{idEjercicio:r})}};i=new WeakMap,s.\u0275fac=function(t){return new(t||s)},s.\u0275prov=j({token:s,factory:s.\u0275fac,providedIn:"root"});let n=s;return n})();export{O as a};

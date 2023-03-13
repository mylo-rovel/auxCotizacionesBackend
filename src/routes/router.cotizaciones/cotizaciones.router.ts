import express, {Router} from 'express';
import { 
    httpGetListaCotizaciones, 
    httpRegistrarCotizacion,
    httpObtenerCotizacionPorFecha,
    httpObtenerCotizacionEspecifica
} from './cotizaciones.controller.js';

export const cotizacionesRouter: Router = express.Router();

cotizacionesRouter.get('/', httpGetListaCotizaciones);

cotizacionesRouter.get('/:coti_id', httpObtenerCotizacionEspecifica);

cotizacionesRouter.get('/cotizaciones-por-fecha', httpObtenerCotizacionPorFecha);

cotizacionesRouter.post('/', httpRegistrarCotizacion);
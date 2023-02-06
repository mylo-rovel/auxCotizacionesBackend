import express, {Router} from 'express';
import { 
    httpGetListaCotizaciones, 
    httpRegistrarCotizacion,
    httpObtenerCotizacionPorFecha,
    httpObtenerCotizacionEspecifica
} from './cotizaciones.controller.js';

export const cotizacionesRouter: Router = express.Router();

cotizacionesRouter.get('/', httpGetListaCotizaciones);

cotizacionesRouter.post('/registrar', httpRegistrarCotizacion);

cotizacionesRouter.get('/cotizaciones-por-fecha', httpObtenerCotizacionPorFecha);

cotizacionesRouter.get('/:coti_id', httpObtenerCotizacionEspecifica);
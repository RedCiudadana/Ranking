import Controller from '@ember/controller';
import { computed } from '@ember/object';

class ApplicationController extends Controller {
  init() {
    super.init(...arguments);
  }

  @computed
  get columns() {
    return [
      {
        name: 'No.',
        valuePath: 'No',
        width: 50,
        isFixed: 'left'
      },
      {
        name: 'Nombre Institución',
        valuePath: 'Nombre Institución',
        isFixed: 'left'
      },
      {
        name: 'Descripción de Institución',
        valuePath: 'Descripción de Institución'
      },
      {
        name: 'Página Web',
        valuePath: 'Página Web'
      },
      {
        name: 'Enlace de Datos',
        valuePath: 'Enlace de Datos'
      },
      {
        name: 'Facebook',
        valuePath: 'Facebook'
      },
      {
        name: 'Twitter',
        valuePath: 'Twitter'
      },
      {
        name: 'Licencia Abierta',
        valuePath: 'Licencia Abierta'
      },
      {
        name: 'Formato abierto y legible por máquina',
        valuePath: 'Formato abierto y legible por máquina'
      },
      {
        name: 'Disponible en una sola descarga',
        valuePath: 'Disponible en una sola descarga'
      },
      {
        name: 'Datos actualizados',
        valuePath: 'Datos actualizados'
      },
      {
        name: 'Disponible públicamente',
        valuePath: 'Disponible públicamente'
      },
      {
        name: 'Disponible sin cargo',
        valuePath: 'Disponible sin cargo'
      },
      {
        name: 'Comentarios',
        valuePath: 'Comentarios'
      },
      {
        name: 'Puntaje',
        valuePath: 'Puntaje'
      }
    ];
  }

  @computed
  get  rows() {
    return [
      {
        "No": 1,
        "Nombre Institución": "MINFIN",
        "Descripción de Institución": "",
        "Página Web": "",
        "Enlace de Datos": "",
        "Facebook": "",
        "Twitter": "",
        "Licencia Abierta": "SI",
        "Formato abierto y legible por máquina": "SI",
        "Disponible en una sola descarga": "SI",
        "Datos actualizados": "SI",
        "Disponible públicamente": "SI",
        "Disponible sin cargo": "SI",
        "Comentarios": "",
        "Puntaje": 100
      },
      {
        "No": 2,
        "Nombre Institución": "MINGOB",
        "Descripción de Institución": "",
        "Página Web": "",
        "Enlace de Datos": "",
        "Facebook": "",
        "Twitter": "",
        "Licencia Abierta": "SI",
        "Formato abierto y legible por máquina": "SI",
        "Disponible en una sola descarga": "SI",
        "Datos actualizados": "NO",
        "Disponible públicamente": "NO",
        "Disponible sin cargo": "NO",
        "Comentarios": "",
        "Puntaje": 50
      },
      {
        "No": 3,
        "Nombre Institución": "MSPAS",
        "Descripción de Institución": "",
        "Página Web": "",
        "Enlace de Datos": "",
        "Facebook": "",
        "Twitter": "",
        "Licencia Abierta": "NO",
        "Formato abierto y legible por máquina": "NO",
        "Disponible en una sola descarga": "NO",
        "Datos actualizados": "NO",
        "Disponible públicamente": "NO",
        "Disponible sin cargo": "NO",
        "Comentarios": "",
        "Puntaje": 0
      }
    ];
  }

  get scoreValuesPaths() {
    return [
      'Licencia Abierta',
      'Formato abierto y legible por máquina',
      'Disponible en una sola descarga',
      'Datos actualizados',
      'Disponible públicamente',
      'Disponible sin cargo'
    ];
  }

  get gradientScoreValuesPaths() {
    return ['Puntaje'];
  }
}

export default ApplicationController;

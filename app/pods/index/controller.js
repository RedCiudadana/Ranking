import Controller from '@ember/controller';

class IndexController extends Controller {
  init() {
    super.init(...arguments);
  }

  /**
   * Columnas que se muestran en el index
   */
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
        name: 'Puntaje',
        valuePath: 'Puntaje'
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

export default IndexController;

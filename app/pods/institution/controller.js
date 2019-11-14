import Controller from '@ember/controller';

class InstitutionController extends Controller {
  /*
  Columnas que se muestran en instiution:
    - Descripción
    - Página web
    - Enlace de datos
    - Facebook
    - Twitter
  */
  get columns() {
    return [
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
      }
    ]
  }
}

export default InstitutionController;

import Controller from '@ember/controller';

class ApplicationController extends Controller {
  init() {
    super.init(...arguments);
    this.columns = [
      { name: 'Portal Electrónico', valuePath: 'Portal Electrónico' },
      { name: 'Informe Anual', valuePath: 'Informe Anual' },
      { name: 'Resolver Inf Clasificada', valuePath: 'Resolver Inf Clasificada' },
      { name: 'Capacitación', valuePath: 'Capacitación' },
      { name: 'Resolver Recursos', valuePath: 'Resolver Recursos' },
      { name: 'Solicitud de Información', valuePath: 'Solicitud de Información' },
      { name: 'Gratuidad', valuePath: 'Gratuidad' },
      { name: 'Transparencia activida (#29)', valuePath: 'Transparencia activida (#29)' },
      { name: 'Organización UIP', valuePath: 'Organización UIP' },
      { name: 'Formatos editables', valuePath: 'Formatos editables' },
      { name: 'Nivel Cumplimiento', valuePath: 'Nivel Cumplimiento' }
    ];

  }
}

export default ApplicationController;

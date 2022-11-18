import { Component } from '@angular/core';

// Model
export class Entidades {
  name: string;
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;

  constructor(name: string) {
    this.name = name;
    this.view = false;
    this.create = false;
    this.edit = false;
    this.delete = false;
  }
}

let entidadesPossiveis = [
  'ORDEMSERVICO',
  'AMBIENTE',
  'ATIVO',
  'CREDENCIADA',
  'DISPONIBILIDADE',
];

// Cria a tabela sem campos preenchidos
const ELEMENT_DATA: Entidades[] = [];
entidadesPossiveis.forEach((elem) => {
  ELEMENT_DATA.push(new Entidades(elem));
});

// permissões que serão recebidas do quarkus
let permissions = [
  'VIEW_ORDEMSERVICO',
  'VIEW_CREDENCIADA',
  'VIEW_DISPONIBILIDADE',
  'COGNITO_SUPERUSER',
];

console.log(permissions);

// preenche os campos
permissions.forEach((elem) => {
  let campoEntidade = elem.split("_")
  let campo = campoEntidade[0]
  let entidade = campoEntidade[1]
  let indexEntidade = entidadesPossiveis.indexOf(entidade)

  if(indexEntidade != -1) {
    ELEMENT_DATA[indexEntidade][campo.toLocaleLowerCase()] = true
  }
});

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'view', 'create', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;

  toggle(field: string, element: Entidades) {
    let newPermission = field.toUpperCase() + '_' + element.name
    let index = permissions.indexOf(newPermission)

    if(index != -1) {
      permissions.splice(index, 1)
    } else {
      permissions.push(newPermission)
    }

    console.log(permissions)
  }

}

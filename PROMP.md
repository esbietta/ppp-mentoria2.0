
Objetivo
Criar uma API Rest para reservas de hotel

Contexto
-A API possui os seguintes módulos e funcionalidades: 

Módulo	        Descripción
Usuarios	        Registro, login, roles (cliente / admin)
Habitaciones	Tipo, precio, capacidad, disponibilidad
Reservas	        Crear, modificar, cancelar
Pagos             	Estado del pago (pendiente, confirmado, cancelado)

-Para que eu possa usar as funcionalidades, preciso fazer login como admin.
-Para que o usuario possa criar reservas ele precisa fazer login como usuario
.Para que o usuario possa consultar seu reserva, pagos e habitação disponible, ele precisa fazer login como usuario.
-Usuarios apenas criam reservas e consultam os detalles de suas reservas, admin acessam todas as funcionalidades do sistema.


Regras

.Não me pergunte nada, só faça.
.A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos. O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada. O Swagger também deve contemplar os status code de erro que serão implementados na API.
.Adicione um endpoint para renderizar o Swagger.
.Construa um arquivo README para descrever o projeto
.Divida a API em camadas: routes, controllers, service e model
.Armazene os dados da API em um banco de dados em memória
.Utilize a biblioteca express para construir a API Rest
.Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, e implemente as regras de autenticação seguindo as informações descritas no contexto.

----------------------------------------


Regras do Negocio 

Objetivo
Extraia as regras de negócio que você vê em código do projeto ppp-mentorioa2.0.

Contexto
O arquivo é um código criado para ser o Service de Checkout da minha API

Regras
Interprete não só os condicionais mas também o sentido que o desenvolvedor usou para construir cada função e pedaço de código.

Exemplo
Regra de Negócio 1: Caso uma reserva não seja feita por causa do cuarto está ocupado, a mensagem "Reserva não criada" deverá ser exibida ao usuário. 

Formato
Tabela com as colunas: ID da Regra de Negócio, Regra de Negócio, Entradas do Usuário e Saídas do Sistema.
Armazene essa saída em um arquivo Regras de Negócio.md
--------------------------------------------------

Criação do User History

Objetivo
Crie as User History como a descrição de as funcionalidade com o objetivo de entender o que o usuário precisa e por quê em base ao código do projeto ppp-mentorioa2.0.


Contexto
O arquivo é um código criado para ser o Service de Checkout da minha API

Regras
Interprete não só os condicionais mas também o sentido que o desenvolvedor usou para construir cada função e pedaço de código.

Exemplo
User History 1: Caso el registro de um usuario não sei feito por causa de as credenciales eradas, a mensagem "Registro Invalido" deverá ser exibida ao usuário.

Formato
Tabela com as colunas: ID da User History, User History, Entradas do Usuário e Saídas do Sistema.
Armazene essa saída em um arquivo User History.md
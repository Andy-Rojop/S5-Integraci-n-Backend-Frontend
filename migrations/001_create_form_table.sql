create table if not exists formulario (
    id     serial primary key,
    nombre varchar(100) not null,
    email  varchar(100) not null
);

alter table formulario add column if not exists message varchar(500);

select * from formulario;
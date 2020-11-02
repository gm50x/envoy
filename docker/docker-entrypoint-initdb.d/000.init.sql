create schema envoy;

set timezone to 'America/Sao_Paulo';

create table envoy.user (
    username varchar(100) primary key,
    name: varchar(300) not null,
    password: varchar(300) not null
);
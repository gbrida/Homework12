drop database if exists employeetracker;
create database employeetracker; 
use employeetracker;

create table department(id integer not null auto_increment,
name varchar(30), primary key(id));


create table role (id integer not null auto_increment,
title varchar(30), salary decimal, department_id INT,primary key(id));


create table employee(id integer not null auto_increment,
first_name varchar(30), last_name varchar(30), role_id INT, manager_id INT,primary key (id));
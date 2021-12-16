
create database employee_db;
use employee_db;


create table employee(
    id INT primary key,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);

create table department(
    id INT limit 3,
    name VARCHAR(30)
);

create table employee_role(
    id INT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);


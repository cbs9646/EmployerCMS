INSERT INTO employee (id, first_name, last_name, role_id, manager_id)   
VALUES 
    (1, 'Jason', 'Day', 1, 3),
    (2, 'Gabe', 'LeHerault', 2, 3),
    (3, 'Thomas', 'White', 3, 4),
    (4, 'Charlie', 'Stedman', 4, 4);

INSERT INTO department (id, name)   
VALUES 
    (1, 'Legal'),
    (2, 'Sales'),
    (3, 'Operations');

INSERT INTO employee_role (id, title, salary, department_id)   
VALUES 
    (1, 'Lawyer', 150000, 1),
    (2, 'Account Executive', 125000, 2),
    (3, 'CEO', 1000000000, 3)
    (4, 'President', 2000000000, 3);

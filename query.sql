select e1.first_Name, e1.last_Name, e2.first_Name as managerFirst, e2.last_Name as managerLast from employee e1 
inner join employee e2
on e1.manager_id = e2.id
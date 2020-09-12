use employeetracker;
insert into department (name)values("sales"),("engineering"),("finance"),("legal");
insert into role(title,salary,department_id)values
("sales lead",100000,1),
("salesperon",80000,1),
("lead engineer",150000,2),
("software engineer",120000,2),
("accountant",125000,3),
("legal team head",250000,4),
("lawyer",190000,4);
insert into employee(first_name, last_name, role_id, manager_id)
values("John","Doe",1,3),
("Mike","Chan",2,1),
("Ashley","Rodriguez",1,null),
("kevin","Tupik",4,3),
("Malia","Brown",6,null),
("Sarah","Lourd",7,null),
("Tom","Allen",8,7)

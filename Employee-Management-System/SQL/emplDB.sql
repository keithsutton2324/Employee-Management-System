DROP database IF EXISTS EMPLOYEEDB;
create database EMPLOYEEDB;
USE EMPLOYEEDB;
CREATE TABLE DEPARTMENT(ID INT AUTO_INCREMENT PRIMARY KEY,
NAME varchar(30));

CREATE TABLE ROLE(
ID INT AUTO_INCREMENT PRIMARY KEY,
TITLE VARCHAR(30),
SALARY DECIMAL,
DEPARTMENT_ID INT,
CONSTRAINT FK_1 foreign key (DEPARTMENT_ID) REFERENCES Department(ID) ON DELETE CASCADE);

DROP TABLE if exists employee;
CREATE TABLE 
EMPLOYEE(
ID INT AUTO_INCREMENT PRIMARY KEY,
FIRST_NAME VARCHAR(30),
LAST_NAME VARCHAR(30),
ROLE_ID INT,
MANAGER_ID INT,
CONSTRAINT FK_2 foreign key (ROLE_ID) REFERENCES ROLE(ID) ON DELETE CASCADE);

insert into department(name)values('Marketing');
insert into department(name)values('Engineering');
insert into department(name)values('Legal');

SELECT * FROM DEPARTMENT;

insert into role(title,salary,department_id)VALUES('Manager',12090,1);
insert into role(title,salary,department_id)VALUES('Manager',12090,2);
insert into role(title,salary,department_id)VALUES('Manager',12090,3);
insert into role(title,salary,department_id)VALUES('LEAD_COPYWRITER',12090,1);
insert into role(title,salary,department_id)VALUES('ASSIST_COPYWRITER',12090,2);
insert into role(title,salary,department_id)VALUES('INTERN',12090,3);

SELECT * FROM ROLE;

desc employee;
insert into employee(first_name,last_name,role_id)values('Keith','Sutton',1);
insert into employee(first_name,last_name,role_id)values("Joe","Sutton",2);
insert into employee(first_name,last_name,role_id)values("Jack","Sutton",3);
insert into employee(first_name,last_name,role_id)values("James","Sutton",4);
INSERT INTO EMPLOYEE(FIRST_NAME,LAST_NAME,ROLE_ID,MANAGER_ID) VALUES("Jim","Sutton",5,1);
INSERT INTO EMPLOYEE(FIRST_NAME,LAST_NAME,ROLE_ID,MANAGER_ID) VALUES("Jorge","Sutton",6,2);
INSERT INTO EMPLOYEE(FIRST_NAME,LAST_NAME,ROLE_ID,MANAGER_ID) VALUES("Jason","Sutton",7,4);
INSERT INTO EMPLOYEE(FIRST_NAME,LAST_NAME,ROLE_ID,MANAGER_ID) VALUES("Jackson","Sutton",6,3);
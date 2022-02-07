CREATE TABLE nurses (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ,full_name varchar(50),position varchar(50),ssn varchar(50));


CREATE TABLE rooms (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ,room_no varchar(50),room_type varchar(50),status varchar(50));


CREATE TABLE departments (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ,department_name varchar(50),head varchar(50));


CREATE TABLE doctors (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ,doctor_name varchar(50),age int,gender varchar(50),address varchar(50),department_id varchar(50),CONSTRAINT fk_department_id FOREIGN KEY (department_id)  
  REFERENCES departments(id));


CREATE TABLE patiants (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ,full_name varchar(50),age int,weight varchar(50),gender varchar(50),address varchar(50),phone_no varchar(50),date_of_admit DATE,room_id varchar(50),disease varchar(50),doctor_id varchar(50),ssn varchar(50),CONSTRAINT fk_room_id FOREIGN KEY (room_id)  
  REFERENCES rooms(id),CONSTRAINT fk_doctor_id FOREIGN KEY (doctor_id) REFERENCES doctor(id));

CREATE TABLE bills (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ,bill_no varchar(50),patiant_id varchar(50),patient_type varchar(50),doctor_charge varchar(50),medicine_charge varchar(50),room_charge varchar(50),oprtn_charge varchar(50),no_of_days varchar(50),nursing_charge varchar(50),advance varchar(50),health_card varchar(50),lab_charge varchar(50),bill varchar(50), FOREIGN KEY (patiant_id) REFERENCES patiants(id));







CREATE TABLE nurses (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ,full_name varchar(50),position varchar(10),ssn varchar(10),registered char(1));

CREATE TABLE rooms (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ,room_no varchar(10),room_type varchar(10),room_status varchar(10));

CREATE TABLE departments (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ,department_name varchar(50),head_name varchar(10),no_of_worker int(10));


CREATE TABLE doctors (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ,full_name varchar(50),email varchar(50),password varchar(50),age int(10),
gender varchar(10),fee int(10),specialization varchar(50),degree varchar(50),residence_address varchar(50),department_id int(50),
CONSTRAINT fk_department_id FOREIGN KEY (department_id) REFERENCES departments(id));


CREATE TABLE patiants (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ,full_name varchar(50),age int,weight varchar(10),gender varchar(50),
residence_address varchar(50),telephone varchar(50),date_of_admit DATE,room_id int(50),disease varchar(50),doctor_id int(10),
ssn_no varchar(50),insurance_no varchar(50),email varchar(50),password varchar(50),medical_history varchar(50),blood_Type varchar(10)
CONSTRAINT fk_room_id FOREIGN KEY (room_id) REFERENCES rooms(id),CONSTRAINT fk_doctor_id FOREIGN KEY (doctor_id) REFERENCES doctor(id));


CREATE TABLE bills (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ,bill_no varchar(50),patiant_id int(10),doctor_charge int(50),
medicine_charge int(50),room_charge int(50),operation_charge int(50),no_of_days_admit int(10),nursing_charge int(50),
advance int(50),health_card varchar(50),lab_charge int(50),total_bill int(50),,treatment_name varchar(50),date_time_admitted DATE,
FOREIGN KEY (patiant_id) REFERENCES patiants(id));


CREATE TABLE appointments (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ,patient_id varchar(50),appointment_date varchar(50),
appointment_time varchar(50),room_id varchar(50),doctor_id varchar(50),consultancy_fee varchar(50),created varchar(50),
appointment_status varchar(50),FOREIGN KEY (patient_id) REFERENCES patiants(id),FOREIGN KEY (room_id) REFERENCES rooms(id),
FOREIGN KEY (doctor_id) REFERENCES doctors(id));


CREATE TABLE staffs (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ,job_title varchar(50),head varchar(50),,job_title varchar(50),
job_title varchar(50),job_title varchar(50));





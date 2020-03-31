set session sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

drop table if exists result;
drop table if exists test;

create table test (
	id int not null primary key auto_increment,
    `name` varchar(255) not null
);

create table result (
	id int not null primary key auto_increment,
    test_id int not null,
    ip_address varchar(255) not null unique,
    answers text not null,
    percentages text not null,
    `timestamp` datetime not null,
    constraint fk_result_test foreign key (test_id) references test(id)
);
create trigger tr_result_ts before insert on result for each row set new.`timestamp` = now();

insert into test (id, `name`)
values
	(0, 'Philosophy'),
    (1, 'Economics'),
    (2, 'Personality Compass'),
    (3, 'Literature')
;

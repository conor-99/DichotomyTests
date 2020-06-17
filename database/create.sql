set session sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

drop table if exists result;
drop table if exists test;
drop view if exists politics_data;
drop view if exists politics_responses;

create table test (
	id int not null primary key auto_increment,
    `name` varchar(255) not null,
    `is_psych` bit not null
);

create table result (
	id int not null primary key auto_increment,
    test_id int not null,
    ip_address varchar(255) not null,
    answers text not null,
    percentages text not null,
    survey text null,
    `timestamp` datetime not null,
    constraint fk_result_test foreign key (test_id) references test(id)
);
create trigger tr_result_ts before insert on result for each row set new.`timestamp` = now();

insert into test (id, `name`, `is_psych`)
values
	(0, 'Philosophy', 0),
    (1, 'Economics', 0),
    (2, 'Personality Compass', 0),
    (3, 'Literature', 0),
    (4, 'Memes', 0),
    (5, 'Politics', 0),
    (6, 'Victimhood', 1),
    (7, 'Sensation Seeking', 1),
    (8, 'Fear', 1),
    (9, 'Obsessions and Compulsions', 1)
;

create view politics_data as
	select answers, percentages, survey
    from result
    where
		test_id = 5 and
        survey not like '%0%' and
        answers not like '%,0,%' and
        answers not like '%0.5%'
;

create view politics_responses as
	select
		(
			select count(*) as `cnt`
			from result
			where test_id = 5
		) as `total`,
		(
			select count(*) as `cnt`
			from result
			where
				test_id = 5 and
                survey = '0,0,0,0'
		) as `none`,
		(
			select count(*) AS `cnt`
			from result
			where
				test_id = 5 and
                survey != '0,0,0,0' and
                survey like '%0%'
		) as `partial`,
		(
			select count(*) as `cnt`
            from result
            where
				test_id = 5 and
                survey not like '%0%'
		) as `full`
;

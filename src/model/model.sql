CREATE TABLE companies(
    company_id serial PRIMARY KEY,
    company_name varchar(128)
);

CREATE TABLE complexes(
    complex_id serial PRIMARY KEY,
    complex_name varchar(128),
    company int REFERENCES companies(company_id)
);

CREATE TABLE houses(
    house_id serial PRIMARY KEY,
    house_number int,
    house_meter_square int,
    house_price_per_meter int,
    complex int REFERENCES complexes(complex_id)
);

CREATE TABLE credits(
    credit_id serial PRIMARY KEY,
    credit_duration int
);

CREATE TABLE bankes(
    bank_id serial PRIMARY KEY,
    bank_name varchar(128),
    credit_type int REFERENCES credits(credit_id)
);


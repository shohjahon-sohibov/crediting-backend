INSERT INTO companies(company_name) 
VALUES
('Bechtel'),
('Turner Corporation'),
('AECOM');

INSERT INTO complexes(complex_name, company) 
VALUES
('Bechtel virginia', 1),
('Bechtel New York', 1),
('Tuurner Corporation Dubai', 2),
('Turner Corporation Dubai', 2),
('AECOM Misr', 3),
('AECOM Britain', 3);

INSERT INTO houses(house_number, house_meter_square, house_price_per_meter, complex) 
VALUES
(1, 70, 3000000, 1),
(2, 110, 3000000, 1),
(3, 150, 3000000, 1),
(4, 170, 3000000, 1),

(1, 72, 3100000, 2),
(2, 112, 3100000, 2),
(3, 153, 3100000, 2),
(4, 172, 3100000, 2),

(1, 71, 3100000, 3),
(2, 115, 3100000, 3),
(3, 155, 3100000, 3),
(4, 178, 3100000, 3);

INSERT INTO credits(credit_duration)
VALUES
(10),
(20),
(25);

INSERT INTO bankes(bank_name, credit_type) 
VALUES
('World Bank', 1),
('Dubai bank', 2),
('England bank', 3);

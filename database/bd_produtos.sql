DROP TABLE IF EXISTS produtos;

CREATE TABLE produtos (
	id			SERIAL			,
	name		VARCHAR(100)	NOT NULL,
	code		INTEGER			NOT NULL UNIQUE,
	price		MONEY 			NOT NULL,
	quantity	INTEGER			NOT NULL,
	size		VARCHAR(2)		NOT NULL
	
);

--INSERT INTO produtos ( name, code, price, quantity, size)
-- VALUES
	-- ('Blusa Manga Longa Branca', 1, 199.00, 1, 'M' ),
	-- ('Vestido Floral', 2, 150.00, 1, 'M'),
	-- ('Blusa Branca', 3, 90.00, 1, 'M');
	
SELECT * FROM produtos;	

------------------------------------------------------------------------------------

DROP TABLE IF EXISTS id_pedido;

CREATE TABLE id_pedido (
	id			SERIAL			PRIMARY KEY,
		
);

SELECT * FROM id_pedido;

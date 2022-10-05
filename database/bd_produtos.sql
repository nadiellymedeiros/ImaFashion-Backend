DROP TABLE IF EXISTS produtos_pedido;

CREATE TABLE produtos_pedido (
	produtos_id_pedido	INTEGER,			
	id			SERIAL			,
	name		VARCHAR(100)	NOT NULL,
	code		INTEGER			NOT NULL UNIQUE,
	price		MONEY 			NOT NULL,
	quantity	INTEGER			NOT NULL,
	size		VARCHAR(2)		NOT NULL
	
);


	
SELECT * FROM produtos_pedido;	

-----------------------------------------------------------------------------------------------------------------
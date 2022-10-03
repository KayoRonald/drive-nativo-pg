CREATE TABLE usuarios (
 id SERIAL CONSTRAINT pk_id_usuarios PRIMARY KEY,
 nome varchar(150) NOT NULL, 
 idade integer NOT NULL,
 email varchar(255) NOT NULL
);


INSERT INTO usuarios(nome,idade,email) VALUES ('joao', 18, 'joao@gmail.com');
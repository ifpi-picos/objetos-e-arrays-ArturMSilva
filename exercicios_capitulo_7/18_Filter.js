// Crie um array de objetos representando carros, cada 
// um com propriedades nome e ano, e use filter para criar 
// um novo array contendo apenas os carros fabricados após o ano 2010.

const carros = [
    { nome: "Toyota Corolla", ano: 2009 },
    { nome: "Honda Civic", ano: 2019 },
    { nome: "Ford Mustang", ano: 2021 },
    { nome: "Chevrolet Camaro", ano: 2000 },
    { nome: "BMW Série 3", ano: 2022 }
  ];

const carrosAntigos = carros.filter((carros) => carros.ano > 2010)
console.log(carrosAntigos)
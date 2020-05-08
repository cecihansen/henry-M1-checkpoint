var expect = require("chai").expect;
/* eslint-disable no-undef */
const {
  objContains,
  countArray,
  LinkedList,
  Queue,
  cardGame,
  generateBST,
  binarySearch,
  allAnagrams,
  selectionSort,
  closureSum,
} = require('../checkpoint.js');

describe('Checkpoint Tests', function() {

  describe('EJERCICIO 1: objContains', function() {
     const user = {
         id: 6,
         email: 'homero@maxpower.com',
         infoPersonal: {
             nombre: 'Homero Simpson',
             direccion: {
                 calle: 'Avenida Siempreviva',
                 numero: 742,
                 barrio: 'Springfield',
                 estado: 'Massachusetts'
             }
         }
     }
    it('Debería devolver true si encuentra la propiedad y su valor correcto', function() {
      expect(objContains(user, "barrio", "Springfield")).to.equal(true);
    });
    it('Debería devolver false si NO encuentra la propiedad', function() {
      expect(objContains(user, "empleo", "Empleado en planta nuclear")).to.equal(false);
    });
    it('Debería devolver false si encuentra la propiedad pero su valor es incorrecto', function() {
      expect(objContains(user, "barrio", "Shelbyville")).to.equal(false);
    });
    it('Debería devolver false si encuentra existe el valor pero no asociado a dicha propiedad', function() {
      expect(objContains(user, "email", "Springfield")).to.equal(false);
    });
  });

  describe('EJERCICIO 2: countArray', function() {
    it('Debería devolver 28 cuando el array es [1, [2, [3,4]], [5,6], 7]', function() {
      expect(countArray([1, [2, [3,4]], [5,6], 7])).to.equal(28);
    });
    it('Debería devolver 0 cuando el array está vacío', function() {
      expect(countArray([])).to.equal(0);
    });
  });

  describe('LinkedList', function() {
    var linkedList;

    beforeEach(function() {
      linkedList = new LinkedList();
    });

    it('tiene metodos `size`, `addInPos` y `reverse`', function() {
      expect(typeof linkedList.size).to.equal('function');
      expect(typeof linkedList.addInPos).to.equal('function');
      expect(typeof linkedList.reverse).to.equal('function');
    });

    it('EJERCICIO 3: size debe devolver el tamaño actual de la lista', function() {
      expect(linkedList.size()).to.equal(0);
      linkedList.add(1);
      linkedList.add(2);
      expect(linkedList.size()).to.
      equal(2);
      linkedList.add(3);
      expect(linkedList.size()).to.equal(3);
    });

    it('EJERCICIO 4: addInPos debe agregar un nuevo nodo en la posición correcta', function() {
      expect(linkedList.addInPos(2,2)).to.equal(false);
      linkedList.add(1);
      linkedList.add(2);
      expect(linkedList.addInPos(2,3)).to.equal(true);
      expect(linkedList.head.next.next.value).to.equal(3);
      expect(linkedList.head.next.next.next).to.equal(null);
      linkedList.add(4);
      linkedList.add(6);
      expect(linkedList.addInPos(4,5)).to.equal(true);
      expect(linkedList.head.next.next.next.next.value).to.equal(5);
      expect(linkedList.head.next.next.next.next.next.value).to.equal(6);
    });


    it('EJERCICIO 5: reverse debe devolver una lista invertida de la original', function () {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      var revertedLinkedList = linkedList.reverse();
      expect(revertedLinkedList.remove()).to.equal(1);
      expect(revertedLinkedList.remove()).to.equal(2);
      expect(revertedLinkedList.remove()).to.equal(3);
    });
  });

  describe('EJERCICIO 6: cardGame', function() {
    var mazoUserA;
    var mazoUserB;

    beforeEach(function() {
      mazoUserA = new Queue();
      mazoUserB = new Queue();
    });

    it('Debe devoler `Game tie!` si el juego termino empatado', function() {
      mazoUserA.enqueue(4);
      mazoUserA.enqueue(7);
      mazoUserA.enqueue(11);
      mazoUserB.enqueue(4);
      mazoUserB.enqueue(7);
      mazoUserB.enqueue(11);
      expect(cardGame(mazoUserA, mazoUserB)).to.equal("Game tie!");
    });

    it('Debe devoler `A wins!` si el jugador A es el ganador', function() {
      mazoUserA.enqueue(4);
      mazoUserA.enqueue(2);
      mazoUserA.enqueue(10);
      mazoUserA.enqueue(11);
      mazoUserB.enqueue(6);
      mazoUserB.enqueue(9);
      mazoUserB.enqueue(10);
      mazoUserB.enqueue(3);
      expect(cardGame(mazoUserA, mazoUserB)).to.equal("A wins!");
    });

    it('Debe devoler `B wins!` si el jugador B es el ganador', function() {
      mazoUserB.enqueue(4);
      mazoUserB.enqueue(2);
      mazoUserB.enqueue(10);
      mazoUserB.enqueue(11);
      mazoUserA.enqueue(6);
      mazoUserA.enqueue(9);
      mazoUserA.enqueue(10);
      mazoUserA.enqueue(3);
      expect(cardGame(mazoUserA, mazoUserB)).to.equal("B wins!");
    });
  });

  describe('EJERCICIO 7: generateBST', function() {

    it('Debe generar un arbol correctamente a partir de un array', function() {
      var tree = generateBST([16,6,23,2,17,31,14,5]);
      expect(tree.value).to.equal(16);
      expect(tree.left.value).to.equal(6);
      expect(tree.left.left.value).to.equal(2);
      expect(tree.left.left.right.value).to.equal(5);
      expect(tree.left.right.value).to.equal(14);
      expect(tree.right.left.value).to.equal(17);
      expect(tree.right.right.value).to.equal(31);
    });

  });

  describe('EJERCICIO 8: binarySearch', function() {
    it('Debe devolver 1 para el arreglo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] si busca el 2', function() {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).to.equal(1);
    });
    it('Debería devolver 4 para el arreglo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] si busca el 5', function() {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).to.equal(4);
    });

    it('Debería devolver -1 si no encuentra el valor buscado en el arreglo', function() {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).to.equal(-1);
    });
  });


  describe('EJERCICIO 9: selectionSort', function() {
    it('Debe retornar el arreglo ordenado', function() {
      expect(selectionSort([4, 3, 2, 1])).to.deep.equal([1,2,3,4]);
      expect(selectionSort([1, 2, -4, 3])).to.deep.equal([-4,1,2,3]);
    });
    it('Debe devolver un arregle vacío si el argumento recibido es un array vacío', function() {
      expect(selectionSort([])).to.deep.equal([]);
    });
  });


  describe('EJERCICIO 10: closureSum', function() {
    it('La función generada debe sumar 5 al argumento pasado', function() {
      var sumaCinco = closureSum(5);
      var sumaDiez = closureSum(10);
      expect(sumaCinco(2)).to.equal(7);
      expect(sumaCinco(11)).to.equal(16);
      expect(sumaDiez(2)).to.equal(12);
      expect(sumaDiez(11)).to.equal(21);
    });
    it('Debe devolver un arregle vacío si el argumento recibido es un array vacío', function() {
      expect(selectionSort([])).to.deep.equal([]);
    });
  });

  describe('EXTRA CREDIT: allAnagrams', function() {
    it('Debe retornar todos los anagramas posibles para "abc"', function() {
      expect(allAnagrams('abc')).to.deep.equal([ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]);
    });
    it('Extra-Extra - Debe retornar todos los anagramas posibles para "aab" sin repeticiones', function() {
      expect(allAnagrams('aab')).to.deep.equal(['aab', 'aba', 'baa']);
    });
  });
});

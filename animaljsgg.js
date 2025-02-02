        let sredas = [];
        let animals = [];

        class Sreda {
            constructor(a, b) {
                this.type = a;
                this.geography = b;
            }
            info() {
                return 'Среда обитания: ' + this.type + ' ' + 'География: ' + this.geography;
            }
        }

        class Animal {
            constructor(name, age, sr) {
                this.name = name;
                this.age = age;
                this.sr = sr;
            }

            info() {
                return 'Животное: ' + this.name + ' '+'Возраст: ' + this.age + ' '+'Среда: ' + this.sr.type + ' ' + this.sr.geography;
            }
        }

        class Fish extends Animal {
            constructor(name, age, sr, fishProperty) {
                super(name, age, sr);
                this.fishProperty = fishProperty;
            }
            info() {
                return super.info() + ''+ 'Тип: Рыба' + ' ' + 'Цвет чешуи: : ' + this.fishProperty;
            }
        }

        class Bird extends Animal {
            constructor(name, age, sr, featherColor, beakType) {
                super(name, age, sr);
                this.featherColor = featherColor;
                this.beakType = beakType;
            }
            info() {
                return super.info() + ' '+'Тип: Птица'+' '+'Цвет пера: ' + this.featherColor + ' '+'Размах крыльев: ' + this.beakType+' '+'метра(ов)';
            }
        }

        class Predator extends Animal {
            constructor(name, age, sr, clanim, life) {
                super(name, age, sr);
                this.clanim = clanim;
                this.life = life;
            }
            info() {
                return super.info() + ' ' + 'Тип: Хищник' + ' '+'Класс животного: ' + this.clanim + ' ' + 'Образ жизни: ' + this.life;
            }
        }

        class Herbivore extends Animal {
            constructor(name, age, sr, predators) {
                super(name, age, sr);
                this.predators = predators;
            }
            info() {
                return super.info() + ' ' + 'Тип: Растительноядное '+' '+'Цвет шерсти: ' + this.predators  ;
            }
        }

        function newSr() {
            let a = document.getElementById('type').value;
            let b = document.getElementById('geography').value;
            let sr = new Sreda(a, b);
            sredas.push(sr);
            document.getElementById('type').value = '';
            document.getElementById('geography').value = '';
            listSr();
        }

        function showInput() {
            const dropdown = document.getElementById('dropdown');
            const inputGroups = document.querySelectorAll('.inputGroup');

            inputGroups.forEach(group => group.style.display = 'none');

          
            if (dropdown.value) {
                document.getElementById(dropdown.value + 'Input').style.display = 'block';
            }
        }
function newAnim() {
            let index = document.getElementById('hab').selectedIndex; 
            let sr = sredas[index];
            let name = document.getElementById('name').value;
            let age = document.getElementById('age').value;

        
            let subclass = document.getElementById('dropdown').value;

            let animal;

            if (subclass === 'fish') {
                let fishProperty = document.getElementById('fishProperty').value; 
                animal = new Fish(name, age, sr, fishProperty);
            } else if (subclass === 'birds') {
                let featherColor = document.getElementById('featherColor').value; 
                let beakType = document.getElementById('beakType').value; 
                animal = new Bird(name, age, sr, featherColor, beakType);
            } else if (subclass === 'predator') {
                let clanim = document.getElementById('clanim').value; 
                let life = document.getElementById('life').value; 
                animal = new Predator(name, age, sr, clanim, life);
            } else if (subclass === 'herbivore') {
                let predators = document.getElementById('predtorsv').value; 
                animal = new Herbivore(name, age, sr, predators);
            } else {
                animal = new Animal(name, age, sr); 
            }

            animals.push(animal); 

            document.getElementById('name').value = '';
            document.getElementById('age').value = '';

         
            document.querySelectorAll('.inputGroup input').forEach(input => input.value = '');
        }

        function listSr() {
            let h = document.getElementById('hab');
            h.innerHTML = '';
            for (let i = 0; i < sredas.length; i++) {
                let option = document.createElement('option');
                option.innerHTML = sredas[i].type + ' ' + sredas[i].geography; 
                h.append(option);
            }
        }

        function seeAnimals() {
			let animalList = document.getElementById('animal-list');
			let selectedType = document.getElementById('animal-type').value;
			animalList.innerHTML = '';

			for (let animal of animals) {
				let shouldDisplay = false;

				if (selectedType === 'all') {
					shouldDisplay = true; // Показываем всех животных
				} else if (selectedType === 'fish' && animal instanceof Fish) {
					shouldDisplay = true; 
				}else if (selectedType === 'predators' && animal instanceof Predator) {
					shouldDisplay = true; 
				} else if (selectedType === 'birds' && animal instanceof Bird) {
					shouldDisplay = true; 
				}else if (selectedType === 'herbivores' && animal instanceof Herbivore) {
					shouldDisplay = true;
				}

				if (shouldDisplay) {
					let p = document.createElement('p');
					p.innerText = animal.info(); 
					animalList.appendChild(p);
        }
    }
}

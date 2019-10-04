import Personne from 'assets/js/tasks.js';

let list = [
    new Personne('Fadika', 'Mohamed', '31', 'fadika.mohamed02@gmail.com')
]

ListeningStateChangedEvent.forEach(personne => {
    console.log(list);
})


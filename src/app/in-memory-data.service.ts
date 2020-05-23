import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const members = [
            {id: 1, name: 'Aaron Taylor'},
            {id: 2, name: 'Alan Walker'},
            {id: 3, name: 'Alicia Keys'},
            {id: 4, name: 'Aurora'},
            {id: 5, name: 'Avicii'},
            {id: 6, name: 'AwolNation'},
            {id: 7, name: 'Avril Lavigne'},
            {id: 8, name: 'Bastille'},
            {id: 9, name: 'Billie Irish'},
            {id: 10, name: 'Billy Joel'},
            {id: 11, name: 'Black Eyed Peas'},
            {id: 12, name: 'Bruno Mars'},
        
        ];

        return { members };
    }
}
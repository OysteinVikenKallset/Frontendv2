"use client"
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Task from './Task';
import axios from 'axios';

type User = {
    id: number;
    name: string;
    address: string;
    phone: string;
    birthday: string;
    phoneDigitSum: number;
    isLeapYearBirthday: string;
};

export default function Fullstack() {
    const [name, setName] = useState("Petter");
    const [address, setaddress] = useState("Tiller");
    const [phone, setPhone] = useState("97562249");
    const [birthday, setBirthday] = useState("1990-01-01");
    /*const [leapYear, setLeapYear] = useState("");
    const [tverrsum, setTverrsum] = useState(0);*/
    const [users, setUsers] = useState<User[]>([]);
    const [editingUserId, setEditingUserId] = useState<number>();
    const [editedUser, setEditedUser] = useState({ name: '', address: '', phone: '', birthday: '' });
    

    //Henter Users når siden lastes, og når brukere oppdateres
    useEffect(() => {
        usersGet();
    }, []);


    /** 
     * Update User (Hjelpefunksjoner til usersPut)
     */



    const handleEditClick = (user: User) => {
        setEditingUserId(user.id);
        setEditedUser({ ...user });
    };

    const handleUpdateClick = () => {
        usersPut();
        setEditingUserId(0);
    };

    const handleUpdateUserChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedUser(prev => ({ ...prev, [name]: value }));
    };

//Setter datoen på riktig format

    function formatDate(dateString: string) {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('nb-NO', options);
    }


    /**
     * Oppdaterer state på variablene når det gjøres endringer i inputfeltet i form
     */

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleaddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        setaddress(event.target.value);
    }

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newPhone = event.target.value;
        setPhone(newPhone);
    }

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newBirthday = event.target.value;
        setBirthday(newBirthday);
    }


    //Innsending av kontaktskjema

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Forhindrer formen i å sende en HTTP POST request
        userPost(name, address, phone, birthday);
        
    };
    



    /**
     * apiServices
     */

    const usersGet = () => {
        axios.get('https://kallsetbackendversjon2.azurewebsites.net/api/Users')
            .then(response => {
                // Behandle responsen her
                console.log(response.data);
                setUsers(response.data);
               
             
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    const userPost = (newName: string, newAdress: string, newPhone: string, newBirthday: string) => {
        axios.post('https://kallsetbackendversjon2.azurewebsites.net/api/Users', {
            id: 0,
            name: newName,
            address: newAdress,
            phone: newPhone,
            birthday: newBirthday
        })
            .then(response => {
                console.log(response);
                usersGet();
               
            })
            .catch(error => {
                console.log(error);
            })
    }

    const usersPut = () => {
        axios.put(`https://kallsetbackendversjon2.azurewebsites.net/api/Users/${editingUserId}`, {
            id: editingUserId,
            name: editedUser.name,
            address: editedUser.address,
            phone: editedUser.phone,
            birthday: editedUser.birthday
        })
            .then(response => {
                console.log(response);
                usersGet();

            })
            .catch(error => {
                console.log(error);
            })
    }

    const usersDelete = (userId: number) => {
        axios.delete(`https://kallsetbackendversjon2.azurewebsites.net/api/Users/${userId}`)
            .then(response => {
                console.log(response.data);
                usersGet();
            })
            .catch(error => {
                console.log(error.response);
            });
            
    }

    //Beregner statistikk

    const calculateStatistics = () => {
        const totalUsers = users.length;
        let sumNameLength = 0;
        let leapYearBirthdays = 0;
    
        users.forEach(user => {
            sumNameLength += user.name.length;
            if (user.isLeapYearBirthday) { 
                leapYearBirthdays++;
            }
        });
    
        const averageNameLength = totalUsers > 0 ? sumNameLength / totalUsers : 0;
    
        return {
            averageNameLength,
            leapYearBirthdays,
            totalUsers
        };
    };

    const { averageNameLength, leapYearBirthdays, totalUsers } = calculateStatistics();


    return (
        <div>
            <h1>Frontend og backend</h1>
           
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label htmlFor="name">Navn<span className='text-red-500'> *</span></label>
                    <input id="name" type="text" value={name} onChange={handleNameChange} required />
                    <label htmlFor="address">Addresse<span className='text-red-500'> *</span></label>
                    <input id="address" type="text" value={address} onChange={handleaddressChange} required />
                    <label htmlFor="phone">Telefonnummer<span className='text-red-500'> *</span></label>
                    <input id="phone" type="tel" value={phone} onChange={handlePhoneChange} required />
                    <label htmlFor="birthday">Fødselsdag<span className='text-red-500'> *</span></label>
                    <input id="birthday" type="date" defaultValue="1990-01-01" value={birthday} onChange={handleDateChange} required />
                    <button type="submit" value="Submit">Legg til bruker</button>
                </div>
            </form>

            <div>
                {users.length > 0 && (
                    <div className='flex flex-row flex-wrap'>
                        {users.map(user => (
                            <div key={user.id} className='pt-2 pb-2 pl-4 pr-4 m-2 rounded-3xl bg-amber-200 text-black w-full lg:max-w-64'>
                                {editingUserId === user.id ? (
                                    // Vis input-felter for redigering
                                    <ul key={user.id} className='mt-2 mb-2'>
                                        <li><input name="name" value={editedUser.name} onChange={handleUpdateUserChange} /></li>
                                        <li><input name="address" value={editedUser.address} onChange={handleUpdateUserChange} /></li>
                                        <li><input name="phone" value={editedUser.phone} onChange={handleUpdateUserChange} /></li>
                                        <li><input name="birthday" type="date" value={editedUser.birthday} onChange={handleUpdateUserChange} /></li>
                                        <li><button onClick={handleUpdateClick}>Oppdater</button></li>
                                    </ul>
                                ) : (
                                    <div>
                                    <h3 className='font-semibold text-center mb-0'>{user.name}</h3>
                                    <ul key={user.id} className='mb-4'>
                                        <li > <span className='font-semibold'>Id: </span> {user.id}</li>
                                        <li > <span className='font-semibold'>Address: </span>{user.address}</li>
                                        <li > <span className='font-semibold'>Telefon: </span>{user.phone}</li>
                                        <li > <span className='font-semibold'>Birthday: </span>{formatDate(user.birthday)}</li>
                                        <li > <span className='font-semibold'>Tverrsum av tlf: </span>{user.phoneDigitSum}</li>
                                        <li > <span className='font-semibold'>Skuddår: </span>{user.isLeapYearBirthday ? 'Ja' : 'Nei'}</li>
                                    </ul>
                                    <div className='flex justify-center'>
                                    <button onClick={() => handleEditClick(user)}>Endre</button>
                                    <button onClick={() => usersDelete(user.id)}>Fjern</button>
                                </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='pt-4'>
                <h2>Statistikk</h2>
                <p>Gjennomsnittlig lengde på navn: {averageNameLength}</p>
                <p>Antall personer født i skuddår: {leapYearBirthdays}</p>
                <p>Totalt antall brukere: {totalUsers}</p>

            </div>
        </div>
    )
}
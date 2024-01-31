'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { postData } from '@/data/fetchData';

export const AddContact = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAddContact = async () => {
        setLoading(true);
        const result = await postData({ name, phone_number: number });
        router.refresh();
        setLoading(false);
        setName('');
        setNumber('');
    };

    return (
        <div className="max-w-xs md:max-w-2xl lg:max-w-3xl m-auto">
            <input
                type="text"
                name="name"
                className="py-2 px-4 border w-full rounded-lg focus:outline-indigo-400"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                name="number"
                placeholder="Number"
                className="py-2 px-4 my-4 border w-full rounded-lg focus:outline-indigo-400"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button
                disabled={loading}
                onClick={handleAddContact}
                className="transition-all hover:bg-green-700 bg-green-600 py-2 px-4 mb-4 text-white rounded-md "
            >
                Add
            </button>
            {loading && <p className="py-2">Menambah kontak baru . . .</p>}
        </div>
    );
};
